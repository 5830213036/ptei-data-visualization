<template>
<div>
    <p>firestore</p>
    <p v-for="id in login" v-bind:key="id.docid">
        {{id.id}} {{id.username}} {{id.password}}

    </p>
  
    </div>
</template>
<script>
import {firestore} from '../firebase.js'
    export default {
data() {
    return {
        login:[]
    }
},

        firestore() {
    return {
        // Collection
        login: firestore.collection('login')
    }
  }
    }
</script>