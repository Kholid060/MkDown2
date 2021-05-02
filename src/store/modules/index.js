const requireModule = import.meta.globEager('./*.store.js');
const modules = {};

for (const path in requireModule) {
  const data = requireModule[path].default;
  const name = data.name || path.replace(/^.\/|.store\.js$/gi, '');

  modules[name] = {
    namespaced: true,
    ...data,
  };
}

export default modules;
