import React, { useContext } from 'react';
import classnames from 'classnames';
import DropdownContext from './DropdownContext';
import { DropdownMenuProps } from './interface';

const prefixCls = 'lui-dropdown';
const DropdownMenu:React.FunctionComponent<DropdownMenuProps> = (props:DropdownMenuProps) => {
    const context = useContext(DropdownContext);
    const { className, groupTitle, children, ...other } = props; 

    const overlayProps = () => {
      const hanleHover = {
        onMouseOver: context.open,
        onMouseOut: context.close,
        onClick: context.close,
      };
      const hanleClick = {
        onClick: function(e: Event) {
          const onclick = props.onClick;
          onclick && onclick.apply(this, [e, ...arguments]);
          context.close();
          e.stopPropagation();
        },
      };
      const handle = context.isHover
        ? { ...hanleHover }
        : context.isClick
        ? { ...hanleClick }
        : () => {};
      return { ...other, ...handle };
    };


    const sucls = {
      [`${prefixCls}-item-${context.align}`]: context.align,
    };
    const cls = classnames(`${prefixCls}-item`, sucls, className);
    const clsGroup = classnames(`${prefixCls}-group`, sucls, className);

     const renderGroup = () => {
       return (
         <ul role="menu" className={clsGroup} {...overlayProps()}>
           <li className={`${prefixCls}-group-title`}>{groupTitle}</li>
           <li className={`${prefixCls}-group-list`}>
             <ul className={`${prefixCls}-group-list-item`}>{children}</ul>
           </li>
         </ul>
       );
     };

    return !groupTitle ? (
      <ul role="menu" className={cls} {...overlayProps()}>
        {children}
      </ul>
    ) : (
      renderGroup()
    );
}

export default DropdownMenu;