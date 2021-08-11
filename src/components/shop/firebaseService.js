import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = {
apiKey: "AIzaSyAIC37q7dmpP6bS4D6fjMQeyytEG3fczgQ",
authDomain: "shishashop-10ccc.firebaseapp.com",
projectId: "shishashop-10ccc",
storageBucket: "shishashop-10ccc.appspot.com",
messagingSenderId: "466733334110",
appId: "1:466733334110:web:9d3ec9595b41bdadaafecf",
measurementId: "G-XQ3M39ESGF"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}