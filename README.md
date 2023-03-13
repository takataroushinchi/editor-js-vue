# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## EditorJS

### テキスト系のブロックでの不具合対応

最新版（@editorjs/editorjs@latest, @editorjs/header@latest）だとテキスト保存や編集でエラーが発生する

以前のバージョンで固定することで回避

```
>"@editorjs/editorjs": "^2.26.5",
>"@editorjs/header": "^2.7.0",
"@editorjs/editorjs": "^2.12.4",
"@editorjs/header": "^2.2.3",
```
