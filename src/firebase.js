import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; //import module from firestore
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ems-project-726ff.firebaseapp.com",
  projectId: "ems-project-726ff",
  storageBucket: "ems-project-726ff.appspot.com",
  messagingSenderId: "1021608990180",
  appId: "1:1021608990180:web:c065d1b90bca1a0ca963f1"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Initialize Cloud Firestore
export const auth = getAuth();
export const storage = getStorage(app);
