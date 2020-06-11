import React from 'react';
import classnames from 'classnames';
import { gridPropsType } from './interface';
import getGutter from './getGutter';
import './styles/index.less';

const prefixCls = 'lui-row';

const Row = (props: gridPropsType) => {
  const { className, gutter, justify, align, children, ...other } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-justify-${justify}`]: justify,
    [`${prefixCls}-align-${align}`]: align,
  });
  return (
    <div className={cls} {...other} style={getGutter('margin', -1, other)}>
      {children}
    </div>
  );
};
export default Row;
