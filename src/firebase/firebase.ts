import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7C3e3c4eGH5ESEaNR2Xc5hYR8wTjry-8",
  authDomain: "little-28456.firebaseapp.com",
  projectId: "little-28456",
  storageBucket: "little-28456.appspot.com",
  messagingSenderId: "96249624577",
  appId: "1:96249624577:web:2399b21253e163777f6800",
  measurementId: "G-CFMS7H9QLK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
