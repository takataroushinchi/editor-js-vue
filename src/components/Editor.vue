<script setup>
import { ref, onMounted } from "vue";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import RawTool from "@editorjs/raw";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { SimpleText } from "@/components/editor/simple-text";
import { Footer } from "@/components/editor/footer";

let editor;

defineProps({
  msg: String,
});

let saveData = ref("");

const handleClick = (e) => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data: ", outputData);
      saveData.value = JSON.stringify(outputData, null, 4);
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
};

onMounted(() => {
  editor = new EditorJS({
    holder: "editorjs",
    inlineToolbar: true,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [1, 2, 3, 4],
          defaultLevel: 3,
        },
        // inlineToolbar: ['marker', 'link'],
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+H",
      },
      list: List,
      image: SimpleImage,
      raw: RawTool,
      simpleText: {
        class: SimpleText,
        inlineToolbar: true,
      },
      footer: Footer,
    },
    onReady: () => {
      new Undo({ editor });
      new DragDrop(editor);
    },
    readOnly: false,
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
        {
          type: "image",
          data: {
            url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
          },
        },
        {
          type: "footer",
          data: {
            text: "フッター",
            copyright: "©SSSS",
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
  <button class="text-white bg-blue-500 py-2 px-3" @click="handleClick">
    保存
  </button>
  <pre>{{ saveData }}</pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
