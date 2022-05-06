import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD9_M0eG11zuWizmgqYDYBeqLxHxYr1x0Y",
  authDomain: "e-commerce-7e2c8.firebaseapp.com",
  projectId: "e-commerce-7e2c8",
  storageBucket: "e-commerce-7e2c8.appspot.com",
  messagingSenderId: "750895230268",
  appId: "1:750895230268:web:64833d231024c7593b8239",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
