<template>
  <codemirror
    class="h-full"
    :value="content"
    @input="updateContent"
    :options="options"
  />
</template>
<script>
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-mirage.css';

export default {
  props: {
    value: String,
  },
  data: () => ({
    code: '# Hello gan',
    options: {
      tabSize: 2,
      keyMap: 'sublime',
      mode: 'text/x-gfm',
      scrollbarStyle: 'overlay',
      theme: 'ayu-mirage',
      highlightFormatting: true,
      lineNumbers: true,
      lineWrapping: true,
      line: true,
      extraKeys: {
        Enter: 'newlineAndIndentContinueMarkdownList',
        'Ctrl-B': ({ doc }) => doc.replaceSelection('**bold text**'),
        'Ctrl-I': ({ doc }) => doc.replaceSelection('*italic text*'),
        'Ctrl-D': ({ doc }) => doc.replaceSelection('~~strikethrough text~~'),
      },
    },
  }),
  computed: {
    content() {
      return this.$store.getters['files/activeFile'].content;
    },
  },
  methods: {
    updateContent(content) {
      this.$store.commit('files/updateFile', {
        id: this.$store.state.files.activeFile,
        key: 'content',
        value: content,
      });
    },
  },
};
</script>
<style lang="scss">
.CodeMirror-scroll{
  @apply pt-6
}
.CodeMirror-overlayscroll-vertical div{
  background-color: #12151b
}
.CodeMirror{
  font-family: 'Fira Code', monospace;
  height: 100%;
  pre {
    word-break: break-word;
  }
}
</style>
