<template>
    <textarea 
        placeholder="Type a message and hit enter"
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
    ></textarea>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { timestamp } from './../../cons'

export default {
    setup(){
        const message = ref("")
        const {user }= getUser()
        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name : user.value.displayName,
                createdAt: timestamp,
            }
            console.log(chat)
            message.value = ''
        }
        return {message , handleSubmit}
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