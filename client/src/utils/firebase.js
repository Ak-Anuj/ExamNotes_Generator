import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes-e4f82.firebaseapp.com",
  projectId: "examnotes-e4f82",
  storageBucket: "examnotes-e4f82.appspot.com",
  messagingSenderId: "925341590102",
  appId: "1:925341590102:web:925d9a427e10e25c2d11f7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
