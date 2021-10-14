import * as PIXI from 'pixi.js'

export class uii_Stage {
  private _canvas: HTMLElement
  private _graphics = new PIXI.Graphics()
  private _app = new PIXI.Application({})
  
  constructor(slot: HTMLElement) {
    this._canvas = slot
    
    this._app = new PIXI.Application({
      width      : 400,
      height     : 400,
      antialias  : true,
      transparent: true,
      view       : this._canvas,
    })


    this._graphics.beginFill(0x000000, .1);
    this._graphics.drawRect(10, 20, 200, 100);

    this._app.stage.addChild(this._graphics)
  }
}