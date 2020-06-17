import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import { DropdownPropsType } from './interface';
import DropdownContext from './DropdownContext';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubDropdown from './SubMenu';
import utils from '@/utils';
import './styles/index.less';


const prefixCls = 'lui-dropdown';

function Dropdown (props: DropdownPropsType) {
  const [isShow, setShow] = useState<boolean>(false);
  const {
    className,
    overlay,
    trigger = '',
    callback,
    toggle,
    placement = 'center',
    align = 'center',
    animate = true,
    activeName,
    upwards = false,
  } = props;

  const timer = {
    stamp: 0,
    timeIn: 200,
    timeOut: 200,
  };

  const isClick = /^click/i.test(trigger);
  const isHover = /^hover/i.test(trigger) || !trigger;

  const toggleEl: React.RefObject<HTMLElement> = useRef(null);
  const popupEl: React.RefObject<HTMLDivElement> = useRef(null);

  const getNode = (elem: HTMLElement) => ReactDOM.findDOMNode(elem);

  const open = useCallback(
    (e: any, toggle: boolean): void => {
      window.clearTimeout(timer.stamp);
      timer.stamp = window.setTimeout(() => {
        toggle ? setShow(!isShow) : setShow(true);
      }, timer.timeIn);
      e.stopPropagation();
    },
    [timer, isShow, setShow],
  );

  const close = useCallback((): void => {
    timer.stamp = window.setTimeout(function(){
        setShow(false);
    }, timer.timeOut);
  }, [timer, setShow]);

  const handleClickHide = useCallback(
    e => {
      const toggleNode = toggleEl.current && getNode(toggleEl.current);
      const popupNode = popupEl.current && getNode(popupEl.current);
      isShow &&
        toggleNode &&
        e.target &&
        toggleNode &&
        !toggleNode.contains(e.target) &&
        popupNode &&
        !popupNode.contains(e.target) &&
        close();
    },
    [isShow, close],
  );

  useEffect(() => {
    utils.addEvent(document, 'click', handleClickHide);
    return () => {
      utils.removeEvent(document, 'click', handleClickHide);
      window.clearTimeout(timer.stamp);
    };
  }, [isShow, handleClickHide]);

  const toggleProps = useCallback(
    () => ({
      onClick: isClick
        ? (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => open(e, true)
        : null,
      onMouseOver: isHover ? open : null,
      onMouseLeave: isHover ? close : null,
    }),
    [isClick, isHover, open, close],
  );

  const renderToggle = useMemo(() => {
    let toggleRc: any = toggle;
    if (typeof toggleRc === 'function') {
      toggleRc = toggle();
    }
    return React.cloneElement(
      <span />,
      {
        ...toggleProps(),
        ref: toggleEl,
        className: `${prefixCls}-toggler`,
      },
      toggleRc,
    );
  }, [prefixCls, toggle, toggleProps, toggleEl]);

  const renderOverlay: any = useMemo(
    () => (typeof overlay === 'function' ? overlay() : overlay),
    [overlay],
  );

  const renderMenus = useMemo(() => {
    const menuPrefix = `${prefixCls}-menu`;
    const menClas = classnames(menuPrefix, {
      [`${prefixCls}-upwards`]: upwards,
    });
    const fadeCls = classnames({
      [`${prefixCls}-group-wrapper`]: utils.isString(renderOverlay.type),
      [`fade-up-${placement}`]: upwards,
      [`fade-${placement}`]: !upwards,
    });

    return (
      <div className={menClas} ref={popupEl}>
        <CSSTransition
          in={isShow}
          timeout={300}
          enter={animate}
          exit={animate}
          classNames={fadeCls}
          unmountOnExit
        >
          {renderOverlay}
        </CSSTransition>
      </div>
    );
  }, [isShow, placement, animate, prefixCls, renderOverlay, upwards]);

  const cls = classnames(
    prefixCls,
    {
      [`${prefixCls}-${placement}`]: placement,
    },
    className,
  );

  return (
    <DropdownContext.Provider
      value={{
        trigger,
        upwards,
        align,
        activeName,
        open,
        close,
        isClick,
        isHover,
        callback,
        setShow,
      }}
    >
      <div className={cls}>
        {renderToggle}
        {renderMenus}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.SubMenu = SubDropdown;

export default Dropdown;
