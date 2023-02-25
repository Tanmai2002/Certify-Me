import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc } from "firebase/firestore"; 

// process
// let env=process.env
// import {env} from "process";


    let env=import.meta.env


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(env)
const firebaseConfig = {
  apiKey:env.VITE_apiKey,
  authDomain: env.VITE_authDomain,
  projectId: env.VITE_projectId,
  storageBucket: env.VITE_storageBucket,
  messagingSenderId: env.VITE_messagingSenderId,
  appId: env.VITE_appId,
  measurementId: env.VITE_measurementId
};
// Initialize Firebase
const _app = initializeApp(firebaseConfig);
const _analytics = getAnalytics(_app);
const _db = getFirestore(_app);

const getUser=(address)=>{
    _db.c
}
const addUser=async (address)=>{
try {
  const docRef = await setDoc(doc(_db, "users",address), {
    walletAddress:address
  });
  console.log("Document written with ID: ", docRef);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

export {addUser}

