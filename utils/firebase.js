import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAc3vvZ1J0G_IYE4OWBcgJPsFt1Jdjj1Ak",
  authDomain: "ease-note.firebaseapp.com",
  projectId: "ease-note",
  storageBucket: "ease-note.appspot.com",
  messagingSenderId: "401886024959",
  appId: "1:401886024959:web:f22af3b6bdae7b195de8ca",
  measurementId: "G-JP7V6V6LSB",
};

export const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()