// Firebase configuration and initialization for Google Auth and Firestore
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNe9gopcdi4fgI-_FtRL0gVgxoWllMsBw",
  authDomain: "natural-reserve-474313-h9.firebaseapp.com",
  projectId: "natural-reserve-474313-h9",
  storageBucket: "natural-reserve-474313-h9.firebasestorage.app",
  messagingSenderId: "149771809109",
  appId: "1:149771809109:web:a929e150f9fff3e4b1bfdc",
  measurementId: "G-600SEPD0CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export default app;
