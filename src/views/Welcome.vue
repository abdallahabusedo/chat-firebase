<template>
  <div class="welcome container">
    <img src="./../assets/PosidoonChat.png" class="logo" />
    <p>Welcome to Posidoon Chat Room</p>

    <!-- sign up Component --> 
    <div v-if="TogglePages">
        <h2>Sign Up 👋</h2>
        <SignupForm @signup="enterChat" />
    </div>

    <!-- Log in Component -->
    <div v-if="!TogglePages">
        <h2>Log In 💕</h2>
        <LoginForm @login="enterChat" />
    </div>

    <!-- Switch Components -->
    <div @click="TogglePages = !TogglePages">
        <div v-if="TogglePages" >
            <p>
                I have an Account 🤞
            </p>
        </div>
        <div v-else>
            <p>
                Let's create a new Account 👌
            </p>
        </div>
    </div>
  </div>

</template>

<script>
// imports
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'


export default {
components: { SignupForm, LoginForm },
setup(){
    const TogglePages = ref(true)  // toggle pages 
    const router = useRouter()  // initialize router
    // Route after Authentication
    const enterChat = () =>{ 
        router.push({name: 'ChatRoom' })
    }

    // return
    return{
         TogglePages,
         enterChat
    }
}

}
</script>

<style>
    .logo{
        width: 50%;
        margin: 15px;
    }
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    .welcome label{
        display: block;
        margin: 20px 0 10px;
    }
    .welcome input{
        width: 100%;
        padding: 10px;
        border-radius:20px ;
        border: 1px solid #eee;
        outline: none;
        color: rgb(42, 42, 42);
        margin: 10px auto;
    }
</style>