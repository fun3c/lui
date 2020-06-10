import React, { useState } from 'react';
import classnames from 'classnames';
import { ButtronGroupProps } from './interface';

const prefixCls = 'lui-btn';

const ButtonGroup = (props:ButtronGroupProps) => {
    const { children, vertical, full } = props
    const cls = classnames(`${prefixCls}-group`, {
      [`${prefixCls}-group-vertical`]: vertical,
      [`${prefixCls}-group-full`]: full
    });
    return <div className={cls}>{children}</div>;
}

export default ButtonGroup;