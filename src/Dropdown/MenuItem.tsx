import React, { useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import { DropdownMenuItemProps } from './interface';
import DropdownContext from './DropdownContext';
import classnames from 'classnames';
import utils from '@/utils';

const prefixCls = 'lui-dropdown';

const DropdownMenuItem: React.FunctionComponent<DropdownMenuItemProps> = (props: DropdownMenuItemProps) => {
  const context = useContext(DropdownContext);
  const {
    children,
    className,
    divider,
    disabled,
    name,
    ...other
  } = props;
  const liEl: React.RefObject<HTMLLIElement> = useRef(null);
  const isActive =
    !utils.isUndefined(context.activeName) &&
    !utils.isUndefined(name) &&
    context.activeName === name;

  const cls = classnames(
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-active`]: isActive,
    },
    className,
  );

  const liProps = {
    role: 'menuitem',
    className: cls,
    ...other,
    onClick: function (event: any) {
      const item: any = ReactDOM.findDOMNode(liEl.current);
      const current = {
        event,
        e: event,
        name: props.name,
        item: item.innerText,
      };
      utils.isFunction(context.callback) &&
        context.callback.call(this, current);
      utils.isFunction(props.onClick) &&
        props.onClick.apply(this, [event, ...arguments]);
      context.close.call(this);
      event.stopPropagation();
    },
  };

  return divider && !disabled ? (
    <li className={`${prefixCls}-divider`} />
  ) : (
    <li {...liProps} ref={liEl}>
      {utils.isString(children) ? <span>{children}</span> : children}
    </li>
  );
};


export default DropdownMenuItem;