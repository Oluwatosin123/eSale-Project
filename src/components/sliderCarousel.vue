<template>
  <div class="slidercarousel">
    <div
      id="myCarousel"
      class="carousel slide mt-5 sty"
      data-ride="carousel"
      style="margin-top: 1200rem"
    >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/slide-21-full.jpg" alt="slide-21-full.jpg">
          <div class="container">
            <h1>Every Style is Classic</h1>
            <p>
              Fashion is what you’re offered four times a year by designers. And
              style is what you choose.
            </p>
            <a href="#" class="btn btn-lg btn-primary">Shop Now</a>
          </div>
        </div>

        <div class="carousel-item">
           <img src="../assets/images/collage2.jpg" alt="slide-21-full.jpg" class="d-block w-100">
          <div class="container">
            <h1>Every Style is Classic</h1>
            <p>
              Fashion is what you’re offered four times a year by designers. And
              style is what you choose.
            </p>
            <a href="#" class="btn btn-lg btn-primary">Shop Now</a>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/images/slide-22-full-New.jpg" alt="slide-21-full.jpg">
          <div class="container">
            <h1>Every Style is Classic</h1>
            <p>
              Fashion is what you’re offered four times a year by designers. And
              style is what you choose.
            </p>
            <a href="#" class="btn btn-lg btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <a
        href="#myCarousel"
        class="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span class="sr-only">Previous</span>
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        href="#myCarousel"
        class="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span class="sr-only">Next</span>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "slidercarousel",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel-item {
  height: 30rem;
  background: #777;
  color: #fff;
  position: relative;
  /* background-image: url('../assets/images/slide-21-full.jpg'); */
  background-position: center;
  background-size: cover;
}

.container {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
}
</style>
