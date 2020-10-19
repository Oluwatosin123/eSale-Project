<template>
 <div class="signup">
   <div class="container-fluid form-img">
     <div class="row">
       <div class="col-md-4 col-sm-0">
        <!-- Am here with you -->
       </div>

       <div class="col-md-4 col-sm-6">
 <div class="form form-area1 ml-sm-5">
        <form @submit.prevent="signup" class="form-area2 text-left">
        <div class="text-box">
                        <h1 class="heading-primary h5 d-block  text-center mb-2">
                                <span class="heading-primary-main  ">Get started with eSale</span>
                                <span class="heading-primary-sub h6 d-block"><small>Signup & Start selling</small></span>
                            </h1>
                    </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control text-left" id="email" aria-describedby="emailHelp" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control text-left" id="password" aria-describedby="emailHelp" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="confirmpassword">Confirm Password</label>
            <input type="password" v-model="confirmpassword" class="form-control" id="confirmpassword" required>
        </div>
         <p class="text-danger text-center" v-if="feedback">{{feedback}}</p>

        <button type="submit" class="w-100 mt-3 btn btn-primary">SignUp</button>

         <p class="text-center py-2">Already signed up? <router-link :to="{name: 'login'}">Login</router-link></p>
        </form>
  </div>
       </div>


       <div class="col-md-4 col-sm-0">
<!-- <h3>am here</h3> -->
       </div>
     </div>
   </div>
 </div>
</template>

<script>
// import Form from '@/components/Form'
import slugify from 'slugify'
import db from '@/firebase'
import firebase from 'firebase'
 export default {
  name: "Signup",
  components:{
      
  },
  props: {
    msg: String
  },

  data(){
    return{
      email:null,
      password:null,
      confirmpassword:null,
      feedback:null,
      slug: null
    }
  },
  // Method to signup user and validate their inputs
 methods:{
    signup(){
          if(this.confirmpassword && this.password && this.email){
            this.slug = slugify(this.confirmpassword, {
            replacement: "-",
            remove:/[$*_+~.()'"!\-:@]/g,
    })

    let ref = db.collection('users').doc(this.slug)
    ref.get().then(doc => {
    if (doc.exists) {
      this.feedback = 'This password exists'
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.replace('admin');
      })
      .catch(err => {
        // console.log(err)
        this.feedback = err.message
      })
      this.feedback = 'Registeration Successfull'
    }
    })
    console.log(this.slug);
        } else {
    this.feedback = "Input All Fields Correctly"
        }
  }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    padding: 30px;
}

.form-img{
  height:100vh;
    background-image: linear-gradient(to right bottom,
     rgba(0, 0, 0, 0.624),
      rgba(0, 0, 0, 0.624)), 
      url(../assets/images/collage.jpg);
    background-size: cover;
    background-position: top;
    position: relative;
}

.form-area1{
width: 80%;
height: 30rem;
position: absolute;
margin: 5rem auto;
padding: 2rem;
background-color: #fff;
border-radius: 1rem;
}

.form-area2 {
   margin-top: -0.5rem;
}

.form-group label{
  text-align: left;
}

.heading-primary-main{
 padding-bottom:2rem;
}
.heading-primary-sub{
  padding-bottom: 1rem;
}

label{
    font-size: 12px;
}


input{
    background-color: #F2F3F5;
  border-radius: 0 0.5rem 0 0;
}
</style>
