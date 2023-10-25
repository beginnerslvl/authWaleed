import { getAuth } from "@firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj0zd18DztMZPnMPkYXv1w4Iy7Vqvov3g",
  authDomain: "reactauth-981a9.firebaseapp.com",
  projectId: "reactauth-981a9",
  storageBucket: "reactauth-981a9.appspot.com",
  messagingSenderId: "821813451638",
  appId: "1:821813451638:web:86d3e7bf2efff418ba3857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
