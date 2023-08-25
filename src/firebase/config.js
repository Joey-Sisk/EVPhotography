import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNauRvur_jiQTbn8IkfxipVJdjGA5lEyY",
  authDomain: "eveephotography-e5cb9.firebaseapp.com",
  projectId: "eveephotography-e5cb9",
  storageBucket: "eveephotography-e5cb9.appspot.com",
  messagingSenderId: "894808661398",
  appId: "1:894808661398:web:a057affe3b23750a28d1b7",
  measurementId: "G-RTVWNTMN28"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };