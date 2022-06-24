import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMT144QlPcrR4nRzxmeytEIdQfe2cmSdo",
  authDomain: "blog-15d8b.firebaseapp.com",
  projectId: "blog-15d8b",
  storageBucket: "blog-15d8b.appspot.com",
  messagingSenderId: "494257678405",
  appId: "1:494257678405:web:1dc5279a6beba373a51b2c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
