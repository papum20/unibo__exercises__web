<template>
    <section>
        <p v-if="likes > 0">
            This page has {{likes}} likes
        </p>
        <p v-else>
            This page has no likes :(
        </p>
        <button v-on:click="like()">
            Like this page!
        </button>
    </section>
  </template>

  <script>    
  export default {
    data() {
        return {
            likes: 0,
        }
    },

    methods: {
        like() {
            this.likes++
            alert("You liked this page!")
        }
    }
  }
  </script>