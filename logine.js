// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyC58mGLVipqJcK9OPkIs1ZYQ-YxM1TNUgk",
    authDomain: "logine-with-firebase-database.firebaseapp.com",
    projectId: "logine-with-firebase-database",
    storageBucket: "logine-with-firebase-database.appspot.com",
    messagingSenderId: "821513414331",
    appId: "1:821513414331:web:590c7de586d57a2ec4ab9e"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





let email = document.getElementById("email")
let password = document.getElementById("password")


window.login = function (event){
    event.preventDefault();
    let obj = {
        email : email.value,
        password : password.value,
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("login",user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login is not succed",errorMessage)
      });
}