import { Functor } from './types'

export class Maybe<L, R> implements Functor<L | R> {
  static of<L, R>(value: L | R) {
    return new Maybe(value)
  }

  constructor(private value: L | R) {}

  isNothing() {
    return this.value === undefined || this.value === null
  }

  map<V>(fn: (arg: R) => V) {
    return this.isNothing() ? this : Maybe.of<L, V>(fn(this.value as R))
  }

  // flatMap(fn) {
  //   return this.map(fn).value
  // }

  // ap(functor) {
  //   return this.isNothing() ? this : functor.map(this.value)
  // }
}
