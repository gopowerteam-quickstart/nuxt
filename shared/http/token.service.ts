import type { RequestPlugin, RequestSendOptions } from '@gopowerteam/request'
import { useStore } from '@/store'

export class TokenService implements RequestPlugin {
  public before(options: RequestSendOptions) {
    const store = useStore()

    if (store.user.token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${store.user.token}`,
      }
    }
  }
}
