import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// ptap-articles
// const firebaseConfig = {
//   apiKey: "AIzaSyCx6s29WHuk-RrXJPdJYIbe3Hi4q13-WLc",
//   authDomain: "ptap-articles.firebaseapp.com",
//   databaseURL: "https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "ptap-articles",
//   storageBucket: "ptap-articles.appspot.com",
//   messagingSenderId: "741718300001",
//   appId: "1:741718300001:web:6e16244aa1f3f0760ce120"
// };

// ptap-dev
const firebaseConfig = {
  apiKey: "AIzaSyBpv3xyaCjvNx7EQ4Xnshb9wiyENvhuNr8",
  authDomain: "ptap-dev-bdfe8.firebaseapp.com",
  projectId: "ptap-dev-bdfe8",
  storageBucket: "ptap-dev-bdfe8.firebasestorage.app",
  messagingSenderId: "272128148376",
  appId: "1:272128148376:web:b27e11a0d27a37c259e1ed",
};

export const app = initializeApp(firebaseConfig);

export const realtimeDbInstance = getDatabase(app);
