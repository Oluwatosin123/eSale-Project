<template>
  <div class="home">
    <!-- <Navbar></Navbar> -->
    <sliderCarousel></sliderCarousel>
    <!-- <Hero></Hero> -->
    <!-- <card></card> -->
    <button @click="goBack()">Previous page</button>
    <footerarea></footerarea>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
// import Hero from "@/components/Hero.vue";
// import card from "@/components/card.vue";
import footerarea from "@/components/footerarea.vue";
import sliderCarousel from "@/components/sliderCarousel.vue";

export default {
  name: "me",
  components: {
    // Navbar,
    // Hero,
    // card,
    footerarea,
    sliderCarousel,
  },

  methods: {
    goBack() {
      this.$store.commit("setPageTransition", "back");
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>
