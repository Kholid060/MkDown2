<template>
  <simplebar
   class="content side-menu overflow-auto h-screen p-5 bg-light"
   >
    <div class="flex items-center justify-between">
      <p class="text-xl font-bold">MkDown</p>
      <button-ui icon @click="$emit('close')" class="lg:hidden">
        <v-mdi name="mdi-close"></v-mdi>
      </button-ui>
    </div>
    <div class="mt-12 lg:hidden">
      <preview-file></preview-file>
      <export-file class="mt-4"></export-file>
    </div>
    <file-list></file-list>
  </simplebar>
</template>
<script>
import simplebar from 'simplebar-vue';
import FileList from './SideMenu/FileList.vue';
import ExportFile from './SideMenu/ExportFile.vue';
import PreviewFile from './SideMenu/PreviewFile.vue';

export default {
  components: {
    simplebar, FileList, ExportFile, PreviewFile,
  },
};
</script>
<style lang="scss" scoped>
.side-menu{
  width: 100%;
  position: absolute;
  z-index: 999;
}
@screen lg{
  .side-menu{
    width: 280px;
    position: relative;
  }
}
</style>
