export const markdownContent = {
  bold: '**$text**',
  italic: '*$text*',
  blockquote: '> $text',
  'ordered-list': '\n1. $text',
  'unordered-list': '\n- $text',
  code: "```javascript \nconst code = 'here' \n```",
  heading: '# $text',
  'check-list': '\n- [x] $text',
  strike: '~~$text~~',
  link: '[$text](https://www.example.com)',
  image: '![alt text](https://picsum.photos/400)',
  table: '\n\n| text1 | text2 |\n|--|--|\n| content1 | content2 |\n\n',
};
