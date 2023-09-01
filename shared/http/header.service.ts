import type { RequestPlugin, RequestSendOptions } from '@gopowerteam/request'

export class HeaderService implements RequestPlugin {
  private headers: Record<string, string>

  constructor(headers: Record<string, string>) {
    this.headers = headers
  }

  public before(options: RequestSendOptions) {
    options.headers = {
      ...options.headers,
      ...this.headers,
    }
  }
}
