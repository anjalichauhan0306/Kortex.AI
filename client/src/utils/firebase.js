// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kortex-ai-8aa94.firebaseapp.com",
  projectId: "kortex-ai-8aa94",
  storageBucket: "kortex-ai-8aa94.firebasestorage.app",
  messagingSenderId: "199832770658",
  appId: "1:199832770658:web:fa391cda963cbc0037d93b",
  measurementId: "G-FQ7ZFMR24K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()
