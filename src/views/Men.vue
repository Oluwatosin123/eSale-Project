<template>
  <div class="men">
    <div class="container-fluid">
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
              src="../assets/images/4.jpeg"
              class="card-img-top"
              alt="Men Shirt"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Men Shirt</h6>
              <!-- <p class="card-text text-left">Lorem ipsum dolor</p> -->
              <a href="#" class="btn btn-primary mr-0">Add to Cart</a>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/3.jpeg"
              class="card-img-top"
              alt="Men Shirt"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Men Shirt</h6>
              <!-- <p class="card-text">Lorem ipsum dolor.</p> -->
              <a href="#" class="btn btn-primary mr-0">Add to Cart</a>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/1.jpeg"
              class="card-img-top"
              alt="Men shirt"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Men Shirt</h6>
              <!-- <p class="card-text">Lorem ipsum dolor.</p> -->
              <a href="#" class="btn btn-primary mr-0">Add to Cart</a>
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
              src="../assets/images/Mens-Standard- (1).jpg"
              class="card-img-top"
              alt="Red shoe"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Grey Browny</h6>
              <!-- <p class="card-text">Lorem ipsum dolor </p> -->
              <a href="#" class="btn btn-primary mr-0">Add to Cart</a>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/Mens-Standard- (2).jpg"
              class="card-img-top"
              alt="Blue shoe"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Grey Browny</h6>
              <!-- <p class="card-text">Lorem ipsum dolor,</p> -->
              <a href="#" class="btn btn-primary mr-0">Add to Cart</a>
            </div>
          </div>

          <div class="card shadow-md">
            <img
              src="../assets/images/Mens-Standard- (3).jpg"
              class="card-img-top"
              alt="Brown shoe"
            />
            <div class="card-body">
              <h6 class="card-title font-weight-bold">Grey Browny</h6>
              <!-- <p class="card-text">Lorem ipsum dolor sit amet.</p> -->
              <a href="#" class="btn btn-primary mr-0">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <footerarea></footerarea>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import footerarea from "@/components/footerarea.vue";

export default {
  name: "Men",
  components: {
    Navbar,
    footerarea,
  },
};
</script>

<style scoped>
 .card{
      border-radius: 4px; 
      background: #fff;
      box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    padding: 15px 30px;
    cursor: pointer;
    margin-top: 5px;
  }
  
  .card:hover{
       transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }
</style>