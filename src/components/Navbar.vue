<template>
  <nav v-if="user">
    <div>
        <p>hey there ... {{user.displayName}}</p>
        <p class="email">{{user.email}}</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
export default {
    setup(){

        const {error ,logout} = useLogout()

        const {user} = getUser()
        console.log("User created",user);
        const router = useRouter()
        const handleClick = async()=> {
            await logout()
            if (!error.value){
                console.log("seccesfully logged out");
                router.push({name:"Welcome",})
            }
        }
        return {error,handleClick,user}
    }
}
</script>

<style>
     nav{
        padding : 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
     }
     nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
     }
     nav p.email{
        font-size: 14px;
        color: #999;
     }
</style>