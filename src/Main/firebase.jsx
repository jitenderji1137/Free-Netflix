// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
    authDomain: "free-netflix-7e3cf.firebaseapp.com",
    projectId: "free-netflix-7e3cf"
    // storageBucket: "free-netflix-7e3cf.appspot.com",
    // messagingSenderId: "497003095529",
    // appId: "1:497003095529:web:af5508d5f075d9df101778",
    // measurementId: "G-0PYGVPFX6S"
};
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase ;