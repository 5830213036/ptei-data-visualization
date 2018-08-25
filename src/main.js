import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

Vue.use(BootstrapVue, Vuex);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
