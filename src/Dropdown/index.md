### Dropdown下拉菜单

用于显示链接列表的可切换、有上下文的菜单。

### 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

### 基础用法

点击和鼠标滑过按钮，展开下拉菜单。


```tsx
import React from 'react';
import { Dropdown, Icon } from 'lui';

class App extends React.Component {
  render () {
    const menu = () => {
      return <Dropdown.Menu>{
        [1,2,3,4].map(
          (item) => <Dropdown.MenuItem key={item}>
          <a>This is item {item}</a>
        </Dropdown.MenuItem>) }
      </Dropdown.Menu>
    };


    const menuOpts = {
      trigger: 'click',
      toggle: <a className="lui-dropdown-link">点击显示下拉菜单 <Icon name="down-arrow" /></a>,
      overlay: menu
    }
    const menuOpts2 = {
      trigger: 'hover',
      toggle: <a className="lui-dropdown-link">鼠标滑过显示下拉菜单 <Icon name="down-arrow" /></a>,
      overlay: menu
    }
    return (
      <div className="demo">
        <ul className="dropdown-list">
          <li>
            <Dropdown {...menuOpts} />
          </li>
          <li>
            <Dropdown {...menuOpts2} />
          </li>
        </ul>
      </div>
    );
  }
};
export default App
```

### 弹出位置

支持 6 个弹出位置。

```tsx
import React from 'react';
import { Dropdown, Button } from 'lui';

class App extends React.Component {
  render () {
    const list = ['电脑', '工业品', '家用电器', '手机/运营商/数码'];
    const handle = (item) => {
      alert(item);
    }
    const menu = () => {
      return <Dropdown.Menu>{
          list.map(item => <Dropdown.MenuItem key={item} onClick={() => handle(item)}> <a>{item}</a> </Dropdown.MenuItem>)
          }</Dropdown.Menu>
    };
    const buttomLeft = {
      toggle: <Button>buttomLeft</Button>,
      placement: 'left',
      align: 'left'
    }
    const buttomCenter = {
      toggle: <Button>buttomCenter</Button>,
      placement: 'center',
    }
    const buttomRight = {
      toggle: <Button>buttomRight</Button>,
      placement: 'right',
      align: 'right',
    }
    const TopLeft = {
      toggle: <Button>TopLeft</Button>,
      placement: 'left',
      align: 'left',
      upwards: true
    }
    const TopCenter = {
      toggle: <Button>TopCenter</Button>,
      placement: 'center',
      upwards: true
    }
    const TopRight = {
      toggle: <Button>TopRight</Button>,
      placement: 'right',
      align: 'right',
      upwards: true
    }
    const menuOpts = {
      trigger: 'hover',
      overlay: menu
    }
    return (
      <div className="demo">
        <ul className="dropdown-list">
          <li>
            <Dropdown {...menuOpts} {...TopLeft} />
          </li>
          <li>
            <Dropdown {...menuOpts} {...TopCenter} />
          </li>
          <li>
            <Dropdown {...menuOpts} {...TopRight} />
          </li>
        </ul>
        <ul className="dropdown-list">
          <li>
            <Dropdown {...menuOpts} {...buttomLeft} />
          </li>
          <li>
            <Dropdown {...menuOpts} {...buttomCenter} />
          </li>
          <li>
            <Dropdown {...menuOpts} {...buttomRight} />
          </li>
        </ul>
      </div>
    );
  }
};
export default App
```