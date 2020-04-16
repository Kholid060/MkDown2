module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': {
      whitelist: ['cm-s-ayu-mirage', 'tooltip-ui'],
      whitelistPatterns: [/CodeMirror/, /simplebar/, /hljs/, /markdown-content/],
      whitelistPatternsChildren: [/(table|img|tr|td|tbody|thead)/],
    },
  },
};
