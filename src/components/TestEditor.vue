<script setup>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import { onMounted, ref } from 'vue';

let editor;
let saveData = ref('');

defineProps({
  msg: String,
});

const handleClick = (e) => {
  editor
    .save()
    .then((outputData) => {
      console.log('Article data: ', outputData);
      saveData.value = JSON.stringify(outputData, null, 4);
    })
    .catch((error) => {
      console.log('Saving failed: ', error);
    });
};

onMounted(() => {
  editor = new EditorJS({
    holder: 'editorjs',
    inlineToolbar: true,
    tools: {
      header: Header,
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          },
        },
      },
    },
    data: {
      time: 1550476186479,
      blocks: [
        {
          type: 'header',
          data: {
            text: 'タイトル（H3）',
            level: 3,
          },
        },
        {
          type: 'image',
          data: {
            url: 'https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg',
            caption: 'Roadster // tesla.com',
            withBorder: false,
            withBackground: false,
            stretched: true,
          },
        },
      ],
      version: '2.8.1',
    },
  });
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <div id="editorjs"></div>
  <div class="flex gap-2">
    <button class="text-white bg-blue-500 py-2 px-3" @click="handleClick">
      保存
    </button>
  </div>
  <pre class="bg-white border-1 mt-4 p-4">{{ saveData }}</pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<style>
.footer.withBorder img {
  border: 1px solid #e8e8eb;
}

.footer.withBackground {
  background: #999;
  color: #fff;
  padding: 10px;
}

.footer.withBackground img {
  display: block;
  max-width: 60%;
  margin: 0 auto 15px;
}
</style>
