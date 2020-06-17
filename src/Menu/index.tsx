import React, { useState } from 'react';
import classnames from 'classnames';
import utils from '../utils';
import TreeNode from './TreeNode';
import MenuContext from './MenuContext';
import { MenuPropsType } from './interface';
import './styles/index.less';

const prefixCls = 'lui-menu';
const submenu = 'lui-submenu';

function Menu(props: MenuPropsType) {
  const {
    data,
    onSelect,
    className,
    mode = 'horizontal',
    theme,
    ...other
  } = props;
  const m = !mode ? 'horizontal' : mode;


  const classNames = {
    prefixCls,
    itemCls: `${prefixCls}-item`,
    itemTitle: `${prefixCls}-title`,
    itemActive: `${prefixCls}-active`,
    submenu: submenu,
    submenuActive: `${submenu}-active`,
    submenuList: `${submenu}-list`,
  };

  const cls = classnames(
    prefixCls,
    {
      [`${prefixCls}-${m}`]: m,
      [`${prefixCls}-dark`]: m === 'vertical' && theme === 'dark',
    },
    className,
  );

  const initTree = (data: any, node?: { index: any; } | undefined) => {
    return utils.castArray(data).map((item: { parent: any; index: string; children: any; }, index: any) => {
      if (node) {
        item.parent = node;
        item.index = `${node.index}.${index}`;
      }
      if (item) {
        item.index = index;
        if (item.children) initTree(item.children, item);
      }
      return item;
    });
  };
  const newTree = (data => {
    const depTree = (node: any, ope: { (node: any): void; (arg0: any): void; }) => {
      const walk = (node: { level: number; children: any[]; active: any; }, depth = 1) => {
        node.level = depth;
        if (node.children) node.children.forEach((item: any) => walk(item, depth + 1));
        if (node.active) ope(node);
        return node;
      };
      return walk(node);
    };
    const ope = (node: { parent: any; }) => {
      if (node.parent) {
        node.parent.active = true;
        ope(node.parent);
      }
    };
    return data.map((item: any) => depTree(item, ope));
  })(initTree(data));

  const [dataList, setDataList] = useState(newTree);

  return (
    <MenuContext.Provider value={{ setDataList }}>
      <ul className={cls} {...other}>
        {dataList.map((node: { index: string | number | undefined; }) => (
          <TreeNode
            mode={m}
            node={node}
            onSelect={onSelect}
            datasource={dataList}
            classNames={classNames}
            key={node.index}
          />
        ))}
      </ul>
    </MenuContext.Provider>
  );
}

export default Menu;
