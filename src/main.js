// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index.js'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
// import Home from './components/HelloFromVux'

// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

const router = routes

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
