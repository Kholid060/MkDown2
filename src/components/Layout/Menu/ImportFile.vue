<template>
  <v-popover>
    <button-ui plain class="text-sm">
      Import
      <v-mdi name="mdi-chevron-down"></v-mdi>
    </button-ui>
    <template slot="popover">
      <card-ui class="shadow-xl border">
        <label v-for="file in files" :key="file.name">
          <list-ui dense class="cursor-pointer">{{file.name}} File</list-ui>
          <input
           @change="handleFile(file.name, $event)"
           :accept="file.type"
           type="File" class="hidden">
        </label>
      </card-ui>
    </template>
  </v-popover>
</template>
<script>
const Turndown = require('turndown').default;
const turndownPluginGfm = require('turndown-plugin-gfm');

const { gfm } = turndownPluginGfm;
const turndownService = new Turndown();
turndownService.use(gfm);

export default {
  data: () => ({
    files: [
      { name: 'Markdown', type: 'text/markdown, .md' },
      { name: 'HTML', type: 'text/html' },
    ],
  }),
  methods: {
    handleFile(type, { target }) {
      const file = target.files[0];
      const fileExt = /[^.]+$/.exec(file.name);
      const fileReader = new FileReader();

      if (fileExt[0] !== 'md' && fileExt[0] !== 'html') return this.$toast.error('Invalid file type');

      fileReader.readAsText(file);
      fileReader.onload = (event) => {
        const { result } = event.target;

        let content;
        if (fileExt[0] === 'md') content = result;
        else if (fileExt[0] === 'html') content = turndownService.turndown(result);

        console.log(content, result, typeof result, fileExt);
        this.$store.dispatch('files/add', {
          activate: true,
          data: {
            title: file.name.replace(/.(html|md)$/, ''),
            content,
          },
        });
      };

      return true;
    },
  },
};
</script>
