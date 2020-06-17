import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'LUI',
  styles: [
    `
    .__dumi-default-previewer-demo > * {
        display: block-inline;
        margin: 10px;
    }
    `,
    `
      ul {list-style: none;}
    `,
  ],
  // more config: https://d.umijs.org/config
});
