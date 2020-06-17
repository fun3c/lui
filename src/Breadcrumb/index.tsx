import React from 'react';
import classnames from 'classnames';
import { BreadcrumbPropsType } from './interface';
import BreadcrumbContext from './BreadcrumbContext';
import BreadcrumbItem from './BreadcrumbItem';
import './styles/index.less';

const prefixCls = 'lui-breadcrumb';

const Breadcrumb = (props: BreadcrumbPropsType) => {
  const { className, children, separator = '/', ...other } = props;
  const classes = classnames(prefixCls, {}, className);

  return (
    <BreadcrumbContext.Provider value={{ prefixCls, separator }}>
      <ul className={classes} {...other}>
        {children}
      </ul>
    </BreadcrumbContext.Provider>
  );
};
Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
