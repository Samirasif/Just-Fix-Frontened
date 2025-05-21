// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBjFZGUNy30j4nEhmeVTIivq6RzRIjQNM",
  authDomain: "just-fix-ce0f3.firebaseapp.com",
  projectId: "just-fix-ce0f3",
  storageBucket: "just-fix-ce0f3.firebasestorage.app",
  messagingSenderId: "728727042762",
  appId: "1:728727042762:web:d2ee1d046d8b2f9f075233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

