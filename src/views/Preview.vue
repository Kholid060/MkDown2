<script>
import '~/assets/scss/pages/_markdown.scss';

export default {
  data: () => ({
    content: '',
    title: '',
    type: '',
  }),
  created() {
    const getItem = (key) => JSON.parse(localStorage.getItem(key));

    const id = getItem('activeFile');
    const files = getItem('files');

    if (id === null || files === null) return;

    const { title, content } = files[id];
    const { type } = this.$route.params;

    this.title = title;
    this.type = type;
    if (type === 'markdown') {
      this.content = content;
    } else if (type === 'html' || type === 'styled-html') {
      this.content = this.$md.render(content);
    }
  },
  render(h) {
    return h('div', {
      class: {
        'px-4 py-8 mx-auto lg:w-8/12 w-11/12': this.type === 'styled-html',
      },
    }, [
      h(this.type === 'markdown' ? 'pre' : 'div', {
        domProps: {
          innerHTML: this.content,
        },
        class: {
          'markdown-content': this.type === 'styled-html',
          'whitespace-pre-wrap': this.type === 'markdown',
        },
      }),
    ]);
  },
};
</script>
<style>
body{
  overflow-x: hidden;
}
</style>
