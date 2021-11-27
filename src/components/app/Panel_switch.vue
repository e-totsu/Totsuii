<template>
  <div>
    <v-tabs
      centered
      height="2rem"
      class="pt-1"
    >
      <v-tabs-slider
        color="red"
        class="darken-2"
      />
      <v-tab
        v-for="option in options"
        :key="option"

        class="subtitle-2"
      >
        {{ $t(option) }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>

export default {
  data: () => ({
    options: [
      'Design',
      'Prototype',
      'Share'
    ],
  }),
}
</script>

<style lang="scss">
#app .v-tabs-bar {
  background: transparent;
}
</style>
