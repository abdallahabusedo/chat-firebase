import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { get } from "core-js/core/dict";
const firebaseConfig = {
    apiKey: "AIzaSyB0LKmor7Y7wQepgQCJOnq4mIwz1WWQ2dE",
    authDomain: "chat-room-firebase-2bdfe.firebaseapp.com",
    projectId: "chat-room-firebase-2bdfe",
    storageBucket: "chat-room-firebase-2bdfe.appspot.com",
    messagingSenderId: "943046024495",
    appId: "1:943046024495:web:da0acdcd72d47bc6bed5da"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default {app , auth}