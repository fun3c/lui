### Icon 图标

语义化的矢量图形。

### 使用方法  

使用 `<Icon />` 标签声明组件，指定图标对应的 `name` 属性。

```tsx
import React from 'react';
import { Icon } from 'lui';

export default () => <>
 <Icon name="like" />
</>
```

### Loading  

默认 `name` 为 `loading` 的旋转效果，也可指定 `spin` 属性。

```tsx
import React from 'react';
import { Icon } from 'lui';

export default () => <>
    <Icon name="loading" />
    <Icon name="reload" spin />
    <Icon name="gear" spin />
    <Icon name="refresh" spin />
</>
```

### 填充颜色  

可以通过设置 `fill` 属性设置颜色。

```tsx
import React from 'react';
import { Icon } from 'lui';


export default () => <>
    <Icon name="real-heart" fill="red" />
    <Icon name="real-star" fill="blue" />
    <Icon name="half-star" fill="green" />
</>
```

### 图标列表

```jsx | inline
import React from 'react';
import { Icon } from 'lui';
import '../demo/icon/index.less';

const icons = [
  {
    title: '方向性图标',
    list: [
      'right-arrow', 'left-arrow','up-arrow', 'down-arrow','next-arrow', 'back-arrow','top-arrow','buttom-arrow', 'dropLeft-arrow', 'dropRight-arrow','dropUp-arrow', 'dropDown-arrow','sort-ascending', 'sort-descending', 'swap-arrow','resize','fullscreen','exit-fullscreen','route-lighter', 'repeat', 
    ]
  },
  {
     title: '图表类图标',
    list: [
      'pie-chart', 'line-chart', 'bar-chart', 'graph-up', 'graph-down',
    ]
  },
  {
     title: '符号类图标',
    list: [
      'plus','minus','ride','checked','checked-circular','plus-circular','minus-circular','cancel-circular','add-square','close-square', 'like', 'dislike', 'hollow-heart', 'real-heart', 'half-heart', 'hollow-star','real-star', 'half-star'
    ]
  },
  {
    title: '公共类图标',
    list: [
       'upload-cloud', 'placeholder','filter','confirm-square','danger','ellipsis','shopping-cart', 'share', 'edit', 'file', 'folder', 'add-file','download', 'upload','message', 'transfer-to', 'house','mic-ligther', 'bar-chart','warning','phone-call', 'envelope', 'avatar', 'settings', 'list','reload','refresh', 'loading', 'gear', 'copy',  'diagram', 'garbage','tag','cloud', 'search', 'lui-user','play-button','database','file','question', 'eye','hide-eye','flag', 'bluetooth','code-working','code'
    ]
  },
  {
    title: '实底图标',
    list: [
      'email-circle', 'right-circle','checked-circle','left-circle','down-circle', 'up-circle','plus-circle', 'minus-circle', 'replay-circle', 'close-circle', 'share-circle','lui-cloud','list-circle', 'user-circle', 'group-circle', 'settings-circle', 'link-circle', 'folder-circle', 'cloud-computing', 'layers-circle', 'upload-circle', 'download-circle', 'rmb','dollar'
    ]
  },
  {
    title: 'Logos',
    list: [
      'apple','android', 'windows', 'linux', 'google', 'google-plus', 'ie', 'firefox', 'chrome', 'facebook', 'twitter', 'weibo', 'github', 'instagram', 'wechat','taobao','jd','alipay', 'qq', 'zhihu','html5', 'js','react', 'npm','python','codepen'
    ]
  }
];

const clx = (arg) => {
  const hasOwn = {}.hasOwnProperty;
  const classes = [];
  const argType = typeof arg;
  if(argType === 'object') {
    for (let key in arg) {
      if (hasOwn.call(arg, key) && arg[key]) {
        classes.push(key);
      }
    }
  }
  return classes.join(' ');
};

export default () => <>
    {
        icons.map((icon, index) => <article className="icons-wrap" key={index}>
        <div className="title">{icon.title}</div>
        <div className="icon-results">
            {
            icon.list.map((name, idx) => <div key={`${name}-${idx}`} className={clx({
                'icon-results__cell': true,
            })}>
                <Icon name={name} spin={name === 'loading' || name === 'gear' ? true : false} />
                <p className="name">{name}</p>
            </div>)
            }
        </div>
        </article>)
    }
    </>;
```

### API

| 参数  | 说明                                                 | 类型      | 默认值    |
|-------|-----------------------------------------------------|----------|----------|
| name  | 设置图标类型                                          | `string`  | -       |
| size  | 设置图标大小，可以设置父级 `font-size` 来设置图标大小      | `number`  | default |
| fill  | 设置图标颜色                                          | `string`  | default |
| style | 设置图标样式                                          | `object`  | -       |
| spin  | 设置图标旋转效果，默认效果为 `name="loading"`            | `boolean` | false   |