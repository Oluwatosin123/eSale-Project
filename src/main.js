import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from 'jquery';
import "@/../node_modules/font-awesome/css/font-awesome.min.css";
import firebase from "firebase"
import firestore from 'firebase/firestore'

window.$ = window.jQuery = jQuery;

// global $ 

import 'popper.js';
import 'bootstrap';
import './assets/app.scss'

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Hero', require('./components/Hero.vue').default);
Vue.component('card', require('./components/card.vue').default);
Vue.component('footerarea', require('./components/footerarea.vue').default);
Vue.component('Searchbar', require('./components/Searchbar.vue').default);
Vue.component('me', require('../src/sections/me.vue').default);

Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(function() {

      if(!app){
        
        new Vue({
          router,
          store,
          firebase,
          firestore,
          render: h => h(App)
        }).$mount("#app");
      }
})


