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
import edjsHTML from "editorjs-html";

let editor;
const edjsParser = edjsHTML({
  simpleText: simpleTextParser,
  footer: footerParser,
});

let saveData = ref("");
let parsedHtml = ref("");

defineProps({
  msg: String,
});

const handleClick = (e) => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data: ", outputData);
      saveData.value = JSON.stringify(outputData, null, 4);

      parsedHtml.value = edjsParser.parse(outputData);
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
};

const toggleReadOnly = () => {
  editor.readOnly.toggle();
};

// Extend For Custom Blocks
function simpleTextParser(block) {
  return `<div class="simple-text"><p>${block.data.text}</p></div>`;
}

function footerParser(block) {
  return `<div class="footer"><p>${block.data.text}</p><small>${block.data.copyright}</small></div>`;
}

onMounted(() => {
  editor = new EditorJS({
    holder: "editorjs",
    inlineToolbar: true,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [2, 3, 4],
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
      footer: {
        class: Footer,
        inlineToolbar: true,
      },
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
            withBorder: false,
            withBackground: true,
            stretched: false,
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
  <div class="flex gap-2">
    <button class="text-white bg-blue-500 py-2 px-3" @click="handleClick">
      保存
    </button>
    <button class="text-white bg-blue-500 py-2 px-3" @click="toggleReadOnly">
      編集ON/OFF
    </button>
  </div>
  <pre class="bg-white border-1 mt-4 p-4">{{ saveData }}</pre>
  <pre class="bg-white border-1 mt-4 p-4">{{ parsedHtml }}</pre>
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
