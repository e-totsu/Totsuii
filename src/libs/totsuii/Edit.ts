///   Color   ///
class uii_color {
  private _R: number = 0
  private _G: number = 0
  private _B: number = 0
  private _A: number = 0

  constructor(R: number, G: number, B: number, A: number) {
    this._R = R
    this._G = G
    this._B = B
    this._A = A
  }


  ///   Gets   ///
  r(): number { return this._R }
  g(): number { return this._G }
  b(): number { return this._B }
  a(): number { return this._A }


  ///   Sets   ///
  set(R: number, G: number, B: number, A?: number) {
    this.set_r(R)
    this.set_g(G)
    this.set_b(B)

    if (A)
      this.set_a(A)
  }
  set_r(num: number) { this._R = num }
  set_g(num: number) { this._G = num }
  set_b(num: number) { this._B = num }
  set_a(num: number) { this._A = num }
}

export { uii_color }
