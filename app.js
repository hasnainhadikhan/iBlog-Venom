

import { auth, app } from "./firebase.mjs";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// let email = document.getElementById("email");
// let password = document.getElementById("pass");
// let createAcc = document.getElementById("btnc");
// let login = document.getElementById("btnl");

createAcc.addEventListener("click", function () {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
      console.log(user);
      console.log("create account");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("errorCode====>", errorCode);
      console.log("errorMessage====>", errorMessage);

      // ..
    });
});



login.addEventListener('click',function(){

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
console.log(user);

    console.log('user is login');
    // window.location.href = 'dashboard.html'
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log('errorCode===>', errorCode);
    console.log('errorMessage', errorMessage);
    
    
  });

});

let email = document.getElementById("email");
let password = document.getElementById("pass");
let createAcc = document.getElementById("btnc");
let login = document.getElementById("btnl");

createAcc.addEventListener("click", function () {
 createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      console.log("create account");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("errorCode====>", errorCode);
      console.log("errorMessage====>", errorMessage);

      // ..
    });
});