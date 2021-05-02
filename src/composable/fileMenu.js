import saveFile from '~/utils/saveFile';
import showdown from '~/lib/showdown';

export function useFileMenu(store) {
  const items = [
    { id: 'markdown', name: 'Markdown' },
    { id: 'html', name: 'HTML' },
    { id: 'styled-html', name: 'Styled HTML' },
  ];
  const importItems = [
    { id: 'markdown', name: 'Markdown File', type: 'text/markdown, .md' },
    { id: 'html', name: 'HTML File', type: 'text/html' },
  ];

  function exportFile(type) {
    const file = store.getters['files/active'];

    saveFile(file, type);
  }
  function importFile({ target }) {
    const [file] = target.files;
    const [fileExt] = /[^.]+$/.exec(file.name);
    const fileReader = new FileReader();

    if (fileExt !== 'md' && fileExt !== 'html') return;

    fileReader.readAsText(file);
    fileReader.onload = (event) => {
      const { result } = event.target;
      let content = '';

      if (fileExt === 'md') content = result;
      else if (fileExt === 'html') content = showdown.makeMarkdown(result);

      store.dispatch('files/add', {
        activate: true,
        data: {
          title: file.name.replace(/.(html|md)$/, ''),
          content,
        },
      });
    };
  }
  function previewFile(type) {
    window.open(`/preview/${type}`, '_blank');
  }

  return {
    items,
    exportFile,
    importFile,
    importItems,
    previewFile,
  };
}
