
import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

<Your Config Object named firebaseConfig>
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app)
const projectfirestore = getFirestore(app)
const timestamp =  serverTimestamp()

export {auth,projectfirestore,timestamp}
