import store from '~/store';

export default (selectors) => {
  const [el1, el2] = selectors;

  let timeout;
  const callback = (event) => {
    if (window.innerWidth < 1024 || !store.state.settings.syncScroll) return;

    clearTimeout(timeout);

    const containFirstSelector = event.target.classList.contains(el1.slice(1, el1.length));
    const target = document.querySelector(containFirstSelector ? el2 : el1);

    if (!target) return;

    target.removeEventListener('scroll', callback);

    /* Proporsional scroll sync
    const { scrollHeight, clientHeight, scrollTop } = event.target
    const scrollTopOffset = scrollHeight - clientHeight;
    const paneHeight = target.scrollHeight - clientHeight;
    target.scrollTop = (paneHeight * scrollTop) / scrollTopOffset;
    */
    target.scrollTop = event.target.scrollTop;

    timeout = setTimeout(() => {
      target.addEventListener('scroll', callback);
    }, 500);
  };

  selectors.forEach((selector) => {
    const el = document.querySelector(selector);

    el && el.addEventListener('scroll', callback);
  });
};
