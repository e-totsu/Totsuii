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
    editor: null,
  }),
  mounted() {
    this.editor = new uii_Stage(uii_get('#stage'))
  },
}
</script>
