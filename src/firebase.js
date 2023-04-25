import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATTt1T9_NX2fR12wsNsgbgviwI8H8kco8",
  authDomain: "facebook-clone-c0953.firebaseapp.com",
  projectId: "facebook-clone-c0953",
  storageBucket: "facebook-clone-c0953.appspot.com",
  messagingSenderId: "686666373666",
  appId: "1:686666373666:web:06d8f345c367fc4dcc087b",
};

const firebaceApp = firebase.initializeApp(firebaseConfig);

const db = firebaceApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, provider, storage, timestamp };

