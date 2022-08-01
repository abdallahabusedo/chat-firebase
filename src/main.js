import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from "./firebase/config"
import './assets/main.css'
import { getAuth ,onAuthStateChanged} from 'firebase/auth'
let app 

onAuthStateChanged(auth,()=>{
    if (!app){
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
    return app
})

