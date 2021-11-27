<template>
  <v-card
    class="
      the_bar
      d-flex
      justify-space-between
      px-2
    "
    flat
    width="100%"
    color="transparent"
  >
    <!--    The Menu    -->
    <v-card
      flat
      color="transparent"
      class="
        d-flex
        align-center
      "
    >
      <the-menu></the-menu>
    </v-card>
    
    <!--    Project name    -->
    <v-card
      flat
      color="transparent"
      class="
        d-flex
        align-center
      "
      height="100%"
    >
      {{ project_title }}
    </v-card>
    
    <!--    Right side    -->
    <v-card
      flat
      color="transparent"
      class="
        d-flex
        align-center
      "
    >
      T E S T
    </v-card>
  </v-card>
</template>

<script lang="ts">
import The_menu from './The_menu.vue';

export default {
  props: ['project_title'],
  components: {
    TheMenu: The_menu,
  },
}
</script>

<style lang="scss" scoped>
.the_bar {
  ///    Set Project name always center    ///
  .v-card:nth-child(2) {
    position: absolute;

    width: max-content;

    left  : 0;
    right : 0;
    margin: 0 auto;
  }
}
</style>
