// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdOkRcvhGUNZfchYz6ma-LeH1PhJfgSb4",
  authDomain: "propertyfinder-677da.firebaseapp.com",
  projectId: "propertyfinder-677da",
  storageBucket: "propertyfinder-677da.appspot.com",
  messagingSenderId: "815915906254",
  appId: "1:815915906254:web:99e176970cd0049ad0cc9f",
  measurementId: "G-ZG83MME5YY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);