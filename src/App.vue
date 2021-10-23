<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="primary"
    >
      <v-card
        class="
          d-flex
          justify-space-between
          align-center
        "
        style="width: 100%"
        color="transparent"
        flat
        tile
      >
        <Menu />
        <span
          style="
            position: absolute;

            left: 0;
            right: 0;

            text-align: center;
          "
        >{{ app_version }}</span>
        <div
          class="d-inline-flex align-center"
        >
          <v-btn
            text
            icon
            class="mr-4"
          >
            <v-icon size="small">fas fa-play</v-icon>
          </v-btn>
          <v-text-field
            v-model="desk_scale"
            :value="desk_scale"
            color="red"
            :max-lenght="2"
            hide-details
            class="mr-4 darken-2"
            style="
              max-width: 2.6rem;
            "
            @blur="
              desk_scale = desk_scale.length < 3 ?
                parseInt(desk_scale) < 0 ?
                  0
                :
                  parseInt(desk_scale) ?
                    parseInt(desk_scale)
                  :
                    0
              :
               100
            "
          />
        </div>
      </v-card>
    </v-app-bar>

    <v-banner
      app
      color="secondary"
    >
      <Panel_switch />
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
      class="
        d-flex
        justify-space-between
        darken-2
      "
      style="
        font-size  : .6rem;
        font-weight: bold;
      "
    >
      <span style="color: var(--v-white-lighten1)">Totsuii @ 2021</span>
      <div >
        <span
          class="ml-5"
          style="color: var(--v-white-lighten1)"
        >
          ENG
        </span>
        <span
          class="ml-5"
          style="color: var(--v-white-lighten1)"
        >
          DEV
        </span>
        <span
          class="ml-5"
          style="color: var(--v-white-lighten1)"
        >
            <v-icon size="x-small">fas fa-search</v-icon>
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './components/app/menu.vue';
import Panel_switch from './components/app/panel_switch.vue';
import HelloWorld from './components/HelloWorld.vue';


export default Vue.extend({
  name: 'App',

  components: {
    Panel_switch,
    Menu,
    HelloWorld,
  },

  data: () => ({
    app_version: 'Totsuii V0.0.1',
    desk_scale: '100',
  }),
});
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
}

#app {
  background: var(--v-primary-darken1);

  .v-banner .v-banner__wrapper {
    padding: 0;

    border-width: medium;
    border-color: var(--v-primary-darken1);
  }
}
</style>
