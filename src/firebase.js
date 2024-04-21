// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBThVZi7vuuhLs-O3RxWzjc8UpCF2-G-2g",
  authDomain: "grad-gcloud-project.firebaseapp.com",
  projectId: "grad-gcloud-project",
  storageBucket: "grad-gcloud-project.appspot.com",
  messagingSenderId: "438979725475",
  appId: "1:438979725475:web:8a9da6dea3725213139716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;