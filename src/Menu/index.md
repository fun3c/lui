### Menu导航菜单

为页面和功能提供导航的菜单列表。

### 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。


### 横向菜单

水平顶部导航菜单。

```tsx
import React from 'react';
import { Menu, Dropdown, Icon } from 'lui';
class App extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      active: 'frist_1',
      menutree: [
          {
              name: '菜单 1',
              children: [
                {
                  name: 'submenu 1',
                  active: true,
                },
                {
                  name: 'submenu 2',
                },
                {
                  name: 'submenu 3',
                  children: [
                    {
                      name: 'submenu3 1',
                    },
                    {
                      name: 'submenu3 2',
                    },
                    {
                      name: 'submenu3 3',
                    },
                  ]
                }
              ]
          },
          {
              name: () => <a href="http://www.jd.com/" target="_blank">菜单 2</a>,
          },
          { 
              name: '菜单 3',
              children: [
                {
                  name: '菜单 3 - 1'
                },
                {
                  name: '菜单 2 - 1'
                }
              ]
          },
          {
              name: '菜单 4',
          },
          {
              name: '菜单 5',
          }
      ]
    }
  }

  onSelect ({node, data}) {
    // console.log(node)
  }

  render() {
      return <div className="demo">
        <Menu 
          data={this.state.menutree}
          onSelect={this.onSelect.bind(this)}
          >
        </Menu>
    </div>
  }
}

export default App;
```

### 垂直菜单

垂直菜单，子菜单，侧边栏等。

```tsx
import React from 'react';
import { Menu, Dropdown, Icon } from 'lui';
class App extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      active: 'frist_1',
      menutree: [
          {
              name: '菜单 1',
              opened: true,
              children: [
                {
                  name: 'submenu 1',
                  active: true,
                },
                {
                  name: 'submenu 2',
                },
                {
                  name: 'submenu 3',
                  children: [
                    {
                      name: 'submenu3 1',
                      
                    },
                    {
                      name: 'submenu3 2',
                    },
                    {
                      name: 'submenu3 3',
                    },
                  ]
                }
              ]
          },
          {
              name: () => <a href="http://www.jd.com/" target="_blank">菜单 2</a>,
          },
          { 
              name: '菜单 3',
              children: [
                {
                  name: '菜单 3 - 1'
                },
                {
                  name: '菜单 2 - 1'
                }
              ]
          },
          {
              name: '菜单 4',
          },
          {
              name: '菜单 5',
          }
      ]
    }
  }

  onSelect ({node, data}) {
    // console.log(node)
  }

  render() {
      return <div className="demo">
        <Menu 
          mode="vertical"
          theme=""
          data={this.state.menutree}
          onSelect={this.onSelect.bind(this)}
          >
        </Menu>
    </div>
  }
}
export default App;
```