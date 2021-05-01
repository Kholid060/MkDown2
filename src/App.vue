<template>
  <div class="app">
    <router-view />
    <div
      v-if="needRefresh"
      class="absolute p-5 absolute z-50 bottom-0 right-0 bg-gray-700 m-5 max-w-xs shadow-xl rounded-xl"
    >
      <p class="leading-tight">New content available, click on reload button to update.</p>
      <div class="space-x-2 flex mt-4">
        <ui-button class="w-64" @click="needRefresh = false">Close</ui-button>
        <ui-button variant="primary" class="w-64" @click="updateServiceWorker">Reload</ui-button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { useRegisterSW } from 'virtual:pwa-register/vue';

export default {
  setup() {
    const store = useStore();
    const { needRefresh, updateServiceWorker } = useRegisterSW();

    watch(
      () => store.state.files.activeFile,
      () => {
        const activeFile = store.getters['files/active'];

        document.title = activeFile.title;
      }
    );

    return {
      needRefresh,
      updateServiceWorker,
    };
  },
};
</script>
