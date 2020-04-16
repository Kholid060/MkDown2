import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  mutations: {
    changeState(state, { key, value }) {
      Vue.set(state, key, value);
    },
  },
  actions: {
    async retrieve({ state, dispatch, commit }) {
      try {
        await dispatch('files/retrieve');
        const settings = JSON.parse(localStorage.getItem('settings'));

        if (settings === null) {
          localStorage.setItem('settings', JSON.stringify(state.settings));
        } else {
          commit('changeState', {
            key: 'settings',
            value: settings,
          });
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});
