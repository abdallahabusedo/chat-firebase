
import * as firebase from 'firebase/app'
import * as auth from 'firebase/auth'
import * as firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB0LKmor7Y7wQepgQCJOnq4mIwz1WWQ2dE",
    authDomain: "chat-room-firebase-2bdfe.firebaseapp.com",
    projectId: "chat-room-firebase-2bdfe",
    storageBucket: "chat-room-firebase-2bdfe.appspot.com",
    messagingSenderId: "943046024495",
    appId: "1:943046024495:web:da0acdcd72d47bc6bed5da"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase.initializeApp(firebaseConfig));

const aut = auth
const projectfirestore = firestore
console.log("useSignup aut",aut);

export {aut,projectfirestore}