<template>
  <div class="markdown-content" v-html="$md.render(content)">

  </div>
</template>
<script>
import '~/assets/scss/pages/_markdown.scss';

export default {
  computed: {
    content() {
      return this.$store.getters['files/activeFile'].content;
    },
  },
};
</script>
