// @ts-nocheck
import { ApplyPluginsType } from '/Users/liuzhao8/workspace/mypro/lui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/liuzhao8/workspace/mypro/lui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"组件","meta":{}},{"title":"Button","path":"/button","meta":{},"children":[{"path":"/button","title":"Button 按钮","meta":{}}]}]}},"locales":[],"navs":{},"title":"lui","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/src/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.md",
          "updatedTime": 1591688438375,
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
          "updatedTime": 1591689197241,
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
        "path": "/",
        "component": require('/Users/liuzhao8/workspace/mypro/lui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1591688298857,
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
    "title": "lui"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
