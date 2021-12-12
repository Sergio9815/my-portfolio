import Vue from 'vue';
import VAnimateCss from 'v-animate-css';
import 'animate.css';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(VAnimateCss);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
