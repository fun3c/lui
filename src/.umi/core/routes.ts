// @ts-nocheck
import { ApplyPluginsType } from '/Users/liuzhao8/workspace/mypro/lui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/liuzhao8/workspace/mypro/lui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"组件","meta":{}},{"title":"Button","path":"/button","meta":{},"children":[{"path":"/button","title":"Button 按钮","meta":{}}]},{"title":"Grid","path":"/grid","meta":{},"children":[{"path":"/grid","title":"Grid 栅格","meta":{}}]},{"title":"Icon","path":"/icon","meta":{},"children":[{"path":"/icon","title":"Icon 图标","meta":{}}]}]}},"locales":[],"navs":{},"title":"LUI","mode":"doc"},
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
        "path": "/button",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1591777567000,
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
        "path": "/grid",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/Grid/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Grid/index.md",
          "updatedTime": 1591863593644,
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
          "updatedTime": 1591777567000,
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
          "updatedTime": 1591699713000,
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
