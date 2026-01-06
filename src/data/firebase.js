import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1uld-edZOkxIThLIW8W1fq8agfWwiUHY",
  authDomain: "ptap-articles.firebaseapp.com",
  databaseURL: "https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ptap-articles",
  storageBucket: "ptap-articles.firebasestorage.app",
  messagingSenderId: "741718300001",
  appId: "1:741718300001:web:ac57d3d8eb08fcc50ce120"
};

export const app = initializeApp(firebaseConfig);

export const realtimeDbInstance = getDatabase(app);
