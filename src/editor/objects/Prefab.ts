import { gen_id, range } from '@/libs/Totsuii/Main'
import { Vector2 } from '@/libs/totsuii/Math';
import { Graphics } from 'pixi.js'

const graphic = new Graphics()

export default abstract class Prefab {
  private _id          : string  = gen_id()
  private _size        : Vector2 = new Vector2()
  private _pos         : Vector2 = new Vector2()
  private _color       : number  = 0x000
  private _transparency: number  = 1
  private _present     : boolean = true
  private _visable     : boolean = true
  private _transparent : boolean = false
  private _disabled    : boolean = false

  constructor()
  constructor(size?: Vector2, position?: Vector2)

  constructor(...args: any[]) {
    if (args[0] != null)
      this._size = args[0];

    if (args[0] != null)
      this._size = args[1];
  }

  
  ///   Gets   ///
  id          (): string  { return this._id           }
  size        (): Vector2 { return this._size         }
  pos         (): Vector2 { return this._pos          }
  color       (): number  { return this._color        }
  transparency(): number  { return this._transparency }
  present     (): boolean { return this._present      }
  visable     (): boolean { return this._visable      }
  transparent (): boolean { return this._transparent  }
  disabled    (): boolean { return this._disabled     }


  ///   Sets   ///
  set_id          (target: string) : void { this._id           = target }
  set_size        (target: Vector2): void { this._size         = target }
  set_pos         (target: Vector2): void { this._pos          = target }
  set_color       (target: number) : void { this._color        = target }
  set_transparency(target: number) : void { this._transparency = range(target, new Vector2(0, 1)) }
  set_present     (target: boolean): void { this._present      = target }
  set_visable     (target: boolean): void { this._visable      = target }
  set_transparent (target: boolean): void { this._transparent  = target }
  set_disabled    (target: boolean): void { this._disabled     = target }

  
  ///   Update   ///
  update(): void {

  }

  
  ///   Render   ///
  render(): void {
    if (this.present()) {
      graphic.beginFill(this.color(), this.transparency() )

      graphic.drawRect(
        this.pos().x(),
        this.pos().y(),
        this.size().x(),
        this.size().y()
      );
    }
  }
}
