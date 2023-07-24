import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// import { getDatabase, set, ref } from "https://logine-with-firebase-database-default-rtdb.asia-southeast1.firebasedatabase.js";

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
// const database = getDatabase(app);




let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let password = document.getElementById("password")


window.signup = function (e){
    e.preventDefault();
    let obj = {
        firstName : firstName.value,    
        lastName : lastName.value,
            email : email.value,
        password : password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password, obj.firstName, obj.lastName)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('signed up',user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('User is not found', errorMessage)
    // ..
  });
}










