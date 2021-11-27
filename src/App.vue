<template>
  <v-app>
    <!--    The App bar    -->
    <v-app-bar
      app
      flat
      color="primary"
    >
      <the-bar :project_title="project.name"></the-bar>
    </v-app-bar>

    <!--    The App container    -->
    <v-main class="py-0">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!--    The App footer    -->
    <v-footer
      app
      color="red"
    >
      <the-footer
        :app_title="app.name"
        :app_mode="app.mode"
        :app_language="app.lang"
      ></the-footer>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import The_bar from './components/app/The_bar.vue';
import The_footer from './components/app/The_footer.vue';

export default {
  name: 'App',
  components: {
    TheBar: The_bar,
    TheFooter: The_footer,
  },
  data: () => ({
    app: {
      name: 'Totsuii',
      mode: 'dev',
      lang: 'ang',
    },
    project: {
      name: ''
    },
  }),
}
</script>

<style lang="scss">
html, body {
  background: var(--v-primary-base);

  font-size: 16px;

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

  .v-banner .v-banner__wrapper,
  .v-footer {
    border-width: medium;
    border-color: var(--v-primary-darken1) !important;
  }
}
</style>
