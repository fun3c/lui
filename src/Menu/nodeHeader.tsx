import React, { useContext } from 'react';
import utils from '../utils';
import classnames from 'classnames';
import Icon from '../Icon';
import { VelocityComponent } from 'velocity-react';
import MenuContext from './MenuContext';
import { mixin } from './reducer';


const NodeHeader = (props: { node: any; mode: any; onSelect: any; datasource: any; classNames: any; terminal: any; animations: any; }) => {
    const context = useContext(MenuContext);
    const { node, mode, onSelect, datasource, classNames, terminal, animations } = props;
    const { itemTitle, itemActive, submenuActive } = classNames;
    const ishc = animations.isHc({ parent: node.parent, mode });

    const headProps = {
        className: classnames(itemTitle, {
            [`${itemActive}`]: !utils.isArray(node.children) && node.active,
            [`${submenuActive}`]: utils.isArray(node.children) && node.active
        }),
        onClick: (e: { stopPropagation: () => void; }) => {
            if (node.children && mode === 'horizontal') return;
            let newData = mixin([], node, datasource, mode);
            context.setDataList(newData);
            utils.isFunction(onSelect) && onSelect({ e, node, data: newData })
            e.stopPropagation();
        }
    };

    
    const arrow = () => ishc ? 'right' : 'down';
    return (
        <div {...headProps}>
            <div className={`${itemTitle}-cont`}>{utils.isFunction(node.name) ? node.name() : node.name}</div>
            {
                !terminal &&
                <div className={`${itemTitle}-icon`}>
                    <VelocityComponent {...animations.toggle(!node.opened)}>
                        <Icon name={`${arrow()}-arrow`} />
                    </VelocityComponent>
                </div>

            }
        </div>
    )
}

export default NodeHeader;