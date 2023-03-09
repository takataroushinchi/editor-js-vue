<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import Editor from "./components/Editor.vue";
</script>

<template>
  <div class="editor">
    <Editor msg="EditorJS" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.editor {
  background: #eee;
  padding: 16px;
}
</style>
