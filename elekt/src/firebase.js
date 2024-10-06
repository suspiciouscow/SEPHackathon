import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage for Firebase Storage


const firebaseConfig = {
    apiKey: "AIzaSyCxQN3iTbeQxyJoFjB5yyG8SrYNT8WYVgs",
    authDomain: "caretaker-matching.firebaseapp.com",
    projectId: "caretaker-matching",
    storageBucket: "caretaker-matching.appspot.com",
    messagingSenderId: "148567051032",
    appId: "1:148567051032:web:cf3a2be22c265cbbfaec6d",
    measurementId: "G-5WRX8JB8DG"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);  // Add Storage initialization

export {auth, db, storage};