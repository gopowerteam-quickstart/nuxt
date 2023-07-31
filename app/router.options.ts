import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: routes => [
    {
      name: 'home',
      path: '/',
      redirect: 'dashboard',
    },
    ...routes,
  ],
}
