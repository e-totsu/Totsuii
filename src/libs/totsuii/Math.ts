///   Vector2   ///
class Vector2 {
  private _x: number = 0
  private _y: number = 0

  constructor()
  constructor(target: Vector2)
  constructor(target: { x: number, y: number })
  constructor(x: number, y: number)

  constructor(...args: any[]) {
    switch(args.length) {
      case 1:
        if ( args[0].x != null ) {
          this._x = args[0].x
          this._y = args[0].y
        } else {
          this._x = args[0].x()
          this._y = args[0].y()
        }
      break
      case 2:
        this._x = args[0]
        this._y = args[1]
      break
    }
  }

  
  ///   Sets   ///
  set(): void
  set(target: Vector2): void
  set(target: number): void
  set(target: { x: number, y: number }): void
  set(x: number, y: number): void

  set(...args: any[]): void {
    switch(args.length) {
      case 0:
        this.setX(0)
        this.setY(0)
      break
      case 1:
        this.setX(args[0])
        this.setY(args[0])
      break
      case 2:
        this.setX(args[0])
        this.setY(args[1])
      break
    }
  }

  setX(): void
  setX(target: Vector2): void
  setX(target: { x: number, y: number }): void
  setX(x: number): void

  setX(...args: any[]): void {
    switch(args.length) {
      case 0:
        this.setX(0)
      break
      case 1:
        if (args[0].x != null) {
          this._x = ceil(args[0].x)
        } else
        if (typeof args[0] != 'number') {
          this._x = ceil(args[0].x())
        } else {
          this._x = ceil(args[0])
        }
      break
    }
  }

  setY(): void
  setY(target: Vector2): void
  setY(target: { x: number, y: number }): void
  setY(y: number): void

  setY(...args: any[]): void {
    switch(args.length) {
      case 0:
        this.setY(0)
      break
      case 1:
        if (args[0].y != null) {
          this._y = ceil(args[0].y)
        } else
        if (typeof args[0] != 'number') {
          this._y = ceil(args[0].y())
        } else {
          this._y = ceil(args[0])
        }
      break
    }
  }


  ///   Gets   ///
  get(): { x: number, y: number } {
    return {
      x: this.x(),
      y: this.y()
    }
  }

  x(): number { return this._x }
  y(): number { return this._y }


  ///   Invert   ///
  inv(): { x: number, y: number } {
    return {
      x: this.invX(),
      y: this.invY()
    }
  }

  invX(): number {
    this.setX(-this._x)

    return this.x()
  }

  invY(): number {
    this.setY(-this._y)

    return this.y()
  }
  
  
  ///   Multiplies   ///
  mul(target: Vector2): void
  mul(target: number): void
  mul(num: { x: number, y: number }): void

  mul(...args: any[]): void {
    if (args[0].x != null) {
      this.mulX(args[0].x)
      this.mulY(args[0].y)
    } else {
      this.mulX(args[0])
      this.mulY(args[0])
    }
  }

  mulX(target: Vector2): void
  mulX(target: number): void
  mulX(num: { x: number, y: number }): void

  mulX(...args: any[]) {
    if (args[0].x != null) {
      this.setX(this.x() * args[0].x)
    } else
    if (typeof args[0] != 'number') {
      this.setX(this.x() * args[0].x())
    } else {
      this.setX(this.x() * args[0])
    }
  }

  mulY(target: Vector2): void
  mulY(target: number): void
  mulY(num: { x: number, y: number }): void

  mulY(...args: any[]) {
    if (args[0].y != null) {
      this.setY(this.y() * args[0].y)
    } else
    if (typeof args[0] != 'number') {
      this.setY(this.y() * args[0].y())
    } else {
      this.setY(this.y() * args[0])
    }
  }
  
  
  ///   Divides   ///
  dev(target: Vector2): void
  dev(target: number): void
  dev(num: { x: number, y: number }): void

  dev(...args: any[]): void {
    if (args[0].x != null) {
      this.devX(args[0].x)
      this.devY(args[0].y)
    } else {
      this.devX(args[0])
      this.devY(args[0])
    }
  }

  devX(target: Vector2): void
  devX(target: number): void
  devX(num: { x: number, y: number }): void

  devX(...args: any[]) {
    if (args[0].x != null) {
      this.setX(this.x() / args[0].x)
    } else
    if (typeof args[0] != 'number') {
      this.setX(this.x() / args[0].x())
    } else {
      this.setX(this.x() / args[0])
    }
  }

  devY(target: Vector2): void
  devY(target: number): void
  devY(num: { x: number, y: number }): void

  devY(...args: any[]) {
    if (args[0].y != null) {
      this.setY(this.y() / args[0].y)
    } else
    if (typeof args[0] != 'number') {
      this.setY(this.y() / args[0].y())
    } else {
      this.setY(this.y() / args[0])
    }
  }


  ///   Reverse   ///
  rev(): { x: number, y: number }
  rev(target: Vector2): { x: number, y: number }
  rev(num: { x: number, y: number }): { x: number, y: number }

  rev(...args: any[]): { x: number, y: number } {
    const this_pos = this.get()

    switch(args.length) {
      case 0:
        this.set(this_pos.y, this_pos.x)
      break
      case 1:
        this.set(args[0])
        args[0].set(this_pos)
      break
    }

    return this.get()
  }


  ///   Equals   ///
  equal(target: Vector2): Boolean
  equal(target: number): Boolean
  equal(num: { x: number, y: number }): Boolean

  equal(...args: any[]): Boolean {
    if (args[0].x != null) {
      return this.equalX(args[0].x) && this.equalY(args[0].y)
    } else {
      return this.equalX(args[0]) && this.equalY(args[0])
    }
  }

  equalX(target: Vector2): Boolean
  equalX(target: number): Boolean
  equalX(num: { x: number, y: number }): Boolean

  equalX(...args: any[]): Boolean {
    if (args[0].x != null) {
      return this.x() === args[0].x
    } else
    if (typeof args[0] != 'number') {
      return this.x() === args[0].x()
    } else {
      return this.x() === args[0]
    }
  }

  equalY(target: Vector2): Boolean
  equalY(target: number): Boolean
  equalY(num: { x: number, y: number }): Boolean

  equalY(...args: any[]): Boolean {
    if (args[0].x != null) {
      return this.y() === args[0].y
    } else
    if (typeof args[0] != 'number') {
      return this.y() === args[0].y()
    } else {
      return this.y() === args[0]
    }
  }


  ///   Distance   ///
  dis(target: Vector2): number
  dis(target: number): number
  dis(num: { x: number, y: number }): number

  dis(...args: any[]): number {
    if (args[0].x != null) {
      return ceil(Math.sqrt(
        Math.pow(this.disX(args[0].x), 2) +
        Math.pow(this.disY(args[0].y), 2)
      ))
    } else {
      return ceil(Math.sqrt(
        Math.pow(this.disX(args[0]), 2) +
        Math.pow(this.disY(args[0]), 2)
      ))
    }
  }

  disX(target: Vector2): number
  disX(target: number): number
  disX(num: { x: number, y: number }): number

  disX(...args: any[]): number {
    if (args[0].x != null) {
      return Math.abs(this.x()) - Math.abs(args[0].x)
    } else
    if (typeof args[0] != 'number') {
      return Math.abs(this.x()) - Math.abs(args[0].x())
    } else {
      return Math.abs(this.x()) - Math.abs(args[0])
    }
  }

  disY(target: Vector2): number
  disY(target: number): number
  disY(num: { x: number, y: number }): number

  disY(...args: any[]): number {
    if (args[0].x != null) {
      return Math.abs(this.y()) + Math.abs(args[0].y)
    } else
    if (typeof args[0] != 'number') {
      return Math.abs(this.y()) + Math.abs(args[0].y())
    } else {
      return Math.abs(this.y()) + Math.abs(args[0])
    }
  }


  ///   Length   ///
  len(): number {
    return Math.abs(Math.abs(this.x()) + Math.abs(this.y()))
  }


  ///   Move   ///
  move(target: Vector2): void
  move(target: number): void
  move(num: { x: number, y: number }): void

  move(...args: any[]): void {
    if (args[0].x != null) {
      this.moveX(args[0].x)
      this.moveY(args[0].y)
    } else {
      this.moveX(args[0])
      this.moveY(args[0])
    }
  }

  moveX(target: Vector2): void
  moveX(target: number): void
  moveX(num: { x: number, y: number }): void

  moveX(...args: any[]): void {
    if (args[0].x != null) {
      this.setX(this._x += args[0].x)
    } else
    if (typeof args[0] != 'number') {
      this.setX(this._x += args[0].x())
    } else {
      this.setX(this._x += args[0])
    }
  }

  moveY(target: Vector2): void
  moveY(target: number): void
  moveY(num: { x: number, y: number }): void

  moveY(...args: any[]): void {
    if (args[0].y != null) {
      this.setY(this._y += args[0].y)
    } else
    if (typeof args[0] != 'number') {
      this.setY(this._y += args[0].y())
    } else {
      this.setY(this._y += args[0])
    }
  }


  ///   Control   ///
  up()    { this._y++ }
  down()  { this._y-- }
  left()  { this._x-- }
  right() { this._x++ }
}


///   Ceil   ///
const ceil = (target: number): number => {
  return Math.ceil(target * 1000) /1000
}

export { Vector2, ceil }
