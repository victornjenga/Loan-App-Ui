import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCenohGyXB6IzkfK2BceMInHK_0VSVHR1I",
  authDomain: "learning-firestore-7c294.firebaseapp.com",
  projectId: "learning-firestore-7c294",
  storageBucket: "learning-firestore-7c294.appspot.com",
  messagingSenderId: "865600546353",
  appId: "1:865600546353:web:475fe35416412b159d5710",
};


const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

