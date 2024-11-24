// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbBI7P4wCF99VIz0zO462CB61WJ84WaQ",
  authDomain: "login-user-82db1.firebaseapp.com",
  projectId: "login-user-82db1",
  storageBucket: "login-user-82db1.appspot.com",
  messagingSenderId: "696351301266",
  appId: "1:696351301266:web:b1737f21c5f58c5be4504b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
