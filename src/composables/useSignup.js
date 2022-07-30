// import { projectAuth } from "./../firebase/config"
import { aut } from "./../../cons"
import { ref } from "vue"
import { getAuth, updateProfile } from "firebase/auth";
console.log("useSignup ",aut);
const error = ref(null)


const signup = async ( UserName, Email , Password ) => {
    error.value = null // reset the error value
    try{
        await aut.createUserWithEmailAndPassword(getAuth(),Email, Password)
        .then(() => {
            updateProfile(getAuth().currentUser,{
                displayName : UserName,
            })
            error.value = null // reset the error value
        })
        .catch((err) => {
            error.value = err.message
        })  
    }
    catch(e){
        console.log(e.message)
        error.value = e.message
    }
}

const useSignup = () => {
    return{error , signup}
}

export  default useSignup