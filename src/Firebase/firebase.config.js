// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdjQ2u32p6d9h3SP7HH-CtuPg6NMWopds",
  authDomain: "coffee-store-fc5bf.firebaseapp.com",
  projectId: "coffee-store-fc5bf",
  storageBucket: "coffee-store-fc5bf.appspot.com",
  messagingSenderId: "581852845528",
  appId: "1:581852845528:web:fa66dfe7a74eb01354cead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;