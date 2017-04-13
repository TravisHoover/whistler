import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Account from '@/components/Account';
import Login from '@/components/Login';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});

