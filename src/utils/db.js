// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_3k2RkNQxv_WygIE3DwojPh0a_2B9XRo",
  authDomain: "mtm6404-firebase.firebaseapp.com",
  projectId: "mtm6404-firebase",
  storageBucket: "mtm6404-firebase.appspot.com",
  messagingSenderId: "486561945779",
  appId: "1:486561945779:web:bfc65d157421c63a94b8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const collectionId = 'contacts'

export default db;