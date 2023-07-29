// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx6s29WHuk-RrXJPdJYIbe3Hi4q13-WLc",
  authDomain: "ptap-articles.firebaseapp.com",
  databaseURL: "https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ptap-articles",
  storageBucket: "ptap-articles.appspot.com",
  messagingSenderId: "741718300001",
  appId: "1:741718300001:web:6e16244aa1f3f0760ce120"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);