///   Vector2   ///
class Vector2 {
  private _x: number = 0;
  private _y: number = 0;

  constructor(x: number = 0, y: number = 0) {
    this._x = ceil(x);
    this._y = ceil(y);
  }


  ///   Gets   ///
  get(): { x: number, y: number } {
    return {
      x: this.getX(),
      y: this.getY()
    }
  }

  getX(): number { return this._x }
  getY(): number { return this._y }

  
  ///   Sets   ///
  set(x: number, y: number) {
    this.setX(x);
    this.setY(y);
  }

  setX(x: number) { this._x = ceil(x); }
  setY(y: number) { this._y = ceil(y); }


  ///   Invert   ///
  invert(): { x: number, y: number } {
    return {
      x: this.invertX(),
      y: this.invertY()
    }
  }

  invertX(): number {
    this.setX(-this._x);

    return this.getX();
  }

  invertY(): number {
    this.setY(-this._y);

    return this.getY();
  }


  ///   Equals   ///
  equals(
    target: { x: number, y: number },
    TYPE?: 'x' | 'y'
  ): Boolean {
    switch(TYPE) {
      case 'x': return target.x === this.getX()
      case 'y': return target.y === this.getY()
      default:  return target.x === this.getX() &&
                       target.y === this.getY()
    }
  }


  ///   Distance   ///
  distance(
    target: { x: number, y: number },
    isDiagonal?: Boolean
  ): { x: number, y: number } |
      { x: number, y: number, d: number } {
      return !isDiagonal ?
          {
            x: ceil(Math.abs(Math.abs(this.getX()) - Math.abs(target.x))),
            y: ceil(Math.abs(Math.abs(this.getY()) - Math.abs(target.y)))
          }
        :
          {
            x: ceil(Math.abs(Math.abs(this.getX()) - Math.abs(target.x))),
            y: ceil(Math.abs(Math.abs(this.getY()) - Math.abs(target.y))),
            d: ceil(Math.sqrt(Math.abs(
                Math.pow(Math.abs(this.getX()) - Math.abs(target.x), 2) +
                Math.pow(Math.abs(this.getY()) - Math.abs(target.y), 2)
              )))
          }
        ;
  }
}


///   Ceil   ///
function ceil(target: number): number { return Math.ceil(target * 1000) /1000 }

export { Vector2, ceil };
