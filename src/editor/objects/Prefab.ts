import * as PIXI from 'pixi.js'

import { gen_id } from '@/libs/totsuii/Main'
import { uii_Vector2 } from '@/libs/totsuii/Math';
import {uii_color} from "@/libs/totsuii/Edit";
import { Graphics } from 'pixi.js'

enum ORIGIN { DEFAULT, CENTER }

export abstract class uii_Prefab {
  private _graphic: Graphics = new Graphics()

  private _id          : string      = gen_id()
  private _size        : uii_Vector2 = new uii_Vector2()
  private _pos         : uii_Vector2 = new uii_Vector2()
  private _origin      : ORIGIN      = ORIGIN.CENTER
  private _zIndex      : number      = 0
  private _color       : uii_color   = new uii_color(0, 0, 0, 1)
  private _present     : boolean     = true
  private _visible     : boolean     = true
  private _transparent : boolean     = false
  private _disabled    : boolean     = false

  protected constructor(size?: uii_Vector2, position?: uii_Vector2) {
    if (size != null)
      this._size = size

    if (position != null)
      this.set_pos(position)
  }


  ///   Gets   ///
  origin      (): ORIGIN       { return this._origin      }

  id          (): string      { return this._id           }
  size        (): uii_Vector2 { return this._size         }
  pos         (): uii_Vector2 { return this._pos          }
  zIndex      (): number      { return this._zIndex       }
  color       (): uii_color   { return this._color        }
  present     (): boolean     { return this._present      }
  visible     (): boolean     { return this._visible      }
  transparent (): boolean     { return this._transparent  }
  disabled    (): boolean     { return this._disabled     }
  graphic     (): Graphics    { return this._graphic      }


  ///   Sets   ///
  set_origin(target: ORIGIN) { this._origin = target }

  set_id          (target: string     ): void { this._id           = target }
  set_size        (target: uii_Vector2): void { this._size         = target }
  set_pos         (target: uii_Vector2): void {
    this._pos.set(target)

    switch (this._origin) {
      case ORIGIN.CENTER:
        this._pos.move(-this.size().x() /2, -this.size().y() /2)
    }
  }
  set_zIndex      (target: number     ): void { this._zIndex       = target }
  set_color       (target: uii_color  ): void { this._color        = target }
  set_present     (target: boolean    ): void { this._present      = target }
  set_visable     (target: boolean    ): void { this._visible      = target }
  set_transparent (target: boolean    ): void { this._transparent  = target }
  set_disabled    (target: boolean    ): void { this._disabled     = target }


  ///   Update   ///
  update(time: number): void {
  }

  ///   Render   ///
  render() {
    if (this.present()) {
      this._graphic.zIndex = this._zIndex

      this._graphic.beginFill(
        PIXI.utils.rgb2hex([
          this._color.r(),
          this._color.g(),
          this._color.b()
        ]),
        this._color.a()
      )

      this._graphic.drawRect(
        this.pos().x(),
        this.pos().y(),
        this.size().x(),
        this.size().y()
      )

      this._graphic.endFill()
    }
  }
}
