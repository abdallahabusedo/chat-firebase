
import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app)
const projectfirestore = getFirestore(app)
const timestamp =  serverTimestamp()

export {auth,projectfirestore,timestamp}