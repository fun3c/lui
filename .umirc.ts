import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'LUI',
  styles: [
    `
    ul,ol {list-style: none},
    .__dumi-default-previewer-demo > * {
        margin: 10px;
    }
    `,
  ],
  // more config: https://d.umijs.org/config
});
