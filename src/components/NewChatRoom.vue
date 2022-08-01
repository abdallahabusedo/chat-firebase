<template>
    <textarea 
        placeholder="Type a message and hit enter"
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{error}}</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { timestamp } from './../firebase/config'
import useCollection from '@/composables/useCollection'

export default {
    setup(){
        const message = ref("")
        const {user }= getUser()
        const {error , addDoce} = useCollection('message')
        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name : user.value.displayName,
                createdAt: timestamp,
            }
            await addDoce(chat)
            if(!error.value){
                message.value = ''
            }
        }
        return {message , handleSubmit , error}
    }
}
</script>

<style scoped>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>