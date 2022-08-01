<template>
  <div class="chat-window">
    <p>this is chat </p> 
    <div v-if="error">{{error}}</div>
    <div v-if="Doc" class="messages">
        <div v-for="doc in Doc" :key="doc.id" class="single">
            <span class="created-at">{{doc.createdAt}}</span>
            <span class="name">{{doc.name}}</span>
            <span class="message">{{doc.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { onUpdated } from '@vue/runtime-core';
import getCollection from '../composables/getCollection.js'

export default {
  data(){
    return{
      Doc: null,
    }
  }, 
  async created(){
    await this.detData();
  },
  methods:{
    async detData(){
      // let Doc = {value:null}
      // Doc.value = [{
      //   name: 'Seddo',
      //   message: 'new message',
      //   createdAt: '22-2-2022'
      // }]
      const {error , Doc} = await getCollection('message')
      this.Doc = Doc._rawValue
      console.log("docskk2.value",this.Doc)
      
      // console.log("errorkk.value",error.value)
    }
  },
  async onUpdated(){
    await this.detData()
  }
  
}
</script>

<style>

</style>