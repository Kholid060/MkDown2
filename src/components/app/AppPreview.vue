<template>
  <div ref="container" class="preview-container"></div>
</template>
<script>
import { onMounted, ref, watch } from 'vue';
import showdown from '~/lib/showdown';
import highlightTheme from 'highlight.js/styles/atom-one-dark.css';
import markdownTheme from '~/assets/css/markdown.css';

export default {
  props: {
    file: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: 'styled-html',
    },
  },
  setup(props) {
    const container = ref(null);

    const content = () =>
      props.type === 'markdown' ? props.file.content : showdown.makeHtml(props.file.content || '');

    watch(
      () => props.file,
      () => {
        const { shadowRoot } = container.value;
        const contentContainer = shadowRoot.querySelector('.preview-content');

        if (contentContainer) {
          contentContainer.innerHTML = content();
        }
      },
      { deep: true }
    );

    onMounted(() => {
      let contentContainer = `<div class="preview-content" style="${
        props.type === 'markdown' ? 'white-space: pre' : ''
      }">${content()}</div>`;

      if (props.type === 'styled-html') {
        contentContainer += `<style>${highlightTheme}${markdownTheme}</style>`;
      }

      container.value.attachShadow({ mode: 'open' });
      container.value.shadowRoot.innerHTML = contentContainer;
    });

    return {
      container,
    };
  },
};
</script>
