<template>
  <div class="chat-window">
    <div v-if="error">{{error}}</div>
    <div v-if="Doc" class="messages" ref="messages">
        <div v-for="doc in formatedDoc" :key="doc.id" class="single">
            <span class="created-at">{{doc.createdAt}}</span>
            <span class="name">{{doc.name}}</span>
            <span class="message">{{doc.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection.js'
import { computed, onUpdated, ref } from 'vue'
import {formatDistanceToNow} from 'date-fns'
export default {
   setup() {
    const { error, Doc } = getCollection('message')
    const formatedDoc = computed(()=>{
      if(Doc.value){
        return Doc.value.map(doc=>{
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return {...doc, createdAt: time}
        })
      }
    })

    // auto scroll to last message
    const messages = ref(null)
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { error, Doc ,formatedDoc , messages}
  }
  
  
}
</script>

<style>
 .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>