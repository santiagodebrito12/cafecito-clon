import firebase from 'firebase';
import 'firebase/firestore';

var app = firebase.initializeApp({
    apiKey: "AIzaSyBnij5GL2DDyEw6D8pI0F1qN-qIx3P3ZwI",
    authDomain: "cafecito-7d19e.firebaseapp.com",
    projectId: "cafecito-7d19e",
    storageBucket: "cafecito-7d19e.appspot.com",
    messagingSenderId: "500771357347",
    appId: "1:500771357347:web:1e85eab1a6af979a817516"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
