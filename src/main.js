import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'


Vue.use(BootstrapVue, Vuex, VueCharts , {Bar,Line} );


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
