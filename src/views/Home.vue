<template>
  <div class="home">
  <Navbar></Navbar>
  <sliderCarousel></sliderCarousel>
     <!-- <Hero></Hero> -->
    <card></card>
    <footerarea></footerarea>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
// import Hero from "@/components/Hero.vue";
import card from "@/components/card.vue";
import footerarea from "@/components/footerarea.vue";
import sliderCarousel from "@/components/sliderCarousel.vue";


export default {
  name: "Home",
  components: {
Navbar,
// Hero,
card,
footerarea,
sliderCarousel

  }
};
</script>
