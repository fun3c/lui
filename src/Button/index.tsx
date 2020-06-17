import React, { useState } from 'react';
import { ButtonProps } from './interface';
import classnames from 'classnames';
import Icon from '../Icon';
import utils from '@/utils';
import './style/index.less';

const prefixCls = 'lui-btn';

const Button = (props: ButtonProps) => {
  const [isRepple, setRepple] = useState(false);
  const [rippleStyle, setRippleStyle] = useState<object>({});
  let timer: any;
  const {
    children,
    className,
    type,
    intent,
    icon,
    size,
    block = false,
    circular = false,
    loading = false,
    disabled = false,
    animate = false,
    htmlType = 'button',
    ...ohter
  } = props;
  const appearance = type ? type : (!type || type === 'default') && '';

  const cls = classnames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}__${intent}`]: intent,
      [`${prefixCls}-${appearance}`]: appearance,
      [`${prefixCls}-circular`]: circular,
      [`${prefixCls}-anim`]: animate,
      [`${prefixCls}-block`]: block,
    },
    className,
  );
  const rippleCls = classnames('ripple', { rippleEffect: isRepple });

  const handleClick = (e: any) => {
    const { onClick, loading } = props;
    e.target && rippleAnim(e);
    if (typeof loading !== 'boolean') return;
    onClick && onClick(e);
  };

  const rippleAnim = (e: React.MouseEvent<Element, MouseEvent>) => {
    let { width, height } = utils.getSize(e.target);
    const { top, left } = utils.getClinetRect(e.target);
    if (width >= height) {
      height = width + 2;
    } else {
      width = height + 2;
    }
    const x = Math.round(e.pageX - left - width / 2);
    const y = Math.round(e.pageY - top - height / 2);
    clearTimeout(timer);
    setRepple(true);
    setRippleStyle({ width, height, left: x, top: y });
    timer = setTimeout(() => setRepple(false), 400);
  };
  const repple = () =>
    isRepple && <span className={rippleCls} style={rippleStyle}></span>;
  const iconType = loading ? 'loading' : icon;
  const iconNode = iconType ? <Icon name={iconType} /> : null;

  return (
    <button
      type={htmlType}
      className={cls}
      disabled={disabled}
      onClick={handleClick}
      {...ohter}
    >
      {iconNode}
      {children &&  utils.isString(children) ? <span>{children}</span> : children}
      {animate && <span className="animate">{repple()}</span>}
    </button>
  );
};

export default Button;
