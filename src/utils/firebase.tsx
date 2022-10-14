// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_X-JccM7MRWlssXkrschO9bGpBRrlCI",
  authDomain: "quick-reminders.firebaseapp.com",
  projectId: "quick-reminders",
  storageBucket: "quick-reminders.appspot.com",
  messagingSenderId: "270481918709",
  appId: "1:270481918709:web:160e55db58a3d47b41d3bc",
  measurementId: "G-QC4CLDGSVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
