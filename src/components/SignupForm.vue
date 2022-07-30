<template>
  <form @submit.prevent="handleSubmit" >
    <!-- UserName -->
    <!-- <label >UserName</label> -->
    <input type="text" required placeholder="UserName" v-model="userName">
    
    <!-- Email -->
    <!-- <label >Email</label> -->
    <input type="email" required placeholder="Email" v-model="Email">

    <!-- Password -->
    <!-- <label >Password</label> -->
    <input type="password" required placeholder="Password" v-model="Password">
    
    <div class="error">{{ error }}</div>
    <!-- submit  -->
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'
export default {
    setup(props, contaxt){
        const {error ,signup } = useSignup()
        const userName = ref("")
        const Email = ref("")
        const Password = ref("")

        const handleSubmit = async () =>{
            await signup(userName.value, Email.value, Password.value)
            if (!error.value) {
              contaxt.emit("signup")
            }
            // console.log("user signup successful");
        }
        return{userName, Email, Password ,handleSubmit, error}
    }
}
</script>

<style>

</style>