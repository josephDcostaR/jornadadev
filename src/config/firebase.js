
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC-teTkk8nlq5m5wOWzGg1QiS73__HT4_U",
  authDomain: "tiktok-jornadaofclone.firebaseapp.com",
  projectId: "tiktok-jornadaofclone",
  storageBucket: "tiktok-jornadaofclone.appspot.com",
  messagingSenderId: "688192228665",
  appId: "1:688192228665:web:ee0e5056a6cbcdeafcece8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;