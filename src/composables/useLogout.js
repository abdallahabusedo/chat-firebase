import { aut } from "./../../cons"
import { ref } from "vue"
import { getAuth } from "firebase/auth";
const error = ref(null)


const logout = async () => {
   error.value = null // reset the error value
   try {
        await aut.signOut(getAuth())
        error.value= null

   } catch (err) {
        console.log(err.value)
        error.value= "incorrect email or password";
   }
}

const useLogout = () => {
    return{error , logout}
}

export  default useLogout