import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBqHRID182U65lUatCzrvNJ2x_Yt7jqTds",
  authDomain: "ecomsdata.firebaseapp.com",
  projectId: "ecomsdata",
  storageBucket: "ecomsdata.firebasestorage.app",
  messagingSenderId: "431436726984",
  appId: "1:431436726984:web:ea69831c105d2886ea1bfd",
  measurementId: "G-YSEQ6NJDL8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
