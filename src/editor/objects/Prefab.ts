import { gen_id, range } from '@/libs/totsuii/Main'
import { uii_Vector2 } from '@/libs/totsuii/Math';
import { Graphics } from 'pixi.js'

export abstract class uii_Prefab {
  private _graphic: Graphics = new Graphics()

  private _id          : string      = gen_id()
  private _size        : uii_Vector2 = new uii_Vector2()
  private _pos         : uii_Vector2 = new uii_Vector2()
  private _zIndex      : number      = 0
  private _color       : number      = 0x000000
  private _transparency: number      = 1
  private _present     : boolean     = true
  private _visible     : boolean     = true
  private _transparent : boolean     = false
  private _disabled    : boolean     = false

  protected constructor()
  protected constructor(size?: uii_Vector2, position?: uii_Vector2)

  protected constructor(...args: any[]) {
    if (args[0] != null) {
      this._size = args[0];
      this._pos  = args[1];
    }
  }


  ///   Gets   ///
  id          (): string      { return this._id           }
  size        (): uii_Vector2 { return this._size         }
  pos         (): uii_Vector2 { return this._pos          }
  zIndex      (): number      { return this._zIndex       }
  color       (): number      { return this._color        }
  transparency(): number      { return this._transparency }
  present     (): boolean     { return this._present      }
  visible     (): boolean     { return this._visible      }
  transparent (): boolean     { return this._transparent  }
  disabled    (): boolean     { return this._disabled     }
  graphic     (): Graphics    { return this._graphic      }


  ///   Sets   ///
  set_id          (target: string)     : void { this._id           = target }
  set_size        (target: uii_Vector2): void { this._size         = target }
  set_pos         (target: uii_Vector2): void { this._pos          = target }
  set_zIndex      (target: number)     : void { this._zIndex       = target }
  set_color       (target: number)     : void { this._color        = target }
  set_transparency(target: number)     : void { this._transparency = range(target, new uii_Vector2(0, 1)) }
  set_present     (target: boolean)    : void { this._present      = target }
  set_visable     (target: boolean)    : void { this._visible      = target }
  set_transparent (target: boolean)    : void { this._transparent  = target }
  set_disabled    (target: boolean)    : void { this._disabled     = target }


  ///   Update   ///
  update(time: number): void {
  }

  ///   Render   ///
  render() {
    if (this.present()) {
      this._graphic.zIndex = this._zIndex

      this._graphic.beginFill(this.color(), this.transparency())

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
