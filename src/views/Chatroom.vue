<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import NewChatRoom from '@/components/NewChatRoom.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import { defineAsyncComponent } from 'vue'


export default {
    components: { Navbar, 
    NewChatRoom, 
    ChatWindow:(()=>{import('@/components/ChatWindow.vue')}) 
    }, 
    setup(){
      const {user } = getUser()
      const router = useRouter()
      watch(user,()=>{
        if(!user.value){
          router.push({name:"Welcome"})
        }
      })
    }
}
</script>

<style>

</style>