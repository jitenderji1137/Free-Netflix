// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
  authDomain: "free-netflix-7e3cf.firebaseapp.com",
  projectId: "free-netflix-7e3cf",
  storageBucket: "free-netflix-7e3cf.appspot.com",
  messagingSenderId: "497003095529",
  appId: "1:497003095529:web:af5508d5f075d9df101778",
  measurementId: "G-0PYGVPFX6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);