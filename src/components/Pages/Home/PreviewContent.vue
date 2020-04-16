<template>
  <div class="markdown-content" v-html="$md.render(content)">

  </div>
</template>
<script>
import '~/assets/scss/pages/_markdown.scss';
import 'highlight.js/styles/atom-one-dark.css';

export default {
  computed: {
    content() {
      return this.$store.getters['files/activeFile'].content;
    },
  },
};
</script>
