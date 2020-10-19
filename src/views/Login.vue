<template>
 <div class="login">
   <div class="container-fluid form-img">
     <div class="row">
       <div class="col-md-4 col-sm-0">
        <!-- Am here with you -->
       </div>

       <div class="col-md-4">
 <div class="form form-area1">
        <form @submit.prevent="login" class="form-area2 text-left">
        <div class="text-box">
                        <h1 class="heading-primary h4 d-block  text-center mb-2">
                                <span class="heading-primary-main  ">Welcome Back</span><i class="fa fa-heart ml-2 text-danger"></i>
                                <span class="heading-primary-sub h6 d-block"><small>Login to your Account</small></span>
                            </h1>
                    </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control text-left" id="email" aria-describedby="emailHelp" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="email">Password</label>
            <input type="password" v-model="password" class="form-control" id="Password" required>
        </div>  
            <div class="">
                <label class="form-check-label" for="Forget Password">
                  <p>
                      <router-link to="/Forget Password?">Forget Password?</router-link>
                  </p>
                </label>
            </div>

            <p class="text-danger text-center" v-if="feedback">{{feedback}}</p>
            
        <button type="submit" class="w-100 mt-3 btn btn-primary">Login</button>

         <p class="text-center py-2">Don't have an account? <router-link to="signup">Sign Up</router-link></p>
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
 import firebase from 'firebase'
export default {
  name: "Login",
  components:{
      
  },
  props: {
    msg: String
  },

   data(){
    return{
      email:null,
      password:null,
      feedback:null
    }
  },

  // Methods to log user in and validate user
  methods:{
    login(){
      if(this.email && this.password) {
       firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred => {
         console.log(cred.user)
        //  this.$router.push({name: 'Admin'})
         this.$router.replace('Admin')
       }).catch(err => {
         this.feedback = err.message
       })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
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
height: 25rem;
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


// @submit.prevent
// @click