<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ title }}

      <template v-slot:actions>
        <v-icon size="13 ">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
        <v-list-item
          v-for="(option, index) in options"
          :key="index"
        >
          <options
            :title="option.title"
            :pattern="option.pattern"
            :disabled="option.disabled"
          />
        </v-list-item>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import options from './Options';

export default {
  props: ['title', 'options', 'disabled'],
  components: {
    options
  }
}
</script>

<style lang="scss">

</style>
