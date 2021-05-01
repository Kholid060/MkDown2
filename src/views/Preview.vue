<template>
  <app-preview :file="file" :type="$route.params.type"></app-preview>
</template>
<script>
import { shallowRef, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppPreview from '~/components/app/AppPreview.vue';

export default {
  components: { AppPreview },
  setup() {
    const types = ['html', 'markdown', 'styled-html'];
    const router = useRouter();
    const { type } = router.currentRoute.value.params;
    const file = shallowRef({});

    onMounted(() => {
      const files = JSON.parse(localStorage.getItem('files'));
      const activeFile = JSON.parse(localStorage.getItem('activeFile'));

      if (!types.includes(type) || !files || !activeFile) return router.push('/');

      file.value = files[activeFile];

      if (!file.value) return router.push('/');

      document.title = file.value.title;
    });

    return {
      file,
    };
  },
};
</script>
<style>
body {
  overflow-x: hidden;
}
</style>

