import { saveAs } from 'file-saver';
import oneDarkTheme from 'highlight.js/styles/atom-one-dark.css';
import showdown from '~/lib/showdown';
import markdownCss from '~/assets/css/markdown.css';
import markdownTheme from '~/assets/css/markdown-theme.css';

function html({ title, content, type, styled = false }) {
  const htmlStr = type === 'markdown' ? content : showdown.makeHtml(content);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  ${
    styled
      ? '<link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;700&display=swap" rel="stylesheet">'
      : ''
  }
  <title>${title}</title>
  ${
    styled
      ? `<style type="text/css">${oneDarkTheme + '\n' + markdownTheme + markdownCss}</style>`
      : ''
  }
</head>
<body>
  ${styled ? `<div class="preview-content">${htmlStr}</div>` : htmlStr}
</body>
</html>
  `;
}

export default function ({ title, content }, type) {
  const fileName = `${title}.${type === 'markdown' ? 'md' : 'html'}`;
  const fileContent =
    type === 'markdown'
      ? content
      : html({ title: fileName, content, styled: type === 'styled-html', type });

  const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, fileName);
}
