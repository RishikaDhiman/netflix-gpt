// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhQIEEnYjiejFwemem2uhCne8QuLhMIXU",
  authDomain: "netflix-gpt-263e5.firebaseapp.com",
  projectId: "netflix-gpt-263e5",
  storageBucket: "netflix-gpt-263e5.appspot.com",
  messagingSenderId: "450451612746",
  appId: "1:450451612746:web:4e9ece0e737ee4742172b3",
  measurementId: "G-XJ6X7P1GRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();