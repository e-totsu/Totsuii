<template>
  <v-app>
    <!--    The App bar    -->
    <v-app-bar
      app
      flat
      color="primary"
      class="uii_card_border uii_bb"
    >
      <the-bar :project_title="project.name"></the-bar>
    </v-app-bar>

    <!--    The App container    -->
    <v-main class="py-0">
      <v-container class="px-0 py-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!--    The App footer    -->
    <v-footer
      app
      color="red"
      class="uii_card_border uii_bt"
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
    color: var(--v-white-base);
    font-weight: 300;

    letter-spacing: .1rem;
  }

  .container {
    height: 100%;
  }

  #app .uii_card_border {
    border-color: var(--v-primary-darken1) !important;
    border-style: solid;
    border-width: .3rem;
  }

  #app .uii_bb {
    border-top: unset !important;
    border-left: unset !important;
    border-right: unset !important;
  }

  #app .uii_bt {
    border-bottom: unset !important;
    border-left: unset !important;
    border-right: unset !important;
  }

  #app .uii_bl {
    border-top: unset !important;
    border-bottom: unset !important;
    border-right: unset !important;
  }

  #app .uii_br {
    border-top: unset !important;
    border-bottom: unset !important;
    border-left: unset !important;
  }
}
</style>
