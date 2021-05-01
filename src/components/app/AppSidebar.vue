<template>
  <div
    class="absolute w-full h-full top-0 left-0 z-10 bg-black bg-opacity-25"
    @click="$emit('close')"
  ></div>
  <div
    class="bg-gray-800 w-full md:w-72 scroll overflow-auto p-5 absolute left-0 h-full top-0 z-20"
  >
    <div class="mb-8 flex items-center">
      <p class="text-xl flex-1 font-bold inline-block">MkDown</p>
      <v-mdi name="mdi-close" class="cursor-pointer" @click="$emit('close')"></v-mdi>
    </div>
    <sidebar-menu class="md:hidden"></sidebar-menu>
    <sidebar-files></sidebar-files>
  </div>
</template>
<script>
import SidebarFiles from './sidebar/SidebarFiles.vue';
import SidebarMenu from './sidebar/SidebarMenu.vue';

export default {
  components: { SidebarFiles, SidebarMenu },
  emits: ['close'],
};
</script>
