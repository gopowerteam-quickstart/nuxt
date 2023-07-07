declare module '#app' {
  interface PageMeta {
    menu?: MenuConfig
    requireAuth?: boolean
    requireRoles?: string[]
  }
}

export {};