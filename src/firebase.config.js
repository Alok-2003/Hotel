import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmUIcm4kPoZF8YI307wzivjSWY3-mYuHk",
  authDomain: "hotel-60204.firebaseapp.com",
  projectId: "hotel-60204",
  storageBucket: "hotel-60204.appspot.com",
  messagingSenderId: "419924901635",
  appId: "1:419924901635:web:25316be4232420aa62b336",
  measurementId: "G-P1JCSDB7FD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);