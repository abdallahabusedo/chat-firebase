// import { projectAuth } from "./../firebase/config"
import { auth } from "./../firebase/config"
import { ref } from "vue"
import {  updateProfile ,createUserWithEmailAndPassword } from "firebase/auth";
const error = ref(null)

const signup = async ( UserName, Email , Password ) => {
    error.value = null // reset the error value
    try{
       await createUserWithEmailAndPassword(auth,Email, Password)
        .then(() => {
            const user = auth.currentUser
            updateProfile(user,{
                displayName : UserName,
            })
            error.value = null // reset the error value
        })
        .catch((err) => {
            error.value = err.message
        })  
    }
    catch(e){
        error.value = e.message
    }
}

const useSignup = () => {
    return {error , signup}
}

export  default useSignup