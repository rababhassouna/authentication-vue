import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Products from '@/components/Products'
import Login from '@/components/User/Login'
import Signup from '@/components/User/Signup'
import ForgetPassword from '@/components/User/ForgetPassword'
import ResetPassword from '@/components/User/ResetPassword'
// import store from '../store'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/forget',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: ResetPassword
    }
  ]
})
