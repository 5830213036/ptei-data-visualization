import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import VueCharts from 'vue-chartjs'
import { Pie, Line } from 'vue-chartjs'
import "chart.js"
import "hchs-vue-charts"

Vue.use(window.VueCharts);



Vue.use(BootstrapVue, Vuex, VueCharts , {Pie,Line} );


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
