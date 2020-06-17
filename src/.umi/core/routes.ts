// @ts-nocheck
import { ApplyPluginsType } from '/Users/liuzhao8/workspace/mypro/lui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/liuzhao8/workspace/mypro/lui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"组件","meta":{}},{"title":"Breadcrumb","path":"/breadcrumb","meta":{},"children":[{"path":"/breadcrumb","title":"Breadcrumb 面包屑","meta":{}}]},{"title":"Button","path":"/button","meta":{},"children":[{"path":"/button","title":"Button 按钮","meta":{}}]},{"title":"Dropdown","path":"/dropdown","meta":{},"children":[{"path":"/dropdown","title":"Dropdown下拉菜单","meta":{}}]},{"title":"Grid","path":"/grid","meta":{},"children":[{"path":"/grid","title":"Grid 栅格","meta":{}}]},{"title":"Icon","path":"/icon","meta":{},"children":[{"path":"/icon","title":"Icon 图标","meta":{}}]}]}},"locales":[],"navs":{},"title":"LUI","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.md",
          "updatedTime": 1591699713000,
          "slugs": [],
          "title": "Index"
        },
        "title": "Index"
      },
      {
        "path": "/breadcrumb",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Breadcrumb/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Breadcrumb/index.md",
          "updatedTime": 1592376262625,
          "slugs": [
            {
              "depth": 3,
              "value": "Breadcrumb 面包屑",
              "heading": "breadcrumb-面包屑"
            },
            {
              "depth": 3,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "自定义分隔符",
              "heading": "自定义分隔符"
            },
            {
              "depth": 3,
              "value": "图标",
              "heading": "图标"
            }
          ],
          "title": "Breadcrumb 面包屑",
          "group": {
            "path": "/breadcrumb",
            "title": "Breadcrumb"
          }
        },
        "title": "Breadcrumb 面包屑"
      },
      {
        "path": "/button",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1591863621000,
          "slugs": [
            {
              "depth": 3,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "禁用状态",
              "heading": "禁用状态"
            },
            {
              "depth": 3,
              "value": "按钮尺寸",
              "heading": "按钮尺寸"
            },
            {
              "depth": 3,
              "value": "点击效果",
              "heading": "点击效果"
            },
            {
              "depth": 3,
              "value": "图标按钮",
              "heading": "图标按钮"
            },
            {
              "depth": 3,
              "value": "圆形按钮",
              "heading": "圆形按钮"
            },
            {
              "depth": 3,
              "value": "加载中状态",
              "heading": "加载中状态"
            },
            {
              "depth": 3,
              "value": "Block 按钮",
              "heading": "block-按钮"
            },
            {
              "depth": 3,
              "value": "按钮组合",
              "heading": "按钮组合"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮",
          "group": {
            "path": "/button",
            "title": "Button"
          }
        },
        "title": "Button 按钮"
      },
      {
        "path": "/dropdown",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Dropdown/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Dropdown/index.md",
          "updatedTime": 1592374112000,
          "slugs": [
            {
              "depth": 3,
              "value": "Dropdown下拉菜单",
              "heading": "dropdown下拉菜单"
            },
            {
              "depth": 3,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "弹出位置",
              "heading": "弹出位置"
            },
            {
              "depth": 3,
              "value": "多级菜单显示",
              "heading": "多级菜单显示"
            },
            {
              "depth": 3,
              "value": "下拉框按钮",
              "heading": "下拉框按钮"
            },
            {
              "depth": 3,
              "value": "分组菜单",
              "heading": "分组菜单"
            },
            {
              "depth": 3,
              "value": "分割线",
              "heading": "分割线"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Dropdown",
              "heading": "dropdown"
            },
            {
              "depth": 4,
              "value": "Dropdown.Menu",
              "heading": "dropdownmenu"
            },
            {
              "depth": 4,
              "value": "Dropdown.MenuItem",
              "heading": "dropdownmenuitem"
            },
            {
              "depth": 4,
              "value": "Dropdown.SubMenu",
              "heading": "dropdownsubmenu"
            }
          ],
          "title": "Dropdown下拉菜单",
          "group": {
            "path": "/dropdown",
            "title": "Dropdown"
          }
        },
        "title": "Dropdown下拉菜单"
      },
      {
        "path": "/grid",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Grid/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Grid/index.md",
          "updatedTime": 1591863621000,
          "slugs": [
            {
              "depth": 3,
              "value": "Grid 栅格",
              "heading": "grid-栅格"
            },
            {
              "depth": 4,
              "value": "概述",
              "heading": "概述"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "区块间隔",
              "heading": "区块间隔"
            },
            {
              "depth": 3,
              "value": "左右偏移",
              "heading": "左右偏移"
            },
            {
              "depth": 3,
              "value": "Flex 布局横向对齐",
              "heading": "flex-布局横向对齐"
            },
            {
              "depth": 3,
              "value": "Flex 布局垂直对齐",
              "heading": "flex-布局垂直对齐"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Row",
              "heading": "row"
            },
            {
              "depth": 3,
              "value": "Col",
              "heading": "col"
            }
          ],
          "title": "Grid 栅格",
          "group": {
            "path": "/grid",
            "title": "Grid"
          }
        },
        "title": "Grid 栅格"
      },
      {
        "path": "/icon",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Icon/index.md",
          "updatedTime": 1591863621000,
          "slugs": [
            {
              "depth": 3,
              "value": "Icon 图标",
              "heading": "icon-图标"
            },
            {
              "depth": 3,
              "value": "使用方法",
              "heading": "使用方法"
            },
            {
              "depth": 3,
              "value": "Loading",
              "heading": "loading"
            },
            {
              "depth": 3,
              "value": "填充颜色",
              "heading": "填充颜色"
            },
            {
              "depth": 3,
              "value": "图标列表",
              "heading": "图标列表"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Icon 图标",
          "group": {
            "path": "/icon",
            "title": "Icon"
          }
        },
        "title": "Icon 图标"
      },
      {
        "path": "/",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1591863621000,
          "slugs": [
            {
              "depth": 2,
              "value": "组件",
              "heading": "组件"
            }
          ],
          "title": "组件"
        },
        "title": "组件"
      }
    ],
    "title": "LUI"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
