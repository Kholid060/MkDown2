import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// (S)CSS
import './assets/css/tailwind.css';
import './assets/scss/style.scss';
import './assets/scss/components/_tooltip.scss';

// Plugins
import './plugins/vue-mdijs';
import './plugins/v-tooltip';
import './plugins/vue-codemirror';
import './plugins/markdown-it';
import './plugins/vue-toastification';

import './components/Base';
import './directives/VAutofocus';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
