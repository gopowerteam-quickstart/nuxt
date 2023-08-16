declare module '#app' {
  interface PageMeta {
    breadcrumb?: boolean,
    menu?: RouteMenu
    requireAuth?: boolean
    requireRoles?: string[]
  }
}

export {};