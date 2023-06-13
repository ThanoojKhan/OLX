import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdcq29SHosfujIzHBwYyal6ITbxKxEWu0",
  authDomain: "fir-5a84f.firebaseapp.com",
  projectId: "fir-5a84f",
  storageBucket: "fir-5a84f.appspot.com",
  messagingSenderId: "105961119585",
  appId: "1:105961119585:web:905dd6295f85d03023af20",
  measurementId: "G-BE9NPEVXQF"
};

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app);
  const storage = getStorage(app);
  export {db,auth,storage}