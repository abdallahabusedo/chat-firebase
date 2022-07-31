
import * as firebase from 'firebase/app'
import * as auth from 'firebase/auth'
import { getFirestore, serverTimestamp } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB0LKmor7Y7wQepgQCJOnq4mIwz1WWQ2dE",
    authDomain: "chat-room-firebase-2bdfe.firebaseapp.com",
    projectId: "chat-room-firebase-2bdfe",
    storageBucket: "chat-room-firebase-2bdfe.appspot.com",
    messagingSenderId: "943046024495",
    appId: "1:943046024495:web:da0acdcd72d47bc6bed5da"
};

const app = firebase.initializeApp(firebaseConfig);
console.log(firebase.initializeApp(firebaseConfig));

const aut = auth
const projectfirestore = getFirestore(app)
const timestamp =  serverTimestamp()

export {aut,projectfirestore,timestamp}