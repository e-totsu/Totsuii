import * as PIXI from 'pixi.js'
import { Viewport } from "pixi-viewport";
import { uii_get     } from "@/libs/totsuii/Main";
import { uii_Object  } from "@/editor/objects/Object";
import { uii_Vector2 } from "@/libs/totsuii/Math";

export class uii_Stage {
  private readonly _canvas: HTMLCanvasElement

  private _app     : PIXI.Application
  private _viewport: Viewport

  private _render_queue: uii_Object[] = []

  ///   Clock settings   ///
  private _FPS         : number = 10
  private _elapsed_time: number = 0
  private _FPS_delta   : number = 60 /this._FPS


  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas


    ///   Setting App   ///
    this._app = new PIXI.Application({
      antialias      : true,
      backgroundAlpha: 0,
      resizeTo       : uii_get('#desk'),
      view           : this._canvas,
    })


    ///   Setting Viewport   ///
    this._viewport = new Viewport({
      screenWidth : this._canvas.width,
      screenHeight: this._canvas.height,
      worldWidth  : 1000,
      worldHeight : 1000,

      interaction: this._app.renderer.plugins.interaction
    })

    this._app.stage.addChild(this._viewport)

    this._viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()


    ///   Setting Clock   ///
    this._app.ticker.add((delta) => this.tick(delta))


    ///   Loading objects   ///
    this._render_queue.push(new uii_Object(new uii_Vector2(100, 400), new uii_Vector2(this._app.screen.width /2, this._app.screen.height /2)))

    this._render_queue.forEach(obj => this._viewport.addChild(obj.graphic()))
  }


  ///   Clock   ///
  tick(delta: number) {
    this._elapsed_time += delta

    if(this._elapsed_time >= this._FPS_delta) {
      this.update(this._elapsed_time)
      this._elapsed_time = 0
    }
  }

  ///   Clock start/stop   ///
  clock_start() { this._app.ticker.start() }
  clock_stop()  { this._app.ticker.stop() }


  ///   Update   ///
  update(delta: number) {
    this._render_queue.forEach(obj => obj.update(delta))

    this.render()
  }


  ///   Render   ///
  render() {
    this._render_queue.forEach(obj => obj.render())
  }
}
