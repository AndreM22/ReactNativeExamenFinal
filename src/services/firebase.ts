import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyCA45WYdbXlDm38yfOmWKjqe-6Q34fxcGI",
  authDomain: "materias-b9d44.firebaseapp.com",
  projectId: "materias-b9d44",
  storageBucket: "materias-b9d44.appspot.com",
  messagingSenderId: "486020522208",
  appId: "1:486020522208:web:e26cc538ffcfe919427085"
};

export const initFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(initFirebase);
export const db = getFirestore(initFirebase);