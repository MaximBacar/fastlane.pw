// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth }         from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiOiiBZmffTSeImabuVRtO40leUTswg1I",
  authDomain: "fastlane-gym.firebaseapp.com",
  databaseURL: "https://fastlane-gym-default-rtdb.firebaseio.com",
  projectId: "fastlane-gym",
  storageBucket: "fastlane-gym.firebasestorage.app",
  messagingSenderId: "387391008091",
  appId: "1:387391008091:web:e3e4ee46b1c937249efe7e",
  measurementId: "G-T3L8431ZB3"
};


const app = initializeApp(firebaseConfig);
export const    auth       = getAuth(app);
export default app;

const analytics = getAnalytics(app);