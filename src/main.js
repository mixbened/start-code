import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import router from './router'
import Chart from 'chart.js';
import vuescroll from 'vue-scroll'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

// middleware
Vue.use(vuescroll);
Vue.use(SequentialEntrance)
Vue.use(VueRouter)
Vue.use(Buefy)



Vue.config.productionTip = false

// bind axios to prototype method
Vue.prototype.$http = axios
Vue.prototype.$window = window

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
