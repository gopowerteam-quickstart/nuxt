import { injectKeys } from '@@/config/inject.config'

export function useInject<T>(selector: (keys: typeof injectKeys) => InjectionKey<T>): T {
  return inject(selector(injectKeys)) as T
}
