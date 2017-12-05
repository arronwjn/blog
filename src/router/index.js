import Vue from 'vue';
import Router from 'vue-router';

const App = resolve => require(['@/App'], resolve);
const Home = resolve => require(['@/pages/home'], resolve);
const Index = resolve => require(['@/pages/index'], resolve);



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,//顶层路由
      children: [
        {
          path: '',
          name: 'index',
          component: Index,
          children:[
            {
              path: '/home',
              name: 'home',
              component: Home
            }
          ]
        }
      ]
    }
  ]
})
