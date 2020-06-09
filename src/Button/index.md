
### Button 按钮

按钮用于开始一个即时操作。


### 基础用法
代码演示:

```tsx
/**
 * title: 按钮类型
 * desc: 按钮有五种类型：默认按钮、常用按钮、成功按钮、警告按钮、危险按钮、文本按钮和链接按钮。
 */

import React from 'react';
import { Button } from 'lui';


export default () => <>
<Button>Default Button</Button>
<Button intent="primary">Primary Button</Button>
<Button intent="success">Success Button</Button>
<Button intent="warning">Warning Button</Button>
<Button intent="danger">Danger Button</Button>
<br/>
<br/>
<Button type="gray">Gray Button</Button>
<Button type="primary">Primary Button</Button>
<Button type="success">Success Button</Button>
<Button type="warning">Warning Button</Button>
<Button type="danger">Danger Button</Button>
<br/>
<br/>
<Button type="text">Text Button</Button>
<Button type="link">Link Button</Button>
</>;
```

### 禁用状态
代码演示:

```tsx
/**
 * title: 按钮状态
 * desc: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import React from 'react';
import { Button } from 'lui';


export default () => <>
<Button disabled>Default Button</Button>
<Button intent="primary" disabled>Primary Button</Button>
<Button intent="success" disabled>Success Button</Button>
<Button intent="warning" disabled>Warning Button</Button>
<Button intent="danger" disabled>Danger Button</Button>
<br/>
<br/>
<Button type="gray" disabled>Gray Button</Button>
<Button type="primary" disabled>Primary Button</Button>
<Button type="success" disabled>Success Button</Button>
<Button type="warning" disabled>Warning Button</Button>
<Button type="danger" disabled>Danger Button</Button>
<br/>
<br/>
<Button type="text" disabled>Text Button</Button>
<Button type="link" disabled>Link Button</Button>
</>;
```

### 按钮尺寸
代码演示:

```tsx
/**
 * title: 按钮有大、中、小三种尺寸。
 * desc: 通过设置 `size` 为 `large` `medium` `small` 分别把按钮设为大、中、小尺寸。若不设置 size，则尺寸为默认大小。
 */

import React from 'react';
import { Button } from 'lui';


export default () => <>
<Button size="large" animate>Large</Button>
<Button intent="success" size="medium">Medium</Button>
<Button intent="primary">Default</Button>
<Button intent="warning" size="small">Small</Button>
<br/>
<Button type="primary" size="large" animate>Large</Button>
<Button type="success" size="medium">Medium</Button>
<Button type="warning">Default</Button>
<Button type="danger" size="small">Small</Button>
</>;
```


### 点击效果  
添加 `animate` 属性可实现 `ripple` 点击效果。

```tsx
import React from 'react';
import { Button } from 'lui';

export default () => <>
    <Button animate>Default Button</Button>
    <Button intent="primary" animate>Primary Button</Button>
    <Button intent="success" animate>Success Button</Button>
    <Button intent="warning" animate>Warning Button</Button>
    <Button intent="danger" animate>Danger Button</Button>
    <br/>
    <br/>
    <Button type="gray" animate>Gray Button</Button>
    <Button type="primary" animate>Primary Button</Button>
    <Button type="success" animate>Success Button</Button>
    <Button type="warning" animate>Warning Button</Button>
    <Button type="danger" animate>Danger Button</Button>
    <br/>
    <br/>
    <Button type="text" animate>Text Button</Button>
    <Button type="link" animate>Link Button</Button>

</>
```
