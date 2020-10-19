
  // Your web app's Firebase configuration
import firebase from 'firebase';
  // import firestore from 'firebase/firestore'
  require("firebase/firestore");
  
  var firebaseConfig = {
    apiKey: "AIzaSyDWrc7c_b_twh7N5DUEVITyYZyep8XmcjQ",
    authDomain: "esales-website-9046e.firebaseapp.com",
    databaseURL: "https://esales-website-9046e.firebaseio.com",
    projectId: "esales-website-9046e",
    storageBucket: "esales-website-9046e.appspot.com",
    messagingSenderId: "94494042770",
    appId: "1:94494042770:web:72493264fd8b5bc50a944b",
    measurementId: "G-C5G05JGQC0"
  };

  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export default firebaseApp.firestore()

// firebaseApp.firestore().setttings({timestampInSnapshot: true})
