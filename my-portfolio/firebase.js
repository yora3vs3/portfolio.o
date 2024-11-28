// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5i_C2sfuYA3t5w56TJ7aYSVyCMupKzuA",
  authDomain: "my-portfolio-9a95d.firebaseapp.com",
  projectId: "my-portfolio-9a95d",
  storageBucket: "my-portfolio-9a95d.firebasestorage.app",
  messagingSenderId: "729766386870",
  appId: "1:729766386870:web:582f21d4eb9760561cda17",
  measurementId: "G-H62KW00Z84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);