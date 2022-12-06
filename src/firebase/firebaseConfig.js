import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUe4AzqzQSDLzi6is1qYxWJZA76X6euiI",
  authDomain: "mymoney-790cf.firebaseapp.com",
  projectId: "mymoney-790cf",
  storageBucket: "mymoney-790cf.appspot.com",
  messagingSenderId: "25450310604",
  appId: "1:25450310604:web:8e95d252130d9ba41a4b69",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const timestamp = Timestamp.now();
