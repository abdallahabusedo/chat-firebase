import { getAuth } from 'firebase/auth'
import {ref } from 'vue'
import {aut } from './../../cons'

const user = ref(getAuth().currentUser)
aut.onAuthStateChanged(getAuth(),_user=>{
    console.log("user state changed",_user);
    user.value = _user
})

const getUser = ()=>{
    return {user}
}

export default getUser