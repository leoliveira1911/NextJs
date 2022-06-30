import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC1A-vOF81-P5iilHqJ0uSZkXDLZZ44jxg",
    authDomain: "expensetracker-884af.firebaseapp.com",
    projectId: "expensetracker-884af",
    storageBucket: "expensetracker-884af.appspot.com",
    messagingSenderId: "929425816027",
    appId: "1:929425816027:web:545e3d1cb66b28e06a0ffe"
  };
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export default firebase
