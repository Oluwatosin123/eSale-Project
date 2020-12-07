import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Men from "../views/Men.vue";
import Women from "../views/Women.vue";
import Toparea from "../views/Toparea.vue";
import Toparea1 from "../views/toparea1.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Order from "../views/Order.vue";
import Cart from "../views/Cart.vue";
import Cartpage from "../views/Cartpage.vue";
import Me from "../sections/me.vue";
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
      path: "/men",
      name: "men",
      component: Men
    },
    
    {
      path: "/women",
      name: "women",
      component: Women
    },
    
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/me",
      name: "me",
      component: Me
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
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/cartpage",
      name: "cartpage",
      component: Cartpage
    },
    {
      path: "/toparea",
      name: "toparea",
      component: Toparea
    },
    {
      path: "/toparea1",
      name: "toparea1",
      component: Toparea1
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


