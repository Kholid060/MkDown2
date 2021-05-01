<template>
  <div class="menu flex items-center">
    <nav-menu-item v-bind="{ items }" class="hidden md:block mr-4" @select="previewFile">
      Preview as
    </nav-menu-item>
    <nav-menu-item v-bind="{ items }" class="hidden md:block mr-4" @select="exportFile">
      Export as
    </nav-menu-item>
    <nav-menu-item :items="importItems">
      Import
      <template #item="{ name, type }">
        <input
          type="file"
          :accept="type"
          class="opacity-0 cursor-pointer absolute h-full w-full top-0 left-0"
          @change="importFile"
        />
        {{ name }}
      </template>
    </nav-menu-item>
    <nav-menu-item :items="settingsItem" hide-arrow class="mx-4">
      <template #trigger>
        <ui-button icon>
          <v-mdi name="mdi-cog"></v-mdi>
        </ui-button>
      </template>
      <template #item="{ id, name }">
        <ui-switch
          :model-value="settings[id]"
          class="my-1 mr-4"
          @change="updateSetting(id, $event)"
        ></ui-switch>
        {{ name }}
      </template>
    </nav-menu-item>
    <a href="https://github.com/kholid060/mkdown2" target="_blank" rel="noreferrer noopener">
      <v-mdi name="mdi-github"></v-mdi>
    </a>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useFileMenu } from '~/composable/fileMenu';
import NavMenuItem from './NavMenuItem.vue';

export default {
  components: { NavMenuItem },
  setup() {
    const store = useStore();
    const fileMenu = useFileMenu(store);

    const settingsItem = [
      { id: 'autoSave', name: 'Auto Save' },
      { id: 'syncScroll', name: 'Sync Scroll' },
    ];

    const settings = computed(() => store.state.settings);

    function updateSetting(key, value) {
      store.commit('settings/update', { key, value });
    }

    return {
      ...fileMenu,
      settings,
      settingsItem,
      updateSetting,
    };
  },
};
</script>
