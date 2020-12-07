<template>
  <div class="toparea container col-lg-8 col-md-12 col-sm-12">
 
    <div class="col-lg-12 mt-lg-5">
      <!-- card header -->
      <div v-show="removeThisContent" id="removeClass">
        <div class="my-lg-3">
          <div class="row row1 col-sm-12 text-left ml-lg-4">
            <span class="col ml-n4 ml-sm-"> Status </span>
            <span class="col eve"> Event </span>
            <span class="col dat"> Date </span>
          </div>
          <div class="row row2 col-sm-12 text-left">
            <p v-show="removeThisContent" class="textdraft pl-lg-3">Draft</p>
            <h5>
              <span class="col ml-5 mt-lg-n5">Grace and Power</span> 
            </h5>
            <i class="fas fa-info-circle"></i>
            <span class="col mt-3"> 22/11/2020 </span>
          </div>
        </div>
        <div class="card shadow mb-5 bg-white rounded mt-sm-2">
          <h4 class="card-header text-wrap">
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
              <span class="create">Created:</span> just a moment ago
            </p>

            <div class="mt-n5 btnarea">
              <a href="#" class="btn btn1 mr-2 mb-4">Edit draft</a>
              <a v-on:click="hideCard" class="btn btn2 btn-primary mr-2 mb-4"
                >Approve draft</a
              >
            </div>
          </div>
        </div>
        <!-- Horizontal line area 1 -->
        <div class="line">
          <span class="hline text-left"></span>
        </div>
        <!-- bottom card 1 -->
        <div class="card cardof col-sm-12 col-lg-12 h-50">
          <div class="list-group list-group-flush">
            <div class="list-group-item">
              <h5 class="card-title text-left py-2">
                <span class="circle"
                  ><i class="fas fa-location-arrow location mr-2"></i></span
                >Send
              </h5>
              <p class="card-text justi text-left mt-n3 mb-2 pb-2">
                <span class="created">Last sent:</span> Never sent
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ------------------------------------------------ -->
      <!-- second block Area -->
      <!-- ------------------------------------------------ -->
      <!-- second Card area -->
      <div v-show="addContent" id="addClass">
        <div class="my-lg-3">
          <div class="row row1 col-sm-12 text-left ml-lg-4">
            <span class="col ml-n4 ml-sm-"> Status </span>
            <span class="col eve"> Event </span>
            <span class="col dat"> Date </span>
          </div>
          <div class="row row2 col-sm-12 text-left">
            <p v-show="addContent" class="textunsent pl-lg-3">Unsent</p>
            <h5 class="col ml-5 mt-3">
              <span>Grace and Power</span> <i class="fas fa-info-circle"></i>
            </h5>
            <span class="col mt-3"> 22/11/2020 </span>
          </div>
        </div>

        <div class="card shadow mb-5 bg-white rounded">
          <!-- <h4 class="card-header text-wrap">
            <i class="fas fa-info-circle"></i>
            This is a DRAFT event. You can take further actions once you approve
            it.
            <span class="learn ml-2">
              <a class="link" href="#"> Learn more</a>
              <i class="fas fa-external-link-alt external ml-2"></i>
            </span>
          </h4> -->

          <!-- Card Body -->
          <div class="card-body col-sm-12">
            <h5 class="card-title text-left">
              <i class="fas fa-file mr-2 ml-lg-3 file"></i>Create
            </h5>
            <p class="card-text just text-left">
              <span class="create">Created:</span> just a moment ago
            </p>

            <div class="mt-n5 btnarea">
              <a href="#" class="btn btn1 mr-5 mb-4">Edit draft</a>
              <!-- <a href="#" class="btn btn2 btn-primary mr-2 mb-4"
                >Approve draft</a> -->
            </div>
          </div>
        </div>
        <!-- Horizontal line area 2-->
        <div class="line">
          <span class="hline text-left"></span>
        </div>
        <!-- bootom card 2 -->
        <div class="row card cardof col-sm-12 col-lg-12 h-50 ml-lg-1">
          <div class="col list-group list-group-flush">
            <div class="list-group-item">
              <h5 class="card-title text-left py-2">
                <i class="fas fa-location-arrow location mr-2"></i>
                Send
              </h5>
              <p class="card-text just2 text-left mt-n3 mb-2 pb-2">
                <span class="created">Last sent:</span> Never sent
              </p>

              <div class="col mt-n5 mb-2 btnarea btnarea2">
                <a href="#" class="btn mt-n4 btn1 mr-2 mb-4">Get share link</a>
                <a v-show="hideMe" href="#" class="btn mt-n4 btn1 mr-2 mb-4">
                  Resend Report</a
                >
                <a
                  v-show="hide"
                  href="#"
                  class="btn mt-n4 btn2 btn-primary mr-2 mb-4"
                  >Send Report</a
                >
                <div v-show="hide" class="text-right mt-2">
                  or <a v-on:click="hideThisLink" href="#">mark as sent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "toparea",
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
/* Top span Area */

div.row.card.cardof.col-sm-12.col-lg-12.h-50.ml-lg-1 > div > div > div > div {
  padding-top: 0.5rem;
  display: inline-block;
  position: absolute;
  right: 10rem;
}

div > div > div > div:nth-child(2) > h5 > span {
  color: #136acd;
}

div > div > div > div:nth-child(2) > h5 > i {
  color: #136acd;
}

.textdraft {
  border: 1px solid #585858;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  width: 4rem;
  margin: 0.5rem 0 0 1rem;
}
.textunsent {
  border: 1px solid #585858;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  width: 4.5rem;
  margin: 0.5rem 0 0 1rem;
}

div > div > div > div:nth-child(2) > p {
  padding: 0.5rem;
}

.eve {
  margin-left: -11rem;
  display: inline-block;
}

div > div > div > div > span.dat {
  text-align: right;
  margin-right: 9rem;
  display: inline-block;
}

div > div > div > div:nth-child(2) > span {
  text-align: right;
  margin-right: 4rem;
}

h5 {
  color: #8296ae;
  font-size: 20px;
}

h4 {
  font-size: 14px;
  color: #1d262d;
}

/* card header */
.card-header {
  background: #f9f8db;
}

.btn {
  border-radius: 2rem;
  float: right;
}

.file {
  font-size: 12px;
  color: #136acd;
  border: 1px solid #136acd;
  border-radius: 50%;
  padding: 0.55rem;
}

.location {
  font-size: 12px;
  color: #136acd;
  border: 1px solid #136acd;
  border-radius: 50%;
  padding: 0.5rem;
}

.learn {
  font-size: 16px;
  color: #136acd;
  font-weight: bold;
}

.external {
  color: #585858;
  font-size: 10px;
}

.create {
  color: #1d262d;
  font-size: 18px;
  margin-left: 3.2rem;
}
.created {
  color: #1d262d;
  font-size: 18px;
  margin-left: 2.5rem;
}

.just {
  color: #8296ae;
  font-size: 16px;
}
.justi {
  color: #8296ae;
  font-size: 16px;
  opacity: 0.2;
}

.just2 {
  color: #8296ae;
  font-size: 16px;
}

.btn1 {
  background: none;
  color: #4d6676;
  border: 1px solid #4d6676;
}

div > div > div.card.cardof.col-sm-12.col-lg-12.h-50 > div > div {
  height: 6rem;
}

div > div > div.card.cardof.col-sm-12.col-lg-12.h-50 {
  margin-top: -1.7rem;
}

.hline {
  border: 2px solid #b2c2cd;
}

.line {
  position: absolute;
  top: 18rem;
  left: 4rem;
}

/* Media Queries */
/* Small phones: from 0 to 480px */
@media only screen and (max-width: 414px) {
  #app > div {
    padding: 0;
  }
  .body {
    font-size: 14px;
  }

  div.row {
    width: 20rem;
  }

  div.row.row1 {
    margin: 1.5rem auto;
  }
  div.row.row2 {
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
  }

  div > div > div.my-lg-3 > div:nth-child(2) {
    margin: 0;
    padding: 0;
  }

  .eve {
    margin-left: 0;
  }

  div > div > div > div > span.dat {
    text-align: right;
    margin-right: 5rem;
    display: inline-block;
  }

  div > div > div > div:nth-child(2) > h5 > span {
    color: #136acd;
    margin-left: -3rem;
    margin-right: 0.8rem;
    font-size: 14px;
  }

  div > div > div.my-lg-3 > div.row.row2.col-sm-12.text-left > h5 {
    margin-left: 2rem;
  }

  div > div > div > div:nth-child(2) > h5 > i {
    color: #136acd;
    font-size: 14px;
    margin-left: 1.4rem;
    display: inline-block;
  }

  .textdraft {
    border: 1px solid #585858;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    width: 3rem;
    margin: 0;
    width: 4rem;
    max-height: 2.5rem;
  }

  div > div > div > div.row.row2.col-sm-12.text-left > p {
    padding-left: 1rem;
  }

  div > div > div.my-lg-3 > div.row.row2.col-sm-12.text-left > span {
    margin: 0;
    font-size: 14px;
  }

  .create {
    color: #1d262d;
    font-size: 16px;
  }

  .just {
    color: #8296ae;
    font-size: 14px;
  }

  .learn a {
    font-size: 16px;
    color: #136acd;
    font-weight: bold;
    margin-top: 2rem;
  }
  a .link {
    font-size: 16px;
    margin-top: 2rem;
  }

  .btnarea {
    display: inline-block;
  }

  .btn1,
  .btn2 {
    margin: 0;
    padding: 0.5rem 0.5rem;
    margin-top: 3rem;
  }

  .line {
    position: absolute;
    top: 26.2rem;
    left: 4rem;
  }

  /* Card Area 2 */

  div.my-lg-3 > div.row.row2.col-sm-12.text-left > p {
    padding-bottom: -5rem;
  }
}

@media only screen and (max-width: 1024px) {
}

/* @media only screen and (max-width: 812px) {
  .line {
    position: absolute;
    top: 16.5rem;
    left: 3rem;
  }
} 

1024, 768, 414*/
</style>