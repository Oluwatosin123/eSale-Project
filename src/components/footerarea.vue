<template>
  <div class=" cc container-fluid bg-dark text-white">
    <!-- <div class=" footer  bg-dark text-white">
          <div class="">

            </div>
            <div class="">

            </div>
            <div class="">

            </div>
              </div>
               -->
            <div class="text-white pt-5">
                <h6>Design & Developed With  <i class="fa fa-heart fa-2 text-danger" aria-hidden="true"></i> By Ajose Tosin &COPY; 2020, All Right Reserved</h6>
            </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  display: flex;
  height: 5em;
}

.cc{
  height: 7em;
}
</style>
