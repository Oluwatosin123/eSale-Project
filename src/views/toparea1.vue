<template>
  <div class="container col-lg-6 col-md-8 col-sm-8">
    <!-- Start here -->
    <div class="container col-lg-6 col-md-8 col-sm-8 d-none">
      <div class="d-flex flex-row justify-content-between mt-5 px-sm-3 mb-n5">
        <p class="ml-lg-3 ml-md-n5 ml-sm-n5 itemStatus">Status</p>
        <p class="ml-lg-n5 ml-md-n5 ml-sm-n5 itemEvent">Event</p>
        <p class="mr-lg-5 mr-md-n5 mr-sm-n5 itemDate">Date</p>
      </div>

      <div class="d-flex flex-row justify-content-between mt-5 px-sm-3">
        <p class="draftArea">Draft</p>
        <h5 class="grace mt-lg-3 mb-sm-n5">
          Grace and Power
          <span>
            <i class="fas fa-info-circle"></i>
          </span>
        </h5>
        <p class="itemdate2 mt-lg-3">22/12/2020</p>
      </div>

      <!-- card area -->
      <div class="card shadow mb-5 bg-white rounded mt-sm-2">
        <h4 class="card-header text-wrap cardHead">
          <i class="fas fa-info-circle"></i>
          This is a DRAFT event. You can take further actions once you approve
          it.
          <span class="learn ml-2">
            <a class="link" href="#"> Learn more</a>
            <i class="fas fa-external-link-alt external ml-2"></i>
          </span>
        </h4>

        <!-- Card Body -->
        <div class="card-body col-sm-12">
          <h5 class="card-title text-left">
            <i class="fas fa-file mr-2 ml-lg-3 file"></i>Create
          </h5>
          <p class="card-text just text-left">
            <span class="create ml-4">Created:</span> just a moment ago
          </p>
        </div>

        <div class="d-flex mt-lg-n5 mt-sm-3 btnarea ml-lg-5 ml-sm-2">
          <a
            v-on:click="hideCard"
            class="btn btn1 btn-primary mr-2 mb-4 ml-lg-5"
            >Approve draft</a
          >
          <a href="#" class="btn btn2 mr-2 mb-4">Edit draft</a>
        </div>
      </div>

      <!-- Horizontal line area 1 -->
      <div class="line">
        <span class="hline text-left"></span>
      </div>

      <!--bottom card area -->
      <div class="card mb-5 bg-white rounded mt-lg-n4 mt-sm-2">
        <!-- Card Body -->
        <div class="card-body col-sm-12">
          <h5 class="card-title text-left">
            <i class="fas fa-file mr-2 ml-lg-3 file"></i>Send
          </h5>
          <p class="card-text text-left">
            <span class="created ml-lg-4">Last sent:</span> Never sent
          </p>
        </div>
      </div>
      <!-- end here -->
    </div>



    <!-- second area Starts here -->
    <div class="d-flex flex-row justify-content-between mt-5 px-sm-3 mb-n5">
      <p class="ml-lg-3 ml-md-n5 ml-sm-n5 itemStatus">Status</p>
      <p class="ml-lg-n5 ml-md-n5 ml-sm-n5 itemEvent">Event</p>
      <p class="mr-lg-5 mr-md-n5 mr-sm-n5 itemDate">Date</p>
    </div>

    <div class="d-flex flex-row justify-content-between mt-5 px-sm-3">
      <p class="draftArea">Draft</p>
      <h5 class="grace mt-lg-3 mb-sm-n5">
        Grace and Power
        <span>
          <i class="fas fa-info-circle"></i>
        </span>
      </h5>
      <p class="itemdate2 mt-lg-3">22/12/2020</p>
    </div>

    <!-- card area -->
    <div class="card shadow mb-5 bg-white rounded mt-sm-2" style="height: -10rem">
      <!-- Card Body -->
      <div class="card-body col-sm-12 ">
        <h5 class="card-title text-left">
          <i class="fas fa-file mr-2 ml-lg-3 file"></i>Create
        </h5>
        <p class="card-text just text-left">
          <span class="create ml-4">Created:</span> just a moment ago
        </p>
      </div>

      <div class="d-flex mt-lg-n5 mt-sm-3 btnarea ml-lg-5 ml-sm-2" style="position: relative;">
        <!-- <a v-on:click="hideCard" class="btn btn1 btn-primary mr-2 mb-4 ml-lg-5"
          >Approve draft</a
        > -->
        <a
          href="#"
          class="btn btn2 mb-4" style="top: -8.5rem; position:absolute; right: 6rem"
          >Edit draft</a
        >
      </div>
    </div>

    <!-- Horizontal line area 1 -->
    <div class="line">
      <span class="hline text-left" style="position: absolute; margin-top:20rem"></span>
    </div>

    <!--bottom card area -->
    <div class="card mb-5 bg-white rounded mt-lg-n4 mt-sm-2">
      <!-- Card Body -->
      <div class="card-body col-sm-12">
        <h5 class="card-title text-left">
          <i class="fas fa-file mr-2 ml-lg-3 file"></i>Send
        </h5>
        <p class="card-text text-left">
          <span class="created ml-lg-4">Last sent:</span> Never sent
        </p>
      </div>
    </div>
    <!-- ends here -->
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "toparea1",
  components: {},

  data() {
    return {
      removeThisContent: true,
      addContent: false,
      hide: true,
      hideMe: false,
    };
  },
  methods: {
    hideCard() {
      this.removeThisContent = false;
      this.addContent = true;
    },

    hideThisLink() {
      this.hide = false;
      this.hideMe = true;
    },
  },
};
</script>

<style scoped>
/* css for the , status, event and date area */
/* .itemStatus {
} */

.itemEvent {
  margin-left: -14rem !important;
}

.itemDate {
  padding-left: 3rem;
}

.draftArea {
  border: 1px solid #585858;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  width: 4.5rem;
  padding: 1rem;
}

.grace {
  margin-left: -11rem;
  color: #136acd;
  font-size: 17px;
  font-weight: bold;
}

/* card header area */
.cardHead {
  font-size: 14px;
  font-weight: bold;
  background: #f9f8db;
}

/* create area */
div
  > div.card.shadow.mb-5.bg-white.rounded.mt-sm-2
  > div.card-body.col-sm-12
  > p {
  margin-left: 1rem;
}

/* btnArea */

.cardBody {
  position: relative;
}
.btnarea {
  position: absolute;
  width: 20rem;
  margin-top: 5rem !important;
  margin-left: 20rem !important;
}

.btn {
  border-radius: 2rem;
}

.btn1 {
}

.btn2 {
  background: none;
  color: #4d6676;
  border: 1px solid #4d6676;
}

.hline {
  border: 2px solid #b2c2cd;
}

.line {
  position: absolute;
  top: 19rem;
  left: 3.5rem;
}

/* Media Queries */
/* Small phones: from 0 to 480px */

@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
  /* margin-right: 2.5rem !important; */
}

@media only screen and (max-width: 414px) {
  .itemDate {
    /* margin-left: -1.5rem; */
  }

  .itemEvent {
    margin-left: -4rem !important;
  }

  .draftArea {
    border: 1px solid #585858;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    width: 4rem;
    padding: 0.5rem;
  }

  .grace {
    margin-left: -0.5rem;
    margin-top: 0.5rem;
    color: #136acd;
    font-size: 17px;
    font-weight: bold;
  }

  .itemdate2 {
    margin-top: 0.45rem;
  }

  /* create area */
  div
    > div.card.shadow.mb-5.bg-white.rounded.mt-sm-2
    > div.card-body.col-sm-12
    > p {
    margin-left: 0.1rem;
  }

  /* btn area */
  div
    > div.card.shadow.mb-5.bg-white.rounded.mt-sm-2
    > div.card-body.col-sm-12 {
    position: relative;
    height: 10rem !important;
  }

  .btnarea {
    position: absolute;
    width: 20rem;
    margin-top: 11rem !important;
    margin-left: 3rem !important;
  }

  div > div.line > span {
    position: absolute;
    top: 20rem !important;
    left: 3.5rem;
  }

  /* second card area */
}
</style>