import { saveAs } from 'file-saver';

// Atom One Dark by Daniel Gamage
// Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
const oneDarkTheme = '.hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline} ';
const markdownTheme = "body{font-family: 'Inter', sans-serif;background-color: #232935; color: white} .markdown-content{width:91.666667%}.py-8{padding-top:2rem;padding-bottom:2rem}.px-4{padding-left:1rem;padding-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.markdown-content img{max-width: 100%}.markdown-content h1,.markdown-content h2,.markdown-content h3,.markdown-content h4,.markdown-content h5,.markdown-content h6{font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem}.markdown-content blockquote,.markdown-content dd,.markdown-content dl,.markdown-content figure,.markdown-content hr,.markdown-content p,.markdown-content pre{margin-top:1.25rem;margin-bottom:1.25rem}.markdown-content h1{font-size:1.875rem}.markdown-content h2{font-size:1.5rem}.markdown-content h3{font-size:1.25rem}.markdown-content h4{font-size:1.125rem}.markdown-content h5{font-size:1rem}.markdown-content h6{font-size:.875rem}.markdown-content a{color:#0052cc}.markdown-content a:hover{text-decoration:underline}.markdown-content code,.markdown-content pre{font-family:'Fira Code',monospace;background-color:#1f2430;border-radius:.9375rem}.markdown-content pre{padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}.markdown-content pre code{padding:0}.markdown-content code{padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem}.markdown-content blockquote{border-left-width:4px;border-color:#0052cc;padding-left:1.25rem;padding-right:1.25rem}.markdown-content table{table-layout:auto;border-collapse:collapse;}.markdown-content table *{border-color:rgba(255,255,255,.24) !important}.markdown-content table td,.markdown-content table th{padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem;border-width:1px;border: 1px solid}.markdown-content table tbody tr:nth-child(odd){background-color:#1f2430}.markdown-content ol{padding:auto;list-style:decimal}.markdown-content li{list-style-position:inside}.markdown-content li p{display:inline-block}.markdown-content ul ul{padding-left:1.5rem}.markdown-content ul{list-style:disc}@media (min-width:1024px) {.markdown-content{width:66.666667%}}";

function html(title, content, type = '') {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      ${type === 'styled-html'
    ? '<link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;700&display=swap" rel="stylesheet">'
    : ''
}
      <title>${title}</title>
      ${type === 'styled-html'
    ? `<style type="text/css">${oneDarkTheme + markdownTheme}</style>`
    : ''
}
    </head>
    <body>
      ${type === 'styled-html'
    ? `<div class="markdown-content 'px-4 py-8 mx-auto">${content}</div>`
    : content
}
    </body>
    </html>
  `;
}

function saveFile(name, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, name);
}

export default function (name, content, type) {
  if (type === 'markdown') {
    saveFile(name, content);
  } else if (type === 'html') {
    saveFile(name, html(name, content));
  } else if (type === 'styled-html') {
    saveFile(name, html(name, content, 'styled-html'));
  }
}
