// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcPyVf6leq4tdUtJeGFgn38O8KYQ1MHfc",
  authDomain: "inboxify-app.firebaseapp.com",
  projectId: "inboxify-app",
  storageBucket: "inboxify-app.firebasestorage.app",
  messagingSenderId: "729415754850",
  appId: "1:729415754850:web:a07c0214955e9023661d3b",
  measurementId: "G-PR3L15HJDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
