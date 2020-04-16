import MarkdownIt from 'markdown-it';

const handlePlugin = (plugin) => plugin.default || plugin;
const md = new MarkdownIt('default', {
  html: true,
  linkify: true,
  xhtmlOut: true,
  breaks: true,
  typographer: true,
});

md.use(handlePlugin(require('markdown-it-abbr')));
md.use(handlePlugin(require('markdown-it-ins')));
md.use(handlePlugin(require('markdown-it-mark')));
md.use(handlePlugin(require('markdown-it-task-lists')));
md.use(handlePlugin(require('markdown-it-sup')));
md.use(handlePlugin(require('markdown-it-sub')));
md.use(handlePlugin(require('markdown-it-deflist')));
md.use(handlePlugin(require('markdown-it-highlightjs')));

export default md;
