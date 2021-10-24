import * as PIXI from 'pixi.js'
import { uii_get     } from "@/libs/totsuii/Main";
import { uii_Object  } from "@/editor/objects/Object";
import { uii_Vector2 } from "@/libs/totsuii/Math";

export class uii_Stage {
  private readonly _canvas: HTMLCanvasElement

  private _app = new PIXI.Application({})

  private _render_queue: uii_Object[] = []

  ///   Clock settings   ///
  private _FPS         : number = 10
  private _elapsed_time: number = 0
  private _FPS_delta   : number = 60 /this._FPS


  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas

    this._app = new PIXI.Application({
      antialias      : true,
      backgroundAlpha: 0,
      resizeTo       : uii_get('#desk'),
      view           : this._canvas,
    })


    ///   Clock   ///
    this._app.ticker.minFPS = 5
    this._app.ticker.maxFPS = 5

    this._app.ticker.add((delta) => this.tick(delta))


    ///   Load objects   ///
    this._render_queue.push(new uii_Object(new uii_Vector2(100, 100)))

    this._render_queue.forEach(obj => this._app.stage.addChild(obj.graphic()))
  }

  ///   Clock   ///
  tick(delta: number) {
    this._elapsed_time += delta

    if(this._elapsed_time >= this._FPS_delta) {
      this.update(this._elapsed_time)
      this._elapsed_time = 0
    }
  }

  clock_start() { this._app.ticker.start() }
  clock_stop()  { this._app.ticker.stop() }

  update(delta: number) {
    this._render_queue.forEach(obj => obj.update(delta))

    this.render()
  }


  render() {
    this._render_queue.forEach(obj => obj.render())
  }
}
