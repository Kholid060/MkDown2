import store from '~/store';

export function debounce(func, wait, immediate) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export function saveToStorage(key, value) {
  if (store.state.settings.autoSave) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}

export function closeAllTooltip() {
  const elements = document.querySelectorAll('[vtooltip]');

  elements.forEach((element) => {
    element._tippy.hide();
  });
}
