// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLN0O36j1DWxUN5U1B4iuP6kH-YNUENkk",
  authDomain: "kollect-aa5a3.firebaseapp.com",
  projectId: "kollect-aa5a3",
  storageBucket: "kollect-aa5a3.firebasestorage.app",
  messagingSenderId: "57011462366",
  appId: "1:57011462366:web:a060ffe0e8be47f61ae24f",
  measurementId: "G-QCP7K46FXY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
