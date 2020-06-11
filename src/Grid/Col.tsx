import React from 'react';
import classnames from 'classnames';
import { gridPropsType } from './interface';
import getGutter from './getGutter';

const prefixCls = 'lui-col';

const Col = (props: gridPropsType) => {
  const { className, span, offset, children, ...other } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-${span}`]: span,
    [`${prefixCls}-offset-${offset}`]: offset,
  });

  return (
    <div className={cls} {...other} style={getGutter('padding', 1, other)}>
      {children}
    </div>
  );
};
export default Col;
