import React from 'react';
import { IconPropsType } from './interface';
import classnames from 'classnames';
import data from './data';
import './styles/index.less';

const prefixCls = 'lui-icon';

const Icon = (props: IconPropsType) => {
  const {
    fill = '',
    name = '',
    size = '',
    className = '',
    style = {},
    spin,
    ...other
  } = props;

  const cls = classnames(prefixCls, `${prefixCls}-${name}`, className);
  const svgCls = classnames({
    [`${prefixCls}-spin`]: name === 'loading' ? true : spin,
  });
  const computedSize = size || '1em';

  function getViewBox(data: any, name: string) {
    if (data[name] == null) return '';
    return data[name].viewBox;
  }

  function getChildren(data: any, name: string, props: IconPropsType) {
    if (data[name] == null) return;
    const childs = data[name].children;
    if (!childs) return;
    const attr = { ...props, fill: props.fill || '' };
    return generate(childs, attr);
  }
  function generate(data: any, props: IconPropsType) {
    return data.map((item: any, index: number) => {
      switch (item.name) {
        case 'path':
          return <path {...props} {...item.attr} key={`path-${index}`} />;
        case 'circle':
          return <circle {...props} {...item.attr} key={`circle-${index}`} />;
        case 'polygon':
          return <polygon {...props} {...item.attr} key={`polygon-${index}`} />;
        case 'polyline':
          return (
            <polyline {...props} {...item.attr} key={`polyline-${index}`} />
          );
        case 'line':
          return <line {...props} {...item.attr} key={`line-${index}`} />;
        case 'rect':
          return <rect {...props} {...item.attr} key={`rect-${index}`} />;
        case 'ellipse':
          return <ellipse {...props} {...item.attr} key={`ellipse-${index}`} />;
        case 'g':
          return generate(item.children, props);
        default:
          return null;
      }
    });
  }

  return (
    <i className={cls}>
      <svg
        style={style}
        width={computedSize}
        height={computedSize}
        viewBox={getViewBox(data, name)}
        fill="currentColor"
        stroke="currentColor"
        className={svgCls}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...other}
      >
        {getChildren(data, name, { fill })}
      </svg>
    </i>
  );
};

export default Icon;
