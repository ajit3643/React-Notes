// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkH3R2SdHEwgT5BvUU7KyWYi0hLXBkVh0",
  authDomain: "blogging-app-a10da.firebaseapp.com",
  projectId: "blogging-app-a10da",
  storageBucket: "blogging-app-a10da.firebasestorage.app",
  messagingSenderId: "32479648390",
  appId: "1:32479648390:web:f1108b8989a5cf37eb8f07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
