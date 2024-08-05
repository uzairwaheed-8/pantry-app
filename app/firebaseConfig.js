// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZunMsIXcU-tOOiNvtmn1sRmGKx4oQ9Hw",
  authDomain: "pantry-app-f1744.firebaseapp.com",
  projectId: "pantry-app-f1744",
  storageBucket: "pantry-app-f1744.appspot.com",
  messagingSenderId: "1045909377815",
  appId: "1:1045909377815:web:16fb0250b816f21c64dd52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export { firestore };


