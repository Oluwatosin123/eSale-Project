<template>
<div class="container my-5">
  <div class="container-fluid">
  <h2 class="font-weight-bold text-dark">MEN'S EPIC-DESIGNS 2020 CAMPAIGN</h2>
  </div>
 <div class=" container card-deck mt-4">
  <div class="card shadow-md">
    <img src="../assets/images/1.jpeg" class="card-img-top" alt="Men Shirt">
    <div class="card-body">
      <h6 class="card-title font-weight-bold">Men Shirt</h6>
      <!-- <p class="card-text text-left">Lorem ipsum dolor</p> -->
      <router-link to="/Men" class="btn btn-primary mr-0">View Product</router-link>
    </div>
  </div>
   
  <div class="card shadow-md">
    <img src="../assets/images/5.jpeg" class="card-img-top" alt="Men Shirt">
    <div class="card-body">
      <h6 class="card-title font-weight-bold">Men  Shirt</h6>
      <!-- <p class="card-text">Lorem ipsum dolor.</p> -->
      <router-link to="/Men" class="btn btn-primary mr-0">View Product</router-link>
    </div>
  </div>

  <div class="card shadow-md">
    <img src="../assets/images/9.jpeg" class="card-img-top" alt="Men shirt">
    <div class="card-body">
      <h6 class="card-title font-weight-bold">Men Shirt</h6>
      <!-- <p class="card-text">Lorem ipsum dolor.</p> -->
    <router-link to="/Men" class="btn btn-primary mr-0">View Product</router-link>
    </div>
  </div>
</div>

 <div class=" container-fluid card-deck mt-4">
    <div class="container">
  <h2 class=" text-align-left font-weight-bold text-dark mt-4 mb-3">WOMEN'S EPIC-DESIGNS 2020 CAMPAIGN</h2>
  </div>
  <div class="card shadow-md">
    <img src="../assets/images/s1.jpg" class="card-img-top" alt="Red shoe">
    <div class="card-body">
      <h6 class="card-title font-weight-bold">Red Heel</h6>
      <!-- <p class="card-text">Lorem ipsum dolor </p> -->
      <router-link to="/Women" class="btn btn-primary mr-0">View Product</router-link>
    </div>
  </div>
   
  <div class="card shadow-md">
    <img src="../assets/images/s2.jpg" class="card-img-top" alt="Blue shoe">
    <div class="card-body">
      <h6 class="card-title font-weight-bold">Blue Silk Heel</h6>
      <!-- <p class="card-text">Lorem ipsum dolor,</p> -->
      <router-link to="/Women" class="btn btn-primary mr-0">View Product</router-link>
    </div>
  </div>

  <div class="card shadow-md">
    <img src="../assets/images/s3.jpg" class="card-img-top" alt="Brown shoe">
    <div class="card-body">
      <h6 class="card-title font-weight-bold">Brown Silk Heel</h6>
      <!-- <p class="card-text">Lorem ipsum dolor sit amet.</p> -->
    <router-link to="/Women" class="btn btn-primary mr-0">View Product</router-link>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "cards",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
