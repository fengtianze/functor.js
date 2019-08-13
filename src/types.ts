export interface Functor<T> {
  map: <V>(fn: (arg: T) => V) => Functor<V>
}
