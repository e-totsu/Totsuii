<template>
  <v-container>
    <canvas id="desk"/>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  require('./../libs/totsuii/Main.ts')

  export default Vue.extend({
    data() {
      return {
        kot: 23
      }
    },
    methods: {
    }
  })
</script>
