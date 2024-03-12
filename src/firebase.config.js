// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmUIcm4kPoZF8YI307wzivjSWY3-mYuHk",
  authDomain: "hotel-60204.firebaseapp.com",
  projectId: "hotel-60204",
  storageBucket: "hotel-60204.appspot.com",
  messagingSenderId: "419924901635",
  appId: "1:419924901635:web:25316be4232420aa62b336",
  measurementId: "G-P1JCSDB7FD",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;