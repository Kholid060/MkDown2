const components = import.meta.globEager('./*.vue');

export default function (app) {
  for (const path in components) {
    const component = components[path].default;
    const name = component.name || `ui-${path.replace(/^.\/|\.vue$/gi, '').toLowerCase()}`;

    app.component(name, component);
  }
}
