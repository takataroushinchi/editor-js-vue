<script setup>
import { ref, onMounted } from "vue";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import RawTool from "@editorjs/raw";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";

let editor;

defineProps({
  msg: String,
});

onMounted(() => {
  editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [1, 2, 3, 4],
          defaultLevel: 3,
        },
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+H",
      },
      list: List,
      image: SimpleImage,
      raw: RawTool,
    },
    onReady: () => {
      new Undo({ editor });
      new DragDrop(editor);
    },
    data: {
      time: 1550476186479,
      blocks: [
        {
          type: "header",
          data: {
            text: "タイトル（H3）",
            level: 3,
          },
        },
      ],
      version: "2.8.1",
    },
  });
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <div id="editorjs"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
