class Maybe {
  static of(value) {
    return new Maybe(value)
  }

  constructor(value) {
    this._value = value
  }

  isNothing() {
    return this._value === undefined || this._value === null
  }

  map(fn) {
    return this.isNothing() ? this._value : Maybe.of(fn(this._value))
  }

  flatMap(fn) {
    return this.map(fn)._value
  }

  ap(functor) {
    return this.isNothing() ? this : functor.map(this._value)
  }
}

module.exports = { Maybe }
