<template>
  <div class="women">
    <Navbar></Navbar>
    <div class="container my-5">
        <div class="container-fluid">
          <h2 class="font-weight-bold text-dark">
            MEN'S EPIC-DESIGNS 2020 CAMPAIGN
          </h2>
        </div>
        <div class="container card-deck mt-4">
          <div class="card shadow-md">
            <img
              src="../assets/images/darrel1.jpeg"
              class="card-img-top"
              alt="Men Shirt"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Valentino Amigo</h6>
              <!-- <p class="card-text text-left">Lorem ipsum dolor</p> -->
              <router-link to="/cart" class="btn btn-primary mr-0">Add to Cart</router-link>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/darrel21.jpeg"
              class="card-img-top"
              alt="Men Shirt"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Valentino Amigo</h6>
              <!-- <p class="card-text">Lorem ipsum dolor.</p> -->
              <router-link to="/cart" class="btn btn-primary mr-0">Add to Cart</router-link>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/main 2.jpeg"
              class="card-img-top"
              alt="Men shirt"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Guchi Dinner Gown</h6>
              <!-- <p class="card-text">Lorem ipsum dolor.</p> -->
              <router-link to="/cart" class="btn btn-primary mr-0">Add to Cart</router-link>
            </div>
          </div>
        </div>

        <div class="container-fluid card-deck mt-4">
          <div class="container">
            <!-- <h2 class="text-align-left font-weight-bold text-dark mt-4 mb-3">
              WOMEN'S EPIC-DESIGNS 2020 CAMPAIGN
            </h2> -->
          </div>
          <div class="card shadow-md">
            <img
              src="../assets/images/main1.jpeg"
              class="card-img-top"
              alt="Red shoe"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Guchi Dinner Gown</h6>
              <!-- <p class="card-text">Lorem ipsum dolor </p> -->
              <router-link to="/cart" class="btn btn-primary mr-0">Add to Cart</router-link>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/am2.jpeg"
              class="card-img-top"
              alt="Blue shoe"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Luis Vuiton Sweather</h6>
              <!-- <p class="card-text">Lorem ipsum dolor,</p> -->
              <router-link to="/cart" class="btn btn-primary mr-0">Add to Cart</router-link>
            </div>
          </div>
          <div class="card shadow-md">
            <img
              src="../assets/images/amy.jpeg"
              class="card-img-top"
              alt="Brown shoe"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Luis Vuiton Sweather</h6>
              <!-- <p class="card-text">Lorem ipsum dolor sit amet.</p> -->
              <router-link to="/cart" class="btn btn-primary mr-0">Add to Cart</router-link>
            </div>
          </div>
        </div>
      </div>
      <footerarea></footerarea>
    </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Women",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>