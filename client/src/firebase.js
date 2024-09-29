// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-99147.firebaseapp.com",
  projectId: "mern-blog-99147",
  storageBucket: "mern-blog-99147.appspot.com",
  messagingSenderId: "516008310611",
  appId: "1:516008310611:web:9f0473d5a91216071793a6",
  measurementId: "G-6L3QZ6NHNE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
