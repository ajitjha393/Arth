import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes/app-routes';
import store from './store';

Vue.config.productionTip = false;


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://arth-stock-trader-default-rtdb.firebaseio.com/'

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
