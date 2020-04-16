import debounce from 'lodash.debounce';
import store from '~/store';

const saveToStorage = debounce((key, data) => {
  if (store.state.settings.autoSave) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}, 1000);

export default saveToStorage;
