
import MenuGroups from '@@/config/menu.config'

declare global {
   interface MenuConfig  {
    key: string
    title: string
    icon?: string
    index?: number
    parent?: typeof MenuGroups[number]['key']
    children?: MenuConfig[]
    path?: string
  }
}

export {}