// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_IrlYXHU4KdCY7LeRCmbKY7QylWu7-Jw",
  authDomain: "feedback-form-react-bc793.firebaseapp.com",
  projectId: "feedback-form-react-bc793",
  storageBucket: "feedback-form-react-bc793.firebasestorage.app",
  messagingSenderId: "250676620970",
  appId: "1:250676620970:web:6ab4a5b1b77e42f1edaad3",
  measurementId: "G-3Y0MLVCB7S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
