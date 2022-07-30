// import { projectAuth } from "./../firebase/config"
import { aut } from "./../../cons"
import { ref } from "vue"
import { getAuth, updateProfile } from "firebase/auth";
const error = ref(null)


const login = async ( Email , Password ) => {
    error.value = null // reset the error value
   try {
        const res = await aut.signInWithEmailAndPassword(getAuth(),Email, Password)
        error.value= null
        console.log(res);
        return res
   } catch (err) {
        console.log(err.value)
        error.value= "incorrect email or password";
   }
}

const useLogin = () => {
    return{error , login}
}

export  default useLogin