import Vue from 'vue'
import Router from 'vue-router'
import login from "./components/login.vue"
import secure from "./components/secure.vue"
import HelloWorld from './components/HelloWorld.vue'



import firestore  from './components/firestore.vue'


Vue.use(Router)
const routes = [
    { path: '/home', component: HelloWorld },
    { path: '/login', component: login },
    { path: '/firebase', component: firestore },
    { path: '/secure', component: secure }
  ]

  const router = new Router({
    routes 
  })

  export default router 