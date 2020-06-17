### Breadcrumb 面包屑

面包屑导航（Breadcrumbs）是一种基于网站层次信息的显示方式。以博客为例，面包屑导航可以显示发布日期、类别或标签。它们表示当前页面在导航层次结构内的位置。

### 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

### 基础用法

适用广泛的基础用法。


```tsx
import React from 'react';
import { Breadcrumb } from 'lui';

export default () => <>
    <Breadcrumb>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">分析平台</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">行业分析</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        骑行运动
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
```

### 自定义分隔符

使用 `separator=">"` 可以自定义分隔符。

```tsx
import React from 'react';
import { Breadcrumb } from 'lui';

export default () => <>
    <Breadcrumb separator=">">
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item> <a href="">分析平台</a> </Breadcrumb.Item>
      <Breadcrumb.Item> <a href="">行业分析</a> </Breadcrumb.Item>
      <Breadcrumb.Item> 骑行运动 </Breadcrumb.Item>
    </Breadcrumb>
  </>
```

### 图标

图标放在文字前面。

```tsx
import React from 'react';
import { Breadcrumb, Icon } from 'lui';

export default () => <>
    <Breadcrumb separator=">">
      <Breadcrumb.Item> <Icon name="house" /></Breadcrumb.Item>
      <Breadcrumb.Item> <a href="">分析平台</a> </Breadcrumb.Item>
      <Breadcrumb.Item> <a href="">行业分析</a> </Breadcrumb.Item>
      <Breadcrumb.Item> 骑行运动 </Breadcrumb.Item>
    </Breadcrumb>
  </>
```


### API

| 参数     | 说明                     | 类型                              | 默认值    |
|----------|--------------------------|---------------------------------|-----------|
| separator     | 分隔符自定义             | `string` | `'/'`        |

