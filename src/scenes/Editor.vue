<template>
  <v-content>
    <!--    Supplies    -->
    <v-card
      flat
      tile
      color="secondary"
      width="4rem"
      class="uii_card_border uii_br"
    >
      <Supplies />
    </v-card>
    
    <!--    Stage    -->
    <v-card
      id="desk"
      flat
      tile
      color="transparent"
      width="100%"
    >
      <canvas id="stage" />
    </v-card>
    
    <!--    Pallete    -->
    <v-card
      flat
      tile
      color="secondary"
      width="30rem"
      class="uii_card_border uii_bl"
    >
      <Pallete />
    </v-card>
  </v-content>
</template>

<script>
import Supplies from '../components/editor/Supplies.vue'
import Pallete from '../components/editor/Pallete.vue'
import { uii_Stage } from '@/editor/Stage'
import { uii_get } from '@/libs/totsuii/Main';

export default {
  components: {
    Supplies,
    Pallete,
  },
  data: () => ({
    editor: uii_Stage,
  }),
  mounted() {
    this.editor = new uii_Stage(uii_get('#stage'))
  },
}
</script>

<style lang="scss">
.v-content {
  height: 100%;

  div:first-child{
    display: flex;
  }
  
  .v-card:first-child {
    border-width: medium;
    border-color: var(--v-primary-darken1) !important;
  }
}
</style>
