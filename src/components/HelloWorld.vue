<template>
  <div id="desk">
    <canvas id="stage" />
  </div>
</template>

<script>
import { uii_Stage } from '@/editor/Stage'
import { uii_get } from '@/libs/totsuii/Main';

export default {
  data: () => ({
    editor: null
  }),
  methods: {
  },

  mounted() {
    this.editor = new uii_Stage(uii_get('#stage'))
  },
}

</script>

<style lang="scss">
#desk {
  width : 100%;
  height: 100%;
}
</style>
