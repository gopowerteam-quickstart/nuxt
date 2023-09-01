
import { AdapterResponse, ResponseInterceptor, setup } from '@gopowerteam/request'
import { AxiosAdapter } from '@gopowerteam/request/adapters'
import {Message} from '@arco-design/web-vue'
import { TokenService } from '~/shared/http/token.service'

class StatusInterceptors implements ResponseInterceptor {
  exec(respone: AdapterResponse) {
    return respone.status === 200
  }
}

class SuccessInterceptors implements ResponseInterceptor {
  exec(response: AdapterResponse) {
    return response.data
  }
}

class ErrorInterceptors implements ResponseInterceptor {
  exec(response: AdapterResponse) {
    return response.data
  }
}

class ExceptionInterceptors implements ResponseInterceptor {
  onStateCode400(response: AdapterResponse) {
    const { message } = response?.data || ({} as any)

    if (message)
      Message.error(message)
  }

  /**
     * 401错误码处理
     * 仅处理登陆过期问题
     * @param response
     */
  onStateCode403() {
    const router = useRouter()
    
    // TODO
  }

  exec(response: AdapterResponse) {
    switch (response.status) {
      case 400:
        this.onStateCode400(response)
        break
      case 403:
        this.onStateCode403()
        break
    }
  }
}



export default defineNuxtPlugin(nuxtApp => {
  const {gateway} = useRuntimeConfig()
  //   置服务端信息
  setup({
    gateway: gateway,
    adapter: new AxiosAdapter(),
    qs: {
      arrayFormat: 'repeat',
      skipNulls: true,
      allowDots: true,
      encodeValuesOnly: true,
      encode: true,
    },
    interceptors: {
      status: new StatusInterceptors(),
      success: new SuccessInterceptors(),
      error: new ErrorInterceptors(),
      exception: new ExceptionInterceptors(),
    },
    plugins: [new TokenService()],
  })
})