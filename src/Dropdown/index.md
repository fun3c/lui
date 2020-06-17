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

### 多级菜单显示

点击和鼠标滑过按钮，展开下拉菜单及多级菜单。

```tsx
import React from 'react';
import { Dropdown, Icon } from 'lui';

const list = [1, 2, 3, 4];
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '4-1'
    }
  }
  handle ({item, name}) {
    this.setState({active: name});
    console.log(item);
  }
  handle2 (e, item) {
    alert(item);
  }
  render () {
    const menu = <Dropdown.Menu>
      {list.map((item, index) => {
        return index !== 3
        ? <Dropdown.MenuItem key={item}  name={item}><span>{`This is item  ${item}`}</span></Dropdown.MenuItem>
        : <Dropdown.SubMenu key="submenu1" toggle={<span>{`This is item ${item}`}</span>}>
          {list.map(subItem => <Dropdown.MenuItem key={`${item}-${subItem}`} name={`${item}-${subItem}`}><a>{`This is item  ${item}-${subItem}`}</a></Dropdown.MenuItem>)}
        </Dropdown.SubMenu>
      })}
    </Dropdown.Menu>

    const clickProps = {
      trigger: 'click',
      toggle: <><a className="lui-dropdown-link">点击显示多级菜单 <Icon name="down-arrow" /></a></>,
      overlay: menu,
      active: this.state.active,
      callback: this.handle.bind(this)
    }

    const hoverProps = {
      trigger: 'hover',
      toggle: <><a className="lui-dropdown-link">鼠标划过显示多级菜单 <Icon name="down-arrow" /></a></>,
      overlay: menu
    }

    const menu2 = <Dropdown.Menu>
      {list.map((item, index) => {
        return index !== 3
        ? <Dropdown.MenuItem key={item}><span>{`This is item  ${item}`}</span></Dropdown.MenuItem>
        : <Dropdown.SubMenu key="submenu2" toggle={<span>{`This is item  ${item}`}</span>} trigger="hover" direction="left">
          {list.map(subItem => <Dropdown.MenuItem key={`${item}-${subItem}`}><a>{`This is item  ${item}-${subItem}`}</a></Dropdown.MenuItem>)}
        </Dropdown.SubMenu>
      })}
    </Dropdown.Menu>

    const clkckHoverProps = {
      trigger: 'click',
      toggle: <><a className="lui-dropdown-link">鼠标点击/划过显示多级菜单 <Icon name="down-arrow" /></a></>,
      overlay: menu2
    }

    const menu3 = <Dropdown.Menu>
      {list.map((item, index) => {
        return index !== 3
        ? <Dropdown.MenuItem 
          key={item}
          onClick={e => this.handle2(e, item)}
          >
          <span>{`This is item  ${item}`}</span>
          </Dropdown.MenuItem>
        : <Dropdown.SubMenu
            key="submenu2" 
            toggle={<span>{`This is item  ${item}`}</span>} 
            trigger="hover" 
            direction="right"
            >
          {list.map(subItem => {
            return subItem != 4
            ? <Dropdown.MenuItem 
                key={`${item}-${subItem}`}
                onClick={e => this.handle2(e, `${item}-${subItem}`)}
                >
                <a>{`This is item  ${item}-${subItem}`}</a>
              </Dropdown.MenuItem>
            :  <Dropdown.SubMenu 
                key="submenu2-1" 
                toggle={<span>{`This is item  ${item}-${subItem}`}</span>} 
                trigger="hover" 
                direction="left"
              >
                {list.map(
                  (other, odx) => odx !== 3
                  ? <Dropdown.MenuItem 
                    key={`${item}-${subItem}-${other}`} 
                    onClick={e => this.handle2(e, `${item}-${subItem}-${other}`)}
                    >
                    <a>{`This is item  ${item}-${subItem}-${other}`}</a>
                    </Dropdown.MenuItem>
                  : <Dropdown.SubMenu
                    key="submenu3-3-3"
                    toggle={<span>{`This is item  ${item}-${subItem}-${other}`}</span>} 
                    trigger="hover"
                    direction="right"
                    >
                      {
                        list.map(
                          (more) => <Dropdown.MenuItem 
                            key={`${item}-${subItem}-${other}-${more}`} 
                            onClick={e => this.handle2(e, `${item}-${subItem}-${other}-${more}`)}
                            >
                            <a>{`This is item  ${item}-${subItem}-${other}-${more}`}</a>
                            </Dropdown.MenuItem>
                        )
                      }
                    </Dropdown.SubMenu>
                )}
            </Dropdown.SubMenu>
          })}
        </Dropdown.SubMenu>
      })}
    </Dropdown.Menu>

    const hoverRightProps = {
      trigger: 'hover',
      toggle: <><a className="lui-dropdown-link">鼠标划过左右侧显示多级菜单 <Icon name="down-arrow" /></a></>,
      overlay: menu3
    }

  const hoverUpMenu = <Dropdown.Menu>
      {list.map((item, index) => {
        return index !== 2
        ? <Dropdown.MenuItem key={item}><span>{`This is item  ${item}`}</span></Dropdown.MenuItem>
        : <Dropdown.SubMenu key="submenu4" toggle={<span>{`This is item ${item}`}</span>}>
          {list.map(subItem => <Dropdown.MenuItem key={`${item}-${subItem}`}><a>{`This is item  ${item}-${subItem}`}</a></Dropdown.MenuItem>)}
        </Dropdown.SubMenu>
      })}
    </Dropdown.Menu>
    const hoverUpProps = {
      trigger: 'hover',
      toggle: <><a className="lui-dropdown-link">鼠标划过向上显示多级菜单 <Icon name="up-arrow" /></a></>,
      overlay: hoverUpMenu,
      upwards: true
    }
    return (
      <div className="demo">
        <ul className="dropdown-list">
          <li>
            <Dropdown {...clickProps} />
          </li>
          <li>
            <Dropdown {...hoverProps} />
          </li>
          <li>
            <Dropdown {...clkckHoverProps} />
          </li>
          <li>
            <Dropdown {...hoverRightProps} />
          </li>
          <li>
            <Dropdown {...hoverUpProps} />
          </li>
        </ul>
      </div>
    );
  }
};
export default App
```

### 下拉框按钮

左边是按钮，右边是额外的相关功能菜单。可设置 icon 属性来修改图标。

```tsx
import React from 'react';
import { Dropdown, Button,ButtonGroup, Icon } from 'lui';

class App extends React.Component {
  render () {

    const menu = () => {
      return <Dropdown.Menu>{ [1,2,3,4].map(item => <Dropdown.MenuItem key={item}> <a>This is item {item}</a> </Dropdown.MenuItem>) }</Dropdown.Menu>
    };

    const menuOpts = {
      trigger: 'click',
      toggle: <Icon name="download" />,
      overlay: menu
    }

    const menuOpts2 = {
      trigger: 'hover',
      toggle: () => <Icon name="avatar" />,
      overlay: menu
    }

    const menuOpts3 = {
      trigger: 'hover',
      toggle: () => <><Button>download <Icon name="down-arrow" /></Button></>,
      overlay: menu
    }
    return (
      <div className="demo">
        <ul className="dropdown-list">
          <li>
            <ButtonGroup>
              <Button onClick={() => alert('download')}> download  </Button>
              <Button><Dropdown {...menuOpts} /></Button>
            </ButtonGroup>
          </li>
          <li>
            <ButtonGroup>
              <Button onClick={() => alert('download')}> download  </Button>
              <Button><Dropdown {...menuOpts2} /></Button>
            </ButtonGroup>
          </li>
          <li>
            <Dropdown {...menuOpts3} />
          </li>
        </ul>
      </div>
    );
  };
};
export default App
```

### 分组菜单

点击和鼠标滑过按钮，展开分组菜单。

```tsx
import React from 'react';
import { Dropdown, Icon } from 'lui';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active1: '',
      active2: ''
    }
  }
  handle1 ({item, name}) {
    console.log(item)
    this.setState({active1: name});
  }
  handle2 ({item, name}) {
    console.log(item)
    this.setState({active2: name});
  }
  render () {
    const menu = () => {
      return <div>
        <Dropdown.Menu groupTitle="Item 1">
          {
            ['张三','里斯本', '托尔斯泰'].map((item, index) => {
              return index === 2
              ? <Dropdown.SubMenu key={item} toggle={<span>This is item {item}</span>}>
                  {
                    [1,2,3,4].map((sub, idx) => (
                      <Dropdown.MenuItem key={`${index}-${idx}`} name={`${index}-${idx}`}><a>This is item {`${index}-${sub}`}</a></Dropdown.MenuItem>
                    ))
                  }
                </Dropdown.SubMenu>
              : <Dropdown.MenuItem key={item} name={index}>
                  <a>This is item {item}</a>
                </Dropdown.MenuItem>
            }
            )
          }
        </Dropdown.Menu>
        <Dropdown.Menu groupTitle="Item 2">
          {
            ['汪汪','里斯本'].map(
              (item, index) => <Dropdown.MenuItem
              key={item}
              name={'Item' + index}
            > <a>This is item {item}</a>
            </Dropdown.MenuItem>) 
          }
        </Dropdown.Menu>
      </div>
    };
    const menu2 = () => {
      return <Dropdown.Menu groupTitle="Item 1">{
        [1,2,3,4].map(
          (item, index) => <Dropdown.MenuItem
          key={item}
          name={index}
        > 
          <a>This is item {item}</a>
        </Dropdown.MenuItem>) }
      </Dropdown.Menu>
    };


    const menuOpts = {
      trigger: 'click',
      toggle: <><a className="lui-dropdown-link">点击显示分组菜单 <Icon name="down-arrow" /></a></>,
      overlay: menu,
      activeName: this.state.active1,
      align: 'left',
      callback: this.handle1.bind(this)
    }
    const menuOpts2 = {
      trigger: 'hover',
      toggle: () => (<a className="lui-dropdown-link">鼠标滑过显示分组菜单 <Icon name="down-arrow" /></a>),
      overlay: menu2,
      activeName: this.state.active2,
      callback: this.handle2.bind(this)
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
export default App;
```

### 分割线

分割线和不可用菜单。

```tsx
import React from 'react';
import { Dropdown, Button, Icon } from 'lui';

class App extends React.Component {
  render () {

    const dividerMenu = () => {
      return(
        <Dropdown.Menu>
          <Dropdown.MenuItem><a>This is item 1</a></Dropdown.MenuItem>
          <Dropdown.MenuItem><a>This is item 2</a></Dropdown.MenuItem>
          <Dropdown.MenuItem><a>This is item 3</a></Dropdown.MenuItem>
          <Dropdown.MenuItem divider/>
          <Dropdown.MenuItem><a>This is item 4</a></Dropdown.MenuItem>
        </Dropdown.Menu>
      )
    };

    const disabledMenus = () => {
      return (
        <Dropdown.Menu>
          <Dropdown.MenuItem><a>This is item 1</a></Dropdown.MenuItem>
          <Dropdown.MenuItem><a>This is item 2</a></Dropdown.MenuItem>
          <Dropdown.MenuItem><a>This is item 3</a></Dropdown.MenuItem>
          <Dropdown.MenuItem divider/>
          <Dropdown.SubMenu toggle={<span>This is item 4</span>}>
            <Dropdown.MenuItem><a>This is item 4-1</a></Dropdown.MenuItem>
            <Dropdown.MenuItem><a>This is item 4-2</a></Dropdown.MenuItem>
            <Dropdown.MenuItem><a>This is item 4-3</a></Dropdown.MenuItem>
          </Dropdown.SubMenu>
          <Dropdown.MenuItem divider/>
          <Dropdown.SubMenu toggle={<span>This is item 5</span>} disabled>
            <Dropdown.MenuItem><a>This is item 5-1</a></Dropdown.MenuItem>
            <Dropdown.MenuItem><a>This is item 5-2</a></Dropdown.MenuItem>
            <Dropdown.MenuItem><a>This is item 5-3</a></Dropdown.MenuItem>
          </Dropdown.SubMenu>
        </Dropdown.Menu>
      )
    };
    const dividerOpts = {
      trigger: 'hover',
      toggle: () => (<a className="lui-dropdown-link">分割线菜单 <Icon name="down-arrow" /></a>),
      overlay: dividerMenu,
    }
    const disabledOpts = {
      trigger: 'hover',
      toggle: () => (<a className="lui-dropdown-link">不可用菜单 <Icon name="up-arrow" /></a>),
      overlay: disabledMenus,
      upwards: true
    }

    return (
      <div className="demo">
        <ul className="dropdown-list">
          <li>
            <Dropdown {...dividerOpts} />
          </li>
          <li>
            <Dropdown {...disabledOpts} />
          </li>
        </ul>
      </div>
    );
  }
};
export default App;
```


### API

#### Dropdown

| 参数       | 说明                     | 类型          | 默认值       |
|------------|--------------------------|---------------------------|--------------|
| overlay    | 菜单                 | `Menu` | `() =>Menu`           | -  |
| toggle     | 设置目标元素        | `string` e.g. html 元素，组件等           | - |
| trigger    | 设置触发事件             | `string` 参数值：{`hover`，`click`}                                                           | hover        |
| activeName | 当前选中项的名称         | `string` | -            |
| callback   | 点击 MenuItem 调用此函数 | `function({ item, name, e })`                                                                 | hover |
| placement  | 菜单弹出位置            | `string` 参数值：{`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`} | bottomCenter |
| align      | 菜单文本距离            | `string` 参数值：{`left`，`center`，`right`} | center       |
| upwards    | 菜单是否向上显示         | `boolean` | false        |

#### Dropdown.Menu

| 参数       | 说明         | 类型               | 默认值 |
|------------|--------------|--------------------|--------|
| groupTitle | 设置分组菜单 | `string,ReactNode` | -      |

#### Dropdown.MenuItem

| 参数     | 说明         | 类型      | 默认值 |
|----------|--------------|-----------|--------|
| divider  | 菜单分割线   | `boolean` | -      |
| disabled | 菜单是否禁用 | `boolean` | -      |


#### Dropdown.SubMenu

| 参数      | 说明         | 类型                                                  | 默认值 |
|-----------|--------------|-----------------------------------------------------|--------|
| trigger   | 设置触发事件 | `string` 参数值：{`hover`，`click`，`继承父级事件`} | hover    |
| toggle    | 设置目标元素 | `string` e.g. html 元素，组件等                     | -      |
| direction | 设置菜单方向 | `string`参数值：{`right`，`left`}                   | right  |
| disabled  | 菜单是否禁用 | `boolean`                                          | -     |