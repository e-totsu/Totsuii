<template>
  <v-content>
    <v-btn @click="load_last_pro">{{ $t('launcher.load_last_pro') }}</v-btn>
  </v-content>
</template>

<script lang="ts">
export default {
  methods: {
    load_last_pro() {
      this.$router.push({ name: 'editor', params: { project: 'Totsuii' } })
    },
  },
}
</script>
