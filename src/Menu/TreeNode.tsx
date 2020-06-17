import React, { useContext } from 'react';
import utils from '../utils';
import NodeHeader from './nodeHeader';
import { VelocityTransitionGroup } from 'velocity-react';
import animations from './animations';
import { findRoot } from './reducer';
import MenuContext from './MenuContext';

const TreeNode = (props: { node: any; mode: string; onSelect: any; datasource: any[]; classNames: any; }) => {
    const { node, mode, onSelect, datasource, classNames } = props;
    const { itemCls, submenu, submenuList } = classNames;
    const context = useContext(MenuContext);
    
    const ishc = animations.isHc({ parent: node.parent, mode });
    const terminal = !node.children;
    const timer = {
        stamp: 0,
        delay: 200
    };
    
    const update = (code: number) => {
        node.opened = code === 1 ? true : false;
        const parent = findRoot(node, []);
        const newData = [...datasource];
        if (parent) {
            newData[parent.index] = parent;
        }
        context.setDataList(newData);
    }
    const open = () => {
        window.clearTimeout(timer.stamp);
        timer.stamp = window.setTimeout(() => update(1), timer.delay);
    }
    const close = () => {
        timer.stamp = window.setTimeout(() => update(0), timer.delay);
    }

    const onHover = {
        onMouseOver: () => open(),
        onMouseLeave: () => close(),
    }
    const onHandle = mode === 'vertical' ? {  } : { ...onHover }

    const renderTreeNode = (child: { index: any; }) => (<TreeNode
        mode={mode}
        node={child}
        onSelect={onSelect}
        classNames={classNames}
        datasource={datasource}
        key={child.index}
    />);

    const renderChildren = (node: { children: any; }) => {
        let children = node.children;
        if (!utils.isArray(children)) {
            children = children ? [children] : [];
        }
        return (
            children.length ?
                <ul className={submenuList}>
                    {children.map((child: any) => renderTreeNode(child))}
                </ul>
                : null
        )
    };

    return (
        <li className={itemCls} {...onHandle}>
            <NodeHeader
                mode={mode}
                node={node}
                onSelect={onSelect}
                classNames={classNames}
                datasource={datasource}
                terminal={terminal}
                animations={animations}
            />
            <VelocityTransitionGroup
                {...animations.drawer({ ishc })}
                className={submenu}
            >
                {node.opened && renderChildren(node)}
            </VelocityTransitionGroup>
        </li>
    )
}

export default TreeNode;