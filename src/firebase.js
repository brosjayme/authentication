import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAh10vyu2jG7QdOOog4OqWA8_QxsFjQzXQ",
  authDomain: "react-authentication-d55e0.firebaseapp.com",
  projectId: "react-authentication-d55e0",
  storageBucket: "react-authentication-d55e0.appspot.com",
  messagingSenderId: "320097380934",
  appId: "1:320097380934:web:8784e339daa46066f83847",
  measurementId: "G-5GBXZ1YWL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
 