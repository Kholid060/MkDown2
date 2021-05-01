<template>
  <div ref="container" class="app-editor"></div>
</template>
<script>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useStore } from 'vuex';
import codemirror from '~/lib/codemirror';

export default {
  props: {
    activeFile: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const store = useStore();

    const container = ref(null);

    function createInstance() {
      const wrapper = document.createElement('div');
      wrapper.classList = 'wrapper h-full w-full';

      container.value.appendChild(wrapper);

      const editor = codemirror(wrapper, {
        value: props.activeFile.content,
      });

      editor.on('change', () => {
        store.commit('files/updateFile', {
          id: props.activeFile.id,
          key: 'content',
          value: editor.getValue(),
        });
      });
    }

    watch(
      () => store.state.files.activeFile,
      () => {
        const wrapper = container.value.querySelector('.wrapper');

        container.value.removeChild(wrapper);

        setTimeout(createInstance, 200);
      }
    );

    onMounted(createInstance);

    return {
      container,
    };
  },
};
</script>
<style>
.app-editor .CodeMirror {
  font-family: 'Fira Code', monospace;
  height: 100%;
}
.app-editor .CodeMirror,
.app-editor .CodeMirror .CodeMirror-gutters {
  background-color: transparent;
}
.app-editor .CodeMirror pre {
  word-break: break-word;
}
</style>
