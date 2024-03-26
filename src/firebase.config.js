// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDmUIcm4kPoZF8YI307wzivjSWY3-mYuHk",
//   authDomain: "hotel-60204.firebaseapp.com",
//   projectId: "hotel-60204",
//   storageBucket: "hotel-60204.appspot.com",
//   messagingSenderId: "419924901635",
//   appId: "1:419924901635:web:25316be4232420aa62b336",
//   measurementId: "G-P1JCSDB7FD",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

//New User
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBexuAdEEIMiSwal1I4Cqdz3z7t96fLxA",
  authDomain: "app-640a6.firebaseapp.com",
  databaseURL: "https://app-640a6-default-rtdb.firebaseio.com",
  projectId: "app-640a6",
  storageBucket: "app-640a6.appspot.com",
  messagingSenderId: "126292029866",
  appId: "1:126292029866:web:c6b64211cdf7f1525a3bd3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
