<template>
  <div class="chat-window">
    <h1>asd</h1>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection.js'

export default {
    async setup(){
        const {error , Doc} = await getCollection('message')
        console.log("docskk.value",Doc)
        console.log("errorkk.value",error)
        return {Doc, error}
    }
}
</script>

<style>

</style>