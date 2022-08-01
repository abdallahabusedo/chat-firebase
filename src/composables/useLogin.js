// import { projectAuth } from "./../firebase/config"
import { auth } from "./../firebase/config"
import { ref } from "vue"
import { signInWithEmailAndPassword } from "firebase/auth";
const error = ref(null)


const login = async ( Email , Password ) => {
    error.value = null // reset the error value
   try {
        const res = await signInWithEmailAndPassword(auth,Email, Password)
        error.value= null
        return res
   } catch (err) {
        error.value= "incorrect email or password";
   }
}

const useLogin = () => {
    return{error , login}
}

export  default useLogin