// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import constsFirebase from "./consts";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: constsFirebase["FIREBASE_API_KEY"],
    authDomain: constsFirebase["AUTH_DOMAIN"],
    projectId: constsFirebase["PROJECT_ID"],
    storageBucket: constsFirebase["STORAGE_BUCKET"],
    messagingSenderId: constsFirebase["MESSAGING_SENDER_ID"],
    appId: constsFirebase["APP_ID"],
    measurementId: constsFirebase["MEASUREMENT_ID"],
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);