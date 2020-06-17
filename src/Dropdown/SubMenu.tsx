import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownContext from './DropdownContext';
import classnames from 'classnames';
import Icon from '../Icon';
import { SubDropdownPropsType } from './interface';

const prefixCls = 'lui-dropdown-submenu';

const SubDropdown: React.SFC<SubDropdownPropsType> = (
  props: SubDropdownPropsType,
) => {
  const {
    className,
    children,
    trigger,
    disabled = false,
    toggle,
    direction = 'right',
    ...other
  } = props;
  const context = useContext(DropdownContext);
  const triggers: any = trigger ? trigger : context.trigger;
  const clsWrap = classnames(`${prefixCls}`, `${prefixCls}-${direction}`, {
    [`${prefixCls}-upwards`]: context.upwards,
  });

  const [state, setState] = useState({ isOpen: false });

  let timer: any = {
    stamp: 0,
    delay: 300,
  };

  const isClick = /^click/i.test(triggers) && !disabled;
  const isHover = (/^hover/i.test(triggers) || !triggers) && !disabled;

  const open = () => {
    window.clearTimeout(timer.stamp);
    timer.stamp = setTimeout(() => {
      setState({ isOpen: true });
    }, timer.delay);
  };

  const close = () => {
    timer.stamp = window.setTimeout(
      () => setState({ isOpen: false }),
      timer.delay,
    );
  };

  const handleClick = (e: any) => {
    setState({ isOpen: !state.isOpen });
    e.stopPropagation();
  };
  const handleProps = {
    onClick: isClick
      ? handleClick
      : null,
    onMouseOver: isHover
      ? open
      : null,
    onMouseLeave: isHover
      ? close
      : null,
  };
  const toggleProps = {
    ...handleProps,
    direction: direction,
  };

  const menuitemProps = {
    role: 'menuitem',
    className: classnames({ [`lui-dropdown-disabled`]: disabled }),
    ...handleProps,
  };

  const toggleChild = (children: React.ReactChild) => {
    return direction === 'right'
      ? [
          children,
          <Icon name={`${direction}-arrow`} key={`${direction}-arrow`} />,
        ]
      : [
          <Icon name={`${direction}-arrow`} key={`${direction}-arrow`} />,
          children,
        ];
  };

  const renderToggle = () => {
    let toggleRc: any = toggle;
    if (typeof toggle === 'function') {
      toggleRc = toggle();
    }
    toggleRc = React.cloneElement(toggleRc, { ...toggleProps }, [
      ...toggleChild(toggleRc.props.children),
    ]);
    return toggleRc;
  };
  const dir = direction === 'right' ? 'left' : 'right';
  const fadeCls = context.upwards ? `fade-up-${dir}` : `fade-${dir}`;
  return (
    <li {...menuitemProps}>
      {renderToggle()}
      <div className={clsWrap}>
        <CSSTransition
          in={state.isOpen}
          timeout={300}
          classNames={fadeCls}
          unmountOnExit
        >
          <ul {...other}>{children}</ul>
        </CSSTransition>
      </div>
    </li>
  );
};

export default SubDropdown;
