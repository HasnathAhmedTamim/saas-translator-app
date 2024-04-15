import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqDw431MLGY172B5oRNcYS_VAZ_PK_8Y",
  authDomain: "saas-translator-app-yt-3fdcd.firebaseapp.com",
  projectId: "saas-translator-app-yt-3fdcd",
  storageBucket: "saas-translator-app-yt-3fdcd.appspot.com",
  messagingSenderId: "306047838118",
  appId: "1:306047838118:web:6f43ddf639e496b2f89167",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export{
    db ,auth ,functions
}