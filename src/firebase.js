import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCs_bSP7IZj3cz6KL-iD3FgoAIfLrNT1GI",
  authDomain: "clone-939f2.firebaseapp.com",
  databaseURL: "https://clone-939f2.firebaseio.com",
  projectId: "clone-939f2",
  storageBucket: "clone-939f2.appspot.com",
  messagingSenderId: "263965251599",
  appId: "1:263965251599:web:7ce506f4d3f9663035ab7a",
  measurementId: "G-56RL06K1NV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };