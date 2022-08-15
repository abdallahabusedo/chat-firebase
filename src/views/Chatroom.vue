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
    components: { 
      Navbar, 
      NewChatRoom, 
      // this component is async we need to wait until the data is loaded
      // TODO: Fix this Component 
      ChatWindow
    }, 
    setup(){
      
      // getting the user to the chat window 
      const { user } = getUser()
      // console.log("user in chat window" , user.value.name);
      const router = useRouter()
      // watch the user to ensure the links gaurd 
      // by pushing the the welcome window when there is no user 
      // by using the useRouter Hook
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