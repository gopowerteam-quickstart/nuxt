import { defineInjectKey } from "../composables/defines/define-inject-key";

export const injectKeys = {
  workspace: {
    collapsed: defineInjectKey<Ref<boolean>>(),
  },
}
