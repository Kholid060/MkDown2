import showdown from 'showdown';
import highlightjs from './highlightjs';

function decodeHTML(text) {
  return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function filter(text, converter, options) {
  const left = '<pre><code\\b[^>]*>',
    right = '</code></pre>',
    flags = 'g',
    replacement = function (wholeMatch, match, left, right) {
      const lang = (left.match(/class=\"([^ \"]+)/) || [])[1];
      match = decodeHTML(match);
      return left + highlightjs.highlightAuto(match).value + right;
    };

  return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
}

export default {
  type: 'output',
  filter,
};
