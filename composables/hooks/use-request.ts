import type { NitroFetchRequest, AvailableRouterMethod as _AvailableRouterMethod } from 'nitropack'
import type { FetchContext, FetchError, FetchResponse } from 'ofetch'
import type { AsyncData, KeysOf, PickFrom } from '#app/composables/asyncData'
import type { FetchResult, UseFetchOptions } from '#app/composables/fetch'
import { useFetch } from 'nuxt/app'

type AvailableRouterMethod<R extends NitroFetchRequest> = Uppercase<_AvailableRouterMethod<R>>

function onRequest(fetchOptions: FetchContext): Promise<void> | void {
  const userStore = useUserStore()
  const { options, request } = fetchOptions

  // Append Params
  if (typeof options.params === 'object' && typeof request === 'string') {
    for (const [key, val] of Object.entries(options.params)) {
      if (['string', 'number'].includes(typeof val)) {
        fetchOptions.request = request.replaceAll(`:${key}`, String(val))
      }
    }

    delete options.params
  }

  if (userStore.accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${userStore.accessToken}`,
    }
  }
}

function onRequestError(error: FetchContext): Promise<void> | void {
  const user = useUserStore()

  switch (error.response?.status) {
    case 403: {
      user.logout()
      navigateTo('/')
      break
    }
  }
}

function onResponseError(context: FetchContext & {
  response: FetchResponse<{ message: string }>
}) {
  const data = context.response._data as { message?: string }
  console.error(data, context.response)
  if (data?.message) {
    Message.error(data.message)
  }
}

export const $request = $fetch.create({
  onRequest,
  onRequestError,
  onResponseError,
})

export function useRequest<ResT = void, ErrorT = FetchError, ReqT extends NitroFetchRequest = NitroFetchRequest, Method extends AvailableRouterMethod<ReqT> = ResT extends void ? 'get' extends AvailableRouterMethod<ReqT> ? 'get' : AvailableRouterMethod<ReqT> : AvailableRouterMethod<ReqT>, _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT, DataT = _ResT, PickKeys extends KeysOf<DataT> = KeysOf<DataT>, DefaultT = DataT>(request: Ref<ReqT> | ReqT | (() => ReqT), opts?: UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method>): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | null> {
  return (useFetch)(request, {
    onRequest,
    onRequestError,
    ...opts,
  })
}
