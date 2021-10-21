<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="primary"
    >

    </v-app-bar>

    <v-banner
      app
      color="secondary"
    >
    </v-banner>

    <v-main>
      <v-container
        fluid
      >
        <HelloWorld/>
      </v-container>
    </v-main>

    <v-footer
      app
      color="red"
    >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';


export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
  }),
});
</script>

<style lang="scss">
html, body {
  background: var(--v-primary-base);

  * {
    color: var(--v-white-base);
    letter-spacing: .01rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--v-white-darken1);
    font-weight: 300;
  }

  .container {
    height: calc(100% - .8rem);
  }
}

#app {
  background: var(--v-primary-darken1);

  .v-banner .v-banner__wrapper {
    border-width: medium;
    border-color: var(--v-primary-darken1);
  }
}
</style>
