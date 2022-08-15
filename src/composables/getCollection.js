import { ref, watchEffect } from "vue"
import {projectfirestore} from "./../firebase/config"
import { collection ,query, orderBy, onSnapshot} from "firebase/firestore"; 

const getCollection = (collectionName)=>{
    const Doc = ref(null)
    const error = ref(null)
    const collectionQuery = query(collection(projectfirestore,collectionName), orderBy("createdAt"))
    const unsub = onSnapshot(collectionQuery, (querySnapshot) => {
        let results = []
        querySnapshot.forEach((doc)=>{
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        Doc.value = results
        error.value = null
      }, err =>{
        console.log(err.message)
        Doc.value = null
        error.value = err.message
      });

    watchEffect((onInvalidate)=>{
        onInvalidate(()=> unsub())
    })
    return { error, Doc }
}

export default getCollection