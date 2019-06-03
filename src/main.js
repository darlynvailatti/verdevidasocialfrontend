import Vue from "vue";
import './plugins/vuetify';
import DateFormatter from './plugins/dateFormatter';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from 'vue-resource'
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Toasted);
Vue.use(DateFormatter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
