module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': {
      whitelist: ['tooltip-ui'],
      whitelistPatterns: [/CodeMirror/, /simplebar/, /hljs/, /markdown-content/, /(cm-s-ayu-mirage|cm)/, /vue-popover-theme/],
      whitelistPatternsChildren: [/(table|img|tr|td|tbody|thead)/],
    },
  },
};
