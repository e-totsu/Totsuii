import * as PIXI from 'pixi.js'
import {uii_get} from "@/libs/totsuii/Main";

export class uii_Stage {
  protected _canvas: HTMLElement
  private _graphics = new PIXI.Graphics()
  private _app = new PIXI.Application({})

  constructor(slot: HTMLElement) {
    this._canvas = slot

    this._app = new PIXI.Application({
      antialias  : true,
      transparent: true,
      resizeTo   : uii_get('#desk'),
      view       : this._canvas,
    })


    this._graphics.beginFill(0x000000, .5);
    this._graphics.drawRect(10, 20, 200, 100);

    this._app.stage.addChild(this._graphics)
  }
}
