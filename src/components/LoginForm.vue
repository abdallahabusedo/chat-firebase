<template>
  <form @submit.prevent="handleSubmit" >
    <!-- Email -->
    <!-- <label >Email</label> -->
    <input type="email" required placeholder="Email" v-model="Email">

    <!-- Password -->
    <!-- <label >Password</label> -->
    <input type="password" required placeholder="Password" v-model="Password">
    
    <div class="error">{{ error }}</div>
    <!-- submit  -->
    <button type="submit">Log In</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '@/composables/useLogin'
export default {
    setup(props, contaxt){
        const Email = ref("")
        const Password = ref("")

        const {error , login } = useLogin()
        const handleSubmit = async () =>{
            await login(Email.value, Password.value)
            if (!error.value) {
              contaxt.emit("login")
            }
        }
        return{ Email, Password ,handleSubmit ,error}
    }
}
</script>

<style>

</style>