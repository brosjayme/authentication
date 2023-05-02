import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyAh10vyu2jG7QdOOog4OqWA8_QxsFjQzXQ",
//   authDomain: "react-authentication-d55e0.firebaseapp.com",
//   projectId: "react-authentication-d55e0",
//   storageBucket: "react-authentication-d55e0.appspot.com",
//   messagingSenderId: "320097380934",
//   appId: "1:320097380934:web:8784e339daa46066f83847",
//   measurementId: "G-5GBXZ1YWL6"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDZRmg1pp8HiUjZtyDnGLRhzfoi_1Zq5pE",
  authDomain: "phone-auth-aa2dc.firebaseapp.com",
  projectId: "phone-auth-aa2dc",
  storageBucket: "phone-auth-aa2dc.appspot.com",
  messagingSenderId: "257717574193",
  appId: "1:257717574193:web:15a52218aef60e52c61310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
 