import { ref } from "vue"
import {projectfirestore} from "./../../cons"
import { collection, addDoc } from "firebase/firestore"; 

const useCollection = (collectionName)=>{
    const error = ref(null)
    
    const addDoce = async (doc)=>{
    try {
        await addDoc(collection(projectfirestore,collectionName),doc)
        
    } catch (error) {
        error.value = "colud not send the message"
    }
}
    // const addDoc = async (doc)=>{
    //     error.value = null
    //     try {
    //         await projectfirestore.collection(collection).add(doc)
    //     } catch (error) {
    //         console.log(error.message);
    //         error.value = "colud not send the message"
    //     }
    // }
    return{error,addDoce }
}

export default useCollection