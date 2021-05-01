<template>
  <div class="space-y-2 mb-4">
    <sidebar-menu-item v-bind="{ items }" @select="exportFile"> Export as </sidebar-menu-item>
    <sidebar-menu-item v-bind="{ items }" @select="previewFile"> Preview as </sidebar-menu-item>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import SidebarMenuItem from './SidebarMenuItem.vue';
import { useFileMenu } from '~/composable/fileMenu';

export default {
  components: { SidebarMenuItem },
  setup() {
    const store = useStore();
    const { exportFile, previewFile, items } = useFileMenu(store);

    return {
      items,
      exportFile,
      previewFile,
    };
  },
};
</script>
