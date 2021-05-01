import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import App from './App.vue';
import router from './router';
import store from './store';
import uiComponents from './components/ui';
import vMdijs from './lib/vue-mdijs';
import VTooltip from './directives/VTooltip';
import VAutofocus from './directives/VAutofocus';
import './assets/css/tailwind.css';
import './assets/css/style.css';
import './assets/css/tooltip.css';

registerSW();

const app = createApp(App);

app.directive('tooltip', VTooltip);
app.directive('autofocus', VAutofocus);

app.use(store).use(router).use(uiComponents).use(vMdijs).mount('#app');
