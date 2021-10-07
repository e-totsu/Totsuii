<template>
  <div>
    <canvas id="pixi"></canvas>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
require('./../libs/totsuii/Main.ts')

export default {
  data: () => ({

  }),
  methods: {
    drawPixi() {
      const canvas = document.getElementById('pixi')

      const app = new PIXI.Application({
        width: 400,
        height: 400,
        antialias: true,
        transparent: true,
        view: canvas,
      })

      let graphics = new PIXI.Graphics()
      graphics.beginFill(0x000000, .1);
      graphics.drawRect(10, 20, 200, 100);

      app.stage.addChild(graphics)
    },
  },

  mounted() {
    this.drawPixi()
  },
}

</script>