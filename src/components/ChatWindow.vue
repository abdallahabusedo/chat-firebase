<template>
  <div class="chat-window">
    <div v-if="error">{{error}}</div>
    <div v-if="Doc" class="messages">
        <div v-for="doc in Doc.value" :key="doc.id" class="single">
            <span class="created-at">{{doc.createdAt}}</span>
            <span class="name">{{doc.name}}</span>
            <span class="message">{{doc.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection.js'

export default {
   async setup(){
        const {error , Doc} =   await getCollection('message')
        console.log("docskk.value",Doc.value)
        console.log("errorkk.value",error.value)
        return {Doc, error}
    }
}
</script>

<style>

</style>