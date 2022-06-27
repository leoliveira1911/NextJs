import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.length) {
  
  const firebaseConfig = {
    apiKey: "AIzaSyDLPxIO23H8mwYlJLc35awpO0Mu5gXFhNI",
    authDomain: "crud-4665e.firebaseapp.com",
    projectId: "crud-4665e",
    storageBucket: "crud-4665e.appspot.com",
    messagingSenderId: "170936548081",
    appId: "1:170936548081:web:20967c52e886b4f73a4750"
  };

    firebase.initializeApp(firebaseConfig)
}

export default firebase