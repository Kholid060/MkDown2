import Vue from 'vue';
import shortid from 'shortid';
import saveToStorage from '~/utils/saveToStorage';

export default {
  state: () => ({
    files: {},
    activeFile: '',
  }),
  getters: {
    allFiles: (state) => Object.keys(state.files).map((key) => ({
      id: key,
      ...state.files[key],
    })),
    activeFile: (state) => state.files[state.activeFile],
  },
  mutations: {
    updateState(state, { key, value }) {
      Vue.set(state, key, value);
    },
    addFile(state, { id, data }) {
      Vue.set(state.files, id, data);
      saveToStorage('files', state.files);
    },
    updateFile(state, { id, key, value }) {
      Vue.set(state.files[id], key, value);

      saveToStorage('files', state.files);
    },
    deleteFile(state, id) {
      Vue.delete(state.files, id);
      saveToStorage('files', state.files);
    },
    changeActive(state, id) {
      state.activeFile = id;

      localStorage.setItem('activeFile', JSON.stringify(id));
    },
  },
  actions: {
    add({ commit }, { activate, data }) {
      return new Promise((resolve) => {
        const id = shortid.generate();

        commit('addFile', {
          id,
          data,
        });
        if (activate) commit('changeActive', id);

        resolve(id);
      });
    },
    delete({ state, getters, commit }) {
      const id = state.activeFile;

      commit('changeActive', getters.allFiles[0].id);
      commit('deleteFile', id);
    },
    retrieve({ commit, getters, dispatch }) {
      return new Promise((resolve) => {
        const files = localStorage.getItem('files');
        const activeFile = localStorage.getItem('activeFile');

        if (files === null) {
          const defaultContent = '# MkDown\n\nMkDown is an online markdown editor built with [vueJs](https://vuejs.org). How to use MkDown Markdown Editor:\n\n- Type some markdown in left side\n- See the preview on right side\n- And Voilà\n\n## Feature\n\n- Import Markdown file from your pc\n- Import your HTML file and convert it to markdown\n- Export your document as a Markdown file, HTML or HTML styled file';

          dispatch('add', {
            activate: true,
            data: {
              title: 'Welcome!!',
              content: defaultContent,
            },
          });

          resolve();
        } else if (activeFile === null) {
          commit('changeActive', getters.allFiles[0].id);

          resolve();
        } else if (!!files && !!activeFile) {
          commit('updateState', {
            key: 'files',
            value: JSON.parse(files),
          });
          commit('updateState', {
            key: 'activeFile',
            value: JSON.parse(activeFile),
          });
          resolve();
        }
      });
    },
  },
};
