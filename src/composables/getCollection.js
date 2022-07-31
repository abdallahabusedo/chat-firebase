import { ref } from "vue"
import {projectfirestore} from "./../../cons"
import { collection ,getDocs,query, orderBy} from "firebase/firestore"; 

const Doc = ref([])
const error = ref(null)
const getCollection = async (collectionName)=>{
    const collectionq = query(collection(projectfirestore,collectionName), orderBy("createdAt"))
    await (await getDocs(collectionq)).forEach(doc=>{
        doc.data().createdAt && Doc.value.push({...doc.data(),id:doc.id})
    })
    if (!Doc.value) {
        error.value = "could not fetch the data"
        Doc.value = null
    }
    console.log("docs.value in get Collection",Doc.value)
    console.log("error.value",error.value)

    return { error, Doc }
}

export default getCollection