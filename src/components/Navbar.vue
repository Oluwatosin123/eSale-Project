<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <router-link
        :to="{ name: 'Home' }"
        class="navbar-brand text-white font-weight-bolder"
        href="#"
        >eSale</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="active nav-link text-white"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/men" class="nav-link text-white">MEN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/toparea" class="nav-link text-white">TopArea</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/toparea1" class="nav-link text-white">TopArea1</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/women" class="nav-link text-white"
              >WOMEN</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/me" class="nav-link text-white"
              >ME</router-link
            >
          </li>
        </ul>
      </div>
      <div class="search col-8">
        <Searchbar></Searchbar>
      </div>

      <div class="">
        <router-link :to="{ name: 'login' }" class="btn btn-outline-light mr-2">
          <i class="fa fa-user" aria-hidden="true"></i>Login</router-link
        >
        <router-link
          :to="{ name: 'signup' }"
          class="btn btn-outline-light float-lg-right"
        >
          <i class="fa fa-sign-in" aria-hidden="true"></i>Sign Up</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import Searchbar from "@/components/Searchbar.vue";
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: {
    Searchbar,
  },

  methods: {
  fadeOnScroll() {
     window.addEventListener('scroll', function () {
    if (window.scrollY > 15) {
      alert('hello')
        document.querySelector('.navbar').style.opacity = 0.9;
    } else {
        document.querySelector('.navbar').style.opacity = 1;
    }
});
  }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

document.addEventListener('scroll',()=>{
if (window.scrollY > 20 ) {
        document.querySelector('.navbar').style.opacity = 0.2;
    } else {
        document.querySelector('.navbar').style.opacity = 1;
    }
});

  fadeOnScroll() {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
          document.querySelector("#navbar").style.opacity = 0.9;
        } else {
          document.querySelector("#navbar").style.opacity = 1;
        }
      });
    },