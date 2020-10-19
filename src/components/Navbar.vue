<template>
  <div class="hello">
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <router-link :to="{name: 'Home'}" class="navbar-brand text-white font-weight-bolder" href="#">eSale</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ml-5">
      <li class="nav-item">
        <router-link to="/" class="active nav-link text-white">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link text-white">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/products" class="nav-link text-white">Products</router-link>
      </li>
    </ul>



    <div class="form-group col-6">	
          <form class="form-inline">         
            <div class="input-group input-group-merged w-100 mr-sm-2 mt-3 ml-5">
            <input class="form-control " type="search" placeholder="Search for products, brands and more" aria-label="Search mt-2 ">
            
            <div class="input-group-append">
              <span class="input-group-text">
                      <a type="submit">
                          <i class="fa fa-search" aria-hidden="true"></i>
                      </a>
              </span>
            </div>
            </div>
          </form>
    </div>




<div class="col-3 mr">
     <router-link :to="{name: 'login'}" class="btn btn-outline-light my-2 my-sm-0 mr-2"> <i class="fa fa-user" aria-hidden="true"></i>Login</router-link>
      <router-link :to="{name: 'signup'}" class="btn btn-outline-light my-2 my-sm-0 px-2"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign Up</router-link>
</div>
  </div> 
</nav>

<!-- Various Product Links -->
<nav class="navbar navbar-expand-lg navbar-light bg-dark font-weight-normal">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
<!-- Product Electronic -->
    <ul class="navbar-nav mr-auto mx-5">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Electronics
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Mobiles</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Telivision</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Appleware</a>
        </div>
      </li>
<!-- Product Fashion -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Fashion
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Men</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Woman</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Baby and Teens</a>
        </div>
      </li>

<!-- Product Furniture -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Funitures
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Kitchen Cabinets</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Dining Tables</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Beds</a>
        </div>
      </li>

<!-- Product Kitchen Wares -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        KitchenWares
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Blenders</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Cooker</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Non-Stick pans</a>
        </div>
      </li>

<!-- Product Computers -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Laptops
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Dell Products</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Hp Product</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Acer Products</a>
        </div>
      </li>

<!-- Product Books -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Books
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Programming</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Politics</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Science-Fiction</a>
        </div>
      </li>

<!-- Product Cars -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Electronic Cars
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Mustang</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">BMW</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Toyota</a>
        </div>
      </li>

      <!-- Product Car Spare Parts -->
      <li class="nav-item dropdown ml-5">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Spare Parts
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Edl4 Battery</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Sit Leather Covering</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Alloy Reems</a>
        </div>
      </li>
    </ul>

  </div>
</nav>


  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



</style>
