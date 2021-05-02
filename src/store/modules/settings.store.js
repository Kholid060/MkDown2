export default {
  state: () => ({
    syncScroll: true,
    autoSave: true,
  }),
  mutations: {
    update(state, { key, value }) {
      state[key] = value;

      localStorage.setItem('settings', JSON.stringify(state));
    },
  },
  actions: {
    retrieve({ state, commit }) {
      const settings = JSON.parse(localStorage.getItem('settings') ?? null);

      if (settings === null) {
        localStorage.setItem('settings', JSON.stringify(state));
      } else {
        Object.keys(settings).forEach((key) => {
          if (!state[key]) return;

          commit('update', {
            key,
            value: settings[key],
          });
        });
      }
    },
  },
};
