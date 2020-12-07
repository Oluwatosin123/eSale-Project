<template>
  <div id="app">
    <!-- transition 1 -->
    <!-- <transition name="fade" mode="out-in"> -->
      <!-- transition 2 is active -->
    <transition
      :name="$store.state.pageTransition.name"
      :mode="$store.state.pageTransition.mode"
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <router-view class="transition" />
    </transition>
    <!-- </transition> -->
  </div>
</template>


<script>
import Store from "./store/index";

export default {
  name: "App",
  components: {},
  methods: {
    afterEnter: () => {
      window.scrollTo(0, 0);
    },
    afterLeave: () => {
      Store.commit("setPageTransition", "default");
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// .fade-enter-active {
//   transition: all 10s cubic-bezier(.67,.01,.86,.65);

// }

// .fade-leave-active {
//   transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .fade-enter-from,
// .fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }

// 2nd Transition area

// CSS for Transition area
$duration: 0.5s;
.transition {
  overflow: hidden;
}

.router-view,
.router-view-back{
  &-enter-active,
  &-leave-active{
    position: fixed;
    width:100%;
    background: #fff;
    min-height: 100vh;
    top: 0;
  }
}

// router view
.router-view-enter-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(100%);
}

.router-view-enter-to {
  z-index: 2;
  transform: translateX(0%);
}

.router-view-leave-active{
  z-index: 1;
}

.router-view-leave-to {
  z-index: -1;
}

// router view back
.router-view-back-leave-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(0%);
}

.router-view-back-leave-to {
  z-index: 2;
  transform: translateX(100%);
}
</style>



