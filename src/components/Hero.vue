<template>
  <div class="hero">
    <div class="container-fluid cont">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item .item active" data-interval="10000">
            <img
              src="../assets/images/collage2.jpg"
              class="d-block w-100"
              alt="slide1"
            />
          </div>

          <div class="carousel-item .item" data-interval="10000">
            <img
              src="../assets/images/Men1.jpg"
              class="d-block w-100"
              alt="slide2"
            />
          </div>

          <div class="carousel-item .item" data-interval="10000">
            <img
              src="../assets/images/womany2.png"
              class="d-block w-100"
              alt="slide3"
            />
          </div>
          <div>
            <a class="btn btn-primary btn-lg slide3 " href="#" role="button"
              >Learn more</a
            >
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Hero",

  components: {},

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel-item {
  height: 30rem;
  margin-top: 5.8rem;
}

.carousel-item .item img {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 30rem;
}

.slide3{
  position: absolute;
  z-index: 1;
  margin-top: 20rem;
}
</style>

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