import saveFile from '~/utils/saveFile';

export default {
  data: () => ({
    types: ['markdown', 'html', 'styled-html'],
  }),
  methods: {
    exportFile(type) {
      const { title, content } = this.$store.getters['files/activeFile'];
      const extFile = type === 'markdown' ? 'md' : 'html';
      const fileName = `${title}.${extFile}`;
      const fileContent = type === 'markdown' ? content : this.$md.render(content);

      saveFile(fileName, fileContent, type);
    },
  },
};
