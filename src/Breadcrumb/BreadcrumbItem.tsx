import React, { useContext } from 'react';
import BreadcrumbContext from './BreadcrumbContext';
import { BreadcrumbPropsType } from './interface';


const BreadcrumbItem = (props: BreadcrumbPropsType) => {
    const { children } = props;
    const context = useContext<any>(BreadcrumbContext);
    return (
      <li>
        <span className={`${context.prefixCls}-text`}>{children}</span>
        <span className={`${context.prefixCls}-separator`}>
          {context.separator}
        </span>
      </li>
    );
};

export default BreadcrumbItem;