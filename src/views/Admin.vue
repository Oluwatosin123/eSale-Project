<template>
  <div class="admin">

<div class="page-wrapper default-theme sidebar-bg bg1 toggled">
    <a href="#" id="show-sidebar"  @click="closeMenu" class="btn btn-sm btn-dark">
        <i class="fa fa-bars"></i>
    </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">eSale Shop</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fa fa-times text-white"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img src="../assets/images/avatar.svg"  class="img-responsive img-rounded" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Tosin
                            <strong>Ajose</strong>
                        </span>
                        <span class="user-role">Administrator</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span class="text-left">Menu</span>
                        </li>
                        <li>
                            <router-link to="/Admin/Overview">
                                <i class="fa fa-chart-line"></i>
                                <span class="menu-text">Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Admin/Products">
                                <i class="fa fa-globe"></i>
                                <span class="menu-text">Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Admin/Order">
                                <i class="fa fa-calendar"></i>
                                <span class="menu-text">Order</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" @click="logout()"><i class="fa fa-power-off"></i>
                            <span class="menu-text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
        </nav>
        <!-- page-content  -->
                <main>
                    <router-view />
                </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import firebase from 'firebase'

/* global $ */

export default {
  name: "Admin",
  components: {
  },
  methods:{
      //method to toggle dashboard 
   closeMenu(){
     $(".page-wrapper").toggleClass("toggled")
   },
   
//    method to log user out of the dashboard
   logout(){
      firebase.auth().signOut()
      .then( () => {
          this.$router.replace('/login');
      })
      .catch((err) => {
          console.log(err);
      })
   }

  }
};
</script>
