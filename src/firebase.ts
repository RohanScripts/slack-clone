import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS2piV8xn7CYuUcMJ9D0W2lGabkAJ08Cg",
  authDomain: "slack-clone-68958.firebaseapp.com",
  projectId: "slack-clone-68958",
  storageBucket: "slack-clone-68958.firebasestorage.app",
  messagingSenderId: "581215845907",
  appId: "1:581215845907:web:0a2ad69b373969c6a389e6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
