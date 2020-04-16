import Vue from 'vue';
import saveToStorage from '~/utils/saveToStorage';

export default {
  state: () => ({
    syncScroll: true,
    autoSave: true,
  }),
  mutations: {
    update(state, { key, value }) {
      Vue.set(state, key, value);
      saveToStorage('settings', state);
    },
  },
};
