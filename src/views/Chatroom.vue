<template>
  <div class="container">
    <Navbar />
    <NewChatRoom />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import NewChatRoom from '@/components/NewChatRoom.vue';

export default {
    components: { Navbar, NewChatRoom },
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