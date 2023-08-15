// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmCUjm9fADqJ44kPHSxDAmgzwhKvO3BK4",
  authDomain: "food-respi-7a7d7.firebaseapp.com",
  projectId: "food-respi-7a7d7",
  storageBucket: "food-respi-7a7d7.appspot.com",
  messagingSenderId: "1044154784799",
  appId: "1:1044154784799:web:29778f24c096782b73092a",
  measurementId: "G-4L694492MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export default auth;