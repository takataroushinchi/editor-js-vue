<script setup>
import { ref, onMounted } from "vue";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import RawTool from "@editorjs/raw";

let editor;

defineProps({
  msg: String,
});

const count = ref(0);

onMounted(() => {
  editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: Header,
      list: List,
      image: SimpleImage,
      raw: RawTool,
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
