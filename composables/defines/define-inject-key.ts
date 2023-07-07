export function defineInjectKey<T>(): InjectionKey<T> {
  return Symbol(Math.random().toString(32).slice(2)) as InjectionKey<T>
}
