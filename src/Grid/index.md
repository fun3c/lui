### Grid 栅格

Grid 栅格基于 Flex Box 模块开发，该网格生成布局之间视觉一致性，同时允许在各种不同的设计的灵活性，Grid 基于 24 列网格布局。

#### 概述

栅格化布局系统，分别使用行（row）和列（col）来定义信息区块的外部框架。

- 布局有两种类型：`Grid.Row`和`Grid.Col`。
- 项目宽度以百分比设置，因此它们总是相对于其父元素是流动的和大小的。
- 项目具有填充以创建单个项目之间的间距。

### 基础用法

从堆叠到水平排列。  
使用单一的一组 `Grid.Row` 和 `Grid.Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

```tsx
import React from 'react';
import { Grid } from 'lui';
import '../demo/index.less';

export default () => (
  <div className="demo-grid">
    <Grid.Row>
      <Grid.Col span={12}>
        <div>col-12</div>
      </Grid.Col>
      <Grid.Col span={12}>
        <div>col-12</div>
      </Grid.Col>
    </Grid.Row>
    <br />
    <Grid.Row>
      <Grid.Col span={8}>
        <div>col-8</div>
      </Grid.Col>
      <Grid.Col span={8}>
        <div>col-8</div>
      </Grid.Col>
      <Grid.Col span={8}>
        <div>col-8</div>
      </Grid.Col>
    </Grid.Row>
    <br />
    <Grid.Row>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
  </div>
);
```

### 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Grid.Row` 的 `gutter` 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)

```tsx
import React from 'react';
import { Grid } from 'lui';
import '../demo/index.less';

export default () => (
  <div className="demo-grid">
    <Grid.Row gutter={16}>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
  </div>
);
```

### 左右偏移

使用 offset 可以将列向右侧偏。  
例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

```tsx
import React from 'react';
import { Grid } from 'lui';
import '../demo/index.less';

export default () => (
  <div className="demo-grid">
    <Grid.Row>
      <Grid.Col span={6}>
        <div>default</div>
      </Grid.Col>
      <Grid.Col span={6} offset={8}>
        <div>offset-8</div>
      </Grid.Col>
    </Grid.Row>
    <br />
    <Grid.Row>
      <Grid.Col span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col span={6} offset={2}>
        <div>offset-2</div>
      </Grid.Col>
      <Grid.Col span={6} offset={3}>
        <div>offset-3</div>
      </Grid.Col>
    </Grid.Row>
    <br />
    <Grid.Row>
      <Grid.Col span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col span={4} offset={2}>
        <div>offset-2</div>
      </Grid.Col>
      <Grid.Col span={4} offset={3}>
        <div>offset-3</div>
      </Grid.Col>
      <Grid.Col span={4} offset={2}>
        <div>offset-2</div>
      </Grid.Col>
    </Grid.Row>
  </div>
);
```

### Flex 布局横向对齐

使用 flex 布局，使其子元素横向对齐。
其子元素根据不同的值 `start`，`center`，`end`，`space-between`，`space-around`，分别定义其在父节点里面的排版方式。

```tsx
import React from 'react';
import { Grid } from 'lui';
import '../demo/index.less';

export default () => (
  <div className="demo-grid">
    <div className="box">
      <Grid.Row justify="start">
        <Grid.Col span={4}>
          <div>start</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>start</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>start</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>start</div>
        </Grid.Col>
      </Grid.Row>
    </div>
    <div className="box">
      <Grid.Row justify="end">
        <Grid.Col span={4}>
          <div>end</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>end</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>end</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>end</div>
        </Grid.Col>
      </Grid.Row>
    </div>
    <div className="box">
      <Grid.Row justify="center">
        <Grid.Col span={4}>
          <div>center</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>center</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>center</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>center</div>
        </Grid.Col>
      </Grid.Row>
    </div>
    <div className="box">
      <Grid.Row justify="space-between">
        <Grid.Col span={4}>
          <div>space-between</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>space-between</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>space-between</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>space-between</div>
        </Grid.Col>
      </Grid.Row>
    </div>
    <div className="box">
      <Grid.Row justify="space-around">
        <Grid.Col span={4}>
          <div>space-around</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>space-around</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>space-around</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>space-around</div>
        </Grid.Col>
      </Grid.Row>
    </div>
  </div>
);
```

### Flex 布局垂直对齐

使用 flex 布局，使其子元素垂直对齐。 默认值是 stretch，当元素没有设置具体尺寸时会将容器在交叉轴方向撑满。  
其子元素根据不同的值 `start`，`center`，`end` 分别定义其在父节点里面的排版方式。元素在交叉轴方向上的尺寸将由内容或自身尺寸（宽高）决定。

```tsx
import React from 'react';
import { Grid } from 'lui';
import '../demo/index.less';

export default () => (
  <div className="demo-grid">
    <Grid.Row align="start" className="demo-align">
      <Grid.Col span={4}>
        <div>col-4，start</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div style={{ height: 60 }}>col-4，start</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div>col-4，start</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div>col-4，start</div>
      </Grid.Col>
    </Grid.Row>
    <br />
    <Grid.Row align="center" className="demo-align">
      <Grid.Col span={4}>
        <div>col-4，center</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div>col-4，center</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div style={{ height: 60 }}>col-4，center</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div>col-4，center</div>
      </Grid.Col>
    </Grid.Row>
    <br />
    <Grid.Row align="end" className="demo-align">
      <Grid.Col span={4}>
        <div>col-4，center</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div>col-4，center</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div>col-4，center</div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div style={{ height: 60 }}>col-4，center</div>
      </Grid.Col>
    </Grid.Row>
  </div>
);
```

### API

### Row

| 参数    | 说明                      | 类型                                                                                             | 默认值 |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------ | ------ |
| gutter  | 栅格间隔间距              | number                                                                                           | -      |
| justify | flex 布局下的水平排列方式 | `string`， {`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`} | -      |
| align   | flex 布局下的垂直对齐方式 | `string`，{`top`, `middle`, `bottom`}                                                            | -      |

### Col

| 参数   | 说明                                   | 类型     | 默认值 |
| ------ | -------------------------------------- | -------- | ------ |
| span   | 栅格占位格数                           | `number` | -      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | `number` | -      |
