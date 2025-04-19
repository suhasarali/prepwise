// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAns4MZQ3W1xSFBVEYyg3srKFV7ryczFpo",
  authDomain: "prepwise-7545f.firebaseapp.com",
  projectId: "prepwise-7545f",
  storageBucket: "prepwise-7545f.firebasestorage.app",
  messagingSenderId: "520520095994",
  appId: "1:520520095994:web:d70f77d0fdcc7e0cbdd143",
  measurementId: "G-TKDMMCG68T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
