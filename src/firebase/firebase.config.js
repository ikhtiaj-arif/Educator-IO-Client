// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJPEKAaXMrnFotTc6B59S0P9-ROg62SGc",
  authDomain: "educatorio.firebaseapp.com",
  projectId: "educatorio",
  storageBucket: "educatorio.appspot.com",
  messagingSenderId: "507174182171",
  appId: "1:507174182171:web:6752d2aaface03646047be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;