import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes/app-routes';
import store from './store';

Vue.config.productionTip = false;


Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.filter('currency', value => '$' + value.toLocaleString())

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
