import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
    authDomain: "free-netflix-7e3cf.firebaseapp.com",
    projectId: "free-netflix-7e3cf",
    storageBucket: "free-netflix-7e3cf.appspot.com",
    messagingSenderId: "497003095529",
    appId: "1:497003095529:web:af5508d5f075d9df101778",
    measurementId: "G-0PYGVPFX6S"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);