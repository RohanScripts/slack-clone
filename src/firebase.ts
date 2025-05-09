import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3OuH69J_LLC8kbRTMoFm7EKRgH5TVTfY",
  authDomain: "slack-clone-faede.firebaseapp.com",
  projectId: "slack-clone-faede",
  storageBucket: "slack-clone-faede.firebasestorage.app",
  messagingSenderId: "380235141514",
  appId: "1:380235141514:web:680fdf3faaf081a47f7873"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
