import showdown from 'showdown';
import showdownHighlight from './showdown-highlight';

const converter = new showdown.Converter({
  strikethrough: true,
  omitExtraWLInCodeBlocks: true,
  tables: true,
  tasklists: true,
  smoothLivePreview: true,
  ghCodeBlocks: true,
  extensions: [showdownHighlight],
});
converter.setFlavor('github');

export default converter;
