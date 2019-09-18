import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import router from './router'
import Chart from 'chart.js';

// middleware
Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

// bind axios to prototype method
Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
