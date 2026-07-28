// Firebase Configuration
// 📌 এই ফাইলটি সব পেজে import করতে হবে

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    addDoc,
    serverTimestamp,
    Timestamp,
    increment,
    runTransaction
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 আপনার Firebase Project থেকে এই Config বসান
const firebaseConfig = {
    apiKey: "AIzaSyBo-PFNNuRQ7Ghp-Q-ZA1ZrgECid5z0HXM",
    authDomain: "study-hub-bd-a3118.firebaseapp.com",
    projectId: "study-hub-bd-a3118",
    storageBucket: "study-hub-bd-a3118.firebasestorage.app",
    messagingSenderId: "807169027235",
    appId: "1:807169027235:web:565dbdaf77aa4cfc35a316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// Export all functions
export {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    addDoc,
    serverTimestamp,
    Timestamp,
    increment,
    runTransaction
};
