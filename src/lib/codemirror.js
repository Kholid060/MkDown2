import CodeMirror from 'codemirror';
import { markdownContent } from '../utils/shared';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-mirage.css';

import 'codemirror/addon/edit/continuelist';

import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/vue/vue';

import 'codemirror/keymap/sublime';

function shortcutHandler(name, editor) {
  const value = markdownContent[name];

  if (!value) return;

  const selectedText = editor.getSelection();

  editor.doc.replaceSelection(value.replace(/\$text/, selectedText || name));
}

export default function (element, options = {}) {
  if (!element) return console.error('Element is required');

  const codemirror = CodeMirror(element, {
    value: '',
    tabSize: 2,
    keyMap: 'sublime',
    mode: 'text/x-gfm',
    theme: 'ayu-mirage',
    highlightFormatting: true,
    lineNumbers: true,
    lineWrapping: true,
    line: true,
    extraKeys: {
      Enter: 'newlineAndIndentContinueMarkdownList',
      'Ctrl-B': (editor) => shortcutHandler('bold', editor),
      'Ctrl-I': (editor) => shortcutHandler('italic', editor),
      'Ctrl-D': (editor) => shortcutHandler('strikethrough', editor),
    },
    ...options,
  });

  return codemirror;
}
