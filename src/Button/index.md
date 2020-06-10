
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
<Button size="large">Large</Button>
<Button intent="success" size="medium">Medium</Button>
<Button intent="primary">Default</Button>
<Button intent="warning" size="small">Small</Button>
<br/>
<Button type="primary" size="large">Large</Button>
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

### 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

```tsx
import React from 'react';
import { Button, Icon } from 'lui';

export default () => <>
    <Button icon="avatar">User</Button>
    <Button>Search <Icon name="search" /></Button>
    <Button type="primary" icon="search"></Button>
    <Button icon="search"></Button>
    <Button type="primary" icon="search"></Button>
    <Button type="primary" size="small" icon="search"></Button>
    <Button size="small" icon="search"></Button>
    <Button icon="weibo" type="text"></Button>
    <Button icon="wechat" type="text"></Button>
    <Button icon="lui-user" type="text"></Button>
</>
```

### 圆形按钮  

添加 `circular` 属性按钮则为圆形按钮，可配合 `size` `icon` 属性一起使用。
一般多适用于图标类型的按钮。


```tsx
import React from 'react';
import { Button } from 'lui';

export default () => <>
    <Button icon="plus" size="small" circular/>
    <Button type="primary" size="small" icon="minus" circular animate/>
    <Button size="small" icon="loading" circular/>
    <Button type="primary" size="small" icon="house" circular/>
    <Button icon="hollow-star" type="success" size="default" circular/>
    <Button icon="avatar" type="primary" size="default" circular/>
    <Button icon="garbage" size="medium" circular animate/>
    <Button type="primary" size="medium" icon="edit" circular/>
    <Button icon="checked" size="large" circular/>
    <Button type="success" size="large" icon="envelope" circular/>
    <Button type="gray" size="large" icon="weibo" circular/>
    <Button type="gray" size="large" icon="wechat" circular/>
    <Button type="gray" size="large" icon="zhihu" circular animate/>
</>
```

### 加载中状态

添加 `loading` 属性即可让按钮处于加载状态，最后一个按钮演示点击后进入加载状态。

```tsx
import React from 'react';
import { Button, Icon } from 'lui';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  enterLoading () {
    this.setState({ loading: true });
  }
  render() {
    const {loading} = this.state;
    return (
      <>
        <Button loading>Loading</Button>
        <Button type="primary" loading/>
        <Button size="small" loading/>
        <Button disabled loading>
          Loading...
        </Button>
        <Button type="primary" disabled>
          <Icon name="reload" spin />
          Reload
        </Button>

        <Button label="Loading" type="text" loading/>

        <Button loading={loading} onClick={this.enterLoading.bind(this)}>
          点击加载
        </Button>
      </>
    );
  }
};
export default App;
```

### Block 按钮  

`block` 属性将使按钮适合其父宽度。

```tsx
import React from 'react';
import { Button } from 'lui';

export default () => <>
    <Button type="primary" block>Feed</Button>
    <Button type="success" block>Feed</Button>
    <Button type="warning" block>Feed</Button>
    <Button type="danger" block>Feed</Button>
    <Button block>Feed</Button>
    <Button type="gray" block>Feed</Button>
    <Button type="text" block>Feed</Button>
</>
```

### 按钮组合  

可以将多个 `Button` 放入 `ButtonGroup` 的容器中。  

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

```tsx
import React from 'react';
import { Button, ButtonGroup, Icon } from 'lui';


export default () => <>
    <ButtonGroup>
      <Button size="small">Left</Button>
      <Button size="small">Center</Button>
      <Button size="small">Right</Button>
    </ButtonGroup>
    <br/>
    <ButtonGroup>
      <Button intent="success">Left</Button>
      <Button intent="success">Center</Button>
      <Button intent="success">Right</Button>
    </ButtonGroup>
    <br/>
    <ButtonGroup>
      <Button intent="primary" size="medium">Left</Button>
      <Button intent="primary"  size="medium">Center</Button>
      <Button intent="primary"  size="medium">Right</Button>
    </ButtonGroup>
     <br/>
    <ButtonGroup>
      <Button intent="danger" size="large" animate>Left</Button>
      <Button intent="danger" size="large" animate>Center</Button>
      <Button intent="danger" size="large" animate>Right</Button>
    </ButtonGroup>
    <br/>
    <ButtonGroup>
      <Button intent="primary">
        <Icon name="back"/>
        Back
      </Button>
      <Button intent="primary">
        Next
        <Icon name="next"/>
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button type="primary">
        <Icon name="apple"/>
        One
      </Button>
      <Button type="primary">
        <Icon name="android"/>
        Two
      </Button>
      <Button type="primary">
        <Icon name="windows"/>
        Three
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button icon="download" type="primary"/>
      <Button icon="upload" type="primary"/>
    </ButtonGroup>
  </>
```

### API

| 参数       | 说明                                                 | 类型       | 默认值  |
|-----------|------------------------------------------------------|-----------|---------|
| type      | 设置按钮类型                     | `gray`,`primary`, `success`, `warning`, `danger`,`text`,`link` | - |
| intent    | 设置按钮文本类型                  | `primary`, `success`, `warning`, `danger` | `default` |
| icon      | 设置按钮的图标组件                | `string` 同`Icon` 组件名称 | - |
| disabled  | 设置按钮禁用                     | `boolean`                | `false` |
| size      | 设置按钮大小                     | `large`,`medium`,`small` | `default` |
| animate   | 按钮`ripple`点击效果             | `boolean` | `false` |
| circular  | 设置圆形按钮                     | `boolean` | `false` |
| loading   | 设置按钮loading状态              | `boolean` | `false` |
| block     | 设置按钮为父级宽度                | `boolean` | `false` |
| htmlType  | 设置按钮原生的 `type` 值          | `string`  | `button`|
| onClick   | 点击按钮时的回调                  | `(e) => void`   | - |