<template>
  <div class="chat-window">
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
      error : null
    }
  }, 
  async created(){
    await this.detData();
  },
  methods:{
    detData(){
      const {error , Doc} = getCollection('message')
      this.Doc = Doc
      this.error = error
    }
  },
  async onUpdated(){
    await this.detData()
  }
  
}
</script>

<style>

</style>