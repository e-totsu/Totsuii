<template>
  <v-card
    class="
      the_footer
      d-flex
      justify-space-between
      px-2
    "
    flat
    width="100%"
    color="transparent"
  >
    <!--    Project name    -->
    <v-card
      flat
      color="transparent"
      class="
        d-flex
        align-center
      "
    >
      <span>{{ app_title }} © 2021</span>
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
      <!--    Language    -->
      <span>{{ app_language }}</span>

      <!--    Mode    -->
      <span>{{ app_mode }}</span>
      
      <!--    Search    -->
      <v-icon size="x-small">fas fa-search</v-icon>
    </v-card>
  </v-card>
</template>

<script lang="ts">
export default {
  props: ['app_title', 'app_language', 'app_mode'],
}
</script>

<style lang="scss">
.the_footer {
  font-size  : .8rem;
  font-weight: bold;

  span {
    letter-spacing: .08rem;

    color: var(--v-white-lighten1)
  }

  .v-card:last-child span {
    margin-right: 1.5rem;

    text-transform: uppercase;
  }
}
</style>
