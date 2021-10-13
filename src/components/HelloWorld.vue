<template>
  <div>
    <canvas id="pixi"></canvas>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import * as obj from '@/editor/objects/Object'
import { Vector2 } from '@/libs/totsuii/Math'

export default {
  data: () => ({
    kot: new obj.Object(new Vector2(2, 3), new Vector2(3, 3))
  }),
  methods: {
    drawPixi() {
      const canvas = document.getElementById('pixi')

      console.log(this.kot.get())

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