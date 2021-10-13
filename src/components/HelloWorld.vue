<template>
  <div>
    <canvas id="pixi"></canvas>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import uii_Object from '@/editor/objects/Object'
import { uii_Vector2 } from '@/libs/totsuii/Math'

export default {
  data: () => ({
    kot: new uii_Object(new uii_Vector2(2, 3), new uii_Vector2(3, 3))
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
