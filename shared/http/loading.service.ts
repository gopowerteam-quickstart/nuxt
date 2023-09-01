import type { RequestPlugin } from '@gopowerteam/request'

export class LoadingService implements RequestPlugin {
  private data = reactive({
    isLoading: false,
  })

  public get value(): boolean {
    return this.data.isLoading
  }

  /**
   * 请求前置操作
   */
  public before = () => {
    this.data.isLoading = true
  }

  /**
   * 请求后置操作
   */
  public after = () => {
    this.data.isLoading = false
  }

  /**
   * catch 服务请求失败的时候处理
   */
  public catch = () => {
    this.data.isLoading = false
  }
}
