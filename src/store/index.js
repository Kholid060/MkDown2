import { createStore } from 'vuex';
import modules from './modules';

const store = createStore({
  modules,
  mutations: {
    changeState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async retrieve({ state, dispatch, commit }) {
      try {
        await dispatch('files/retrieve');
        await dispatch('settings/retrieve');
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export default store;
