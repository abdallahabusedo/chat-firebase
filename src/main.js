import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { aut } from "./../cons"
import './assets/main.css'
import { getAuth } from 'firebase/auth'
let app 

aut.onAuthStateChanged(getAuth(),()=>{
    if (!app){
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
    return app
})

