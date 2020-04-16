<template>
  <nav class="p-2 py-3 overflow-hidden flex h-16 z-10 bg-lighter justify-between">
    <div class="md:w-7/12 w-5/12 inline-block overflow-hidden">
      <button-ui plain icon class="lg:mr-4" @click="$emit('input', !value)">
        <v-mdi :name="value ? 'mdi-close' : 'mdi-menu'" size="25"></v-mdi>
      </button-ui>
      <button-ui
       plain icon
       v-for="btn in actionList"
       :key="btn.id"
       @click="insertText(btn.id)"
       :class="[btn.class ? 'mr-3' : 'mr-1']"
       v-tooltip.bottom="btn.name">
        <v-mdi :name="btn.icon" size="20"></v-mdi>
      </button-ui>
    </div>
    <div class="flex items-center justify-end">
      <preview-file></preview-file>
      <export-file></export-file>
      <import-file class="mr-6"></import-file>
      <settings></settings>
    </div>
  </nav>
</template>
<script>
import markdownContent from '~/utils/markdownContent';
import ImportFile from './Menu/ImportFile.vue';
import ExportFile from './Menu/ExportFile.vue';
import PreviewFile from './Menu/PreviewFile.vue';
import Settings from './Menu/Settings.vue';

export default {
  components: {
    ImportFile, ExportFile, PreviewFile, Settings,
  },
  props: {
    value: Boolean,
  },
  data: () => ({
    actionList: [
      { name: 'Undo - Ctrl + Z', id: 'undo', icon: 'mdi-undo' },
      {
        name: 'Redo - Ctrl + Shift + Z', id: 'redo', icon: 'mdi-redo', class: true,
      },
      { name: 'Bold - Ctrl + B', id: 'bold', icon: 'mdi-format-bold' },
      { name: 'Italic - Ctrl + I', id: 'italic', icon: 'mdi-format-italic' },
      { name: 'Strikethrough - Ctrl + D', id: 'strike', icon: 'mdi-format-strikethrough' },
      {
        name: 'Heading', id: 'heading', icon: 'mdi-format-header-1', class: true,
      },
      { name: 'Unordered List', id: 'unordered-list', icon: 'mdi-format-list-bulleted' },
      { name: 'Ordered List', id: 'ordered-list', icon: 'mdi-format-list-numbered' },
      {
        name: 'Check list', id: 'check-list', icon: 'mdi-format-list-checks', class: true,
      },
      { name: 'Blockquote', id: 'blockquote', icon: 'mdi-format-quote-close' },
      { name: 'Link', id: 'link', icon: 'mdi-link' },
      { name: 'Image', id: 'image', icon: 'mdi-image' },
      { name: 'Table', id: 'table', icon: 'mdi-table' },
    ],
  }),
  methods: {
    insertText(id) {
      const cm = document.querySelector('.CodeMirror').CodeMirror;

      if (id === 'undo' || id === 'redo') {
        cm.execCommand(id);
      } else {
        cm.doc.replaceSelection(markdownContent[id]);
      }
    },
  },
};
</script>
<style lang="scss">
@screen lg{
  .input-title{
    input{
      width: 130px !important;
    }
    display: inline-block !important;
  }
}
</style>
