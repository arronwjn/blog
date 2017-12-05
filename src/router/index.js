import Vue from 'vue';
import Router from 'vue-router';

const App = resolve => require(['@/App'], resolve);
const Home = resolve => require(['@/pages/home'], resolve);
const Index = resolve => require(['@/pages/index'], resolve);
const Resume = resolve => require(['@/pages/resume'], resolve);



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
          redirect: '/home'
        },
        {
          path:'',
          component:Index,
          children:[
            {
              path: '/home',
              name: 'home',
              component: Home
            },
            {
              path:'resume',
              component:Resume
            }
          ]
        }
      ]
    }
  ]
})
