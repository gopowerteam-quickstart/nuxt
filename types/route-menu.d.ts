
import MenuGroups from '@@/config/menu.config'

declare global {
   interface RouteMenu  {
    key: string
    title: string
    icon?: string
    index?: number
    parent?: typeof MenuGroups[number]['key']
    children?: RouteMenu[]
    path?: string
  }
}

export {}