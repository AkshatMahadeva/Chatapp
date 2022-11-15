// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBajWceHU94coaJ4v2i36q89Y0VtMjOLz0",
  authDomain: "chatapp-cff18.firebaseapp.com",
  projectId: "chatapp-cff18",
  storageBucket: "chatapp-cff18.appspot.com",
  messagingSenderId: "362041350563",
  appId: "1:362041350563:web:73d3371370ef9f38c8e216",
  measurementId: "G-ZHB82QYFCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)