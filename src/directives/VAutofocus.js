export default function (el, { value = true }) {
  if (!value) return;

  el.focus();
}
