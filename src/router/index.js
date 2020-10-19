import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Order from "../views/Order.vue";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

Vue.use(VueRouter);

// const routes = 

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
  
    {
      path: "/about",
      name: "about",
      component: About
    },
    
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
  
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children:[
        {
          path: "overview",
          name: "overview",
          component:Overview,
        },
        {
          path: "products",
          name: "products",
          component:Products,
        },
        {
          path: "order",
          name: "order",
          component:Order,
        },
      ]
    },
  ]
});



router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser
  
    if (requiresAuth && !currentUser) {
      next('/')
    } else if (requiresAuth && currentUser) {
      next()
    } else {
      next()
    }
})


export default router;


