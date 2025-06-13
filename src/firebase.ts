import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChee4fue7cl-mNcx9O5LoHBeH01bUQ5q8",
  authDomain: "pranavi-7aa4f.firebaseapp.com",
  projectId: "pranavi-7aa4f",
  storageBucket: "pranavi-7aa4f.firebasestorage.app",
  messagingSenderId: "589187276851",
  appId: "1:589187276851:web:a0ea416a01aad876c6c346",
  measurementId: "G-2HRCS9Y973"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyChee4fue7cl-mNcx9O5LoHBeH01bUQ5q8",
  authDomain: "pranavi-7aa4f.firebaseapp.com",
  projectId: "pranavi-7aa4f",
  storageBucket: "pranavi-7aa4f.firebasestorage.app",
  messagingSenderId: "589187276851",
  appId: "1:589187276851:web:a0ea416a01aad876c6c346",
  measurementId: "G-2HRCS9Y973"
};*/

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/