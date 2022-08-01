import { auth } from "./../firebase/config"
import { ref } from "vue"
import { getAuth,signOut } from "firebase/auth";
const error = ref(null)


const logout = async () => {
   error.value = null // reset the error value
   try {
        // check ig the sign out remove the user from its object
        await signOut(auth)

   } catch (err) {
        error.value= "incorrect email or password";
   }
}

const useLogout = () => {
    return{error , logout}
}

export  default useLogout