import { injectKeys } from '@@/config/inject.config'

export function useProvide<T>(selector: (key: typeof injectKeys) => InjectionKey<T>, value: T) {
  provide(selector(injectKeys), value)
}
