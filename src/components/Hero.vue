<template>
  <div class="hero">
     <div class="container h-100">
          <div
            class="row h-100 justify-content-center align-items-center">
            <div class="col-sm-6 col-md-6 col-lg-6 mt-5">
              <h1 class="hero-content">
                Online Market Place <br> For Everyone
              </h1>
              <p class="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum <br> dolor sit amet consectetur adipisicing elit.
              </p>
              <div class="hero-btn  mt-5 ">
                  <button class="btn btn-primary mr-4 w-25">
                      Explore
                  </button>
                  <button class="btn btn-outline-secondary w-auto">
                      Products
                  </button>
              </div>
            </div>

             <div
            class="col-sm-6 col-md-6 col-lg-6 col-sm-12 order-md-1 order-lg-2 order-sm-1"
          >
            <img
              class="img-fluid mw-md-150 mw-lg-130 mt-5 "
              src="../assets/images/shopping1.svg"
              alt="hero image"
            />
          </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
