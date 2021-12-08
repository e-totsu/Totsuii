<template>
  <v-expansion-panel class="
    d-flex
    flex-column
    transparent
    rounded-0
  ">
    <v-expansion-panel-header>
      <h4>{{ title.toUpperCase() }}</h4>

      <template v-slot:actions>
        <v-icon size="13">
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
.v-expansion-panel-content__wrap { flex-direction: column }

.v-expansion-panel::before {
  box-shadow: unset!important;

  border-bottom: 2px solid var(--v-primary-darken1);
}
</style>
