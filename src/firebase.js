import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCAbwe9VoZdslCTgr9DnlKHHEGgPiq59XY",
  authDomain: "blotes-3b289.firebaseapp.com",
  projectId: "blotes-3b289",
  storageBucket: "blotes-3b289.appspot.com",
  messagingSenderId: "380541885361",
  appId: "1:380541885361:web:a075f8f24ecb285dc97b90"
};

// Initialise Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const blogsRef = collection(db, 'blogs')
export const notesRef = collection(db, 'notes')



