<template>
  <div id="editor">
    <div id="desk">
      <canvas id="stage" />
    </div>
  </div>
</template>

<script>
import { uii_Stage } from '@/editor/Stage'
import { uii_get } from '@/libs/totsuii/Main';

export default {
  data: () => ({
    kot: null
  }),
  methods: {
  },

  mounted() {
    this.kot = new uii_Stage(uii_get('#stage'))
  },
}

</script>

<style lang="scss">
#desk, #editor {
  width : 100%;
  height: 100%;

  border: 1px dashed purple;
}
</style>
