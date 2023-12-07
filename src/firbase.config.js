import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDVuRP4-rcvkUgySbCmaB1-uJ1w83eoucE",
  authDomain: "messthali-62eff.firebaseapp.com",
  databaseURL:
    "https://messthali-62eff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "messthali-62eff",
  storageBucket: "messthali-62eff.appspot.com",
  messagingSenderId: "245393743688",
  appId: "1:245393743688:web:74b9c2871ace64898e5d7d",
  measurementId: "G-JH8CZQ55RB",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestoreApp = getFirestore(app);
const storage = getStorage(app);

export { app, firestoreApp as firestore, storage };
