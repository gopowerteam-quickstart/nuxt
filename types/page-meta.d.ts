declare module '#app' {
  interface PageMeta {
    breadcrumb?: boolean,
    menu?: MenuConfig
    requireAuth?: boolean
    requireRoles?: string[]
  }
}

export {};