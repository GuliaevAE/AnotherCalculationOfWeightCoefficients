export const CompsItemWeight2 = () => import('../..\\components\\CompsItemWeight2.vue' /* webpackChunkName: "components/comps-item-weight2" */).then(c => wrapFunctional(c.default || c))
export const CompsItemWeight3 = () => import('../..\\components\\CompsItemWeight3.vue' /* webpackChunkName: "components/comps-item-weight3" */).then(c => wrapFunctional(c.default || c))
export const CompsItemWeight4 = () => import('../..\\components\\CompsItemWeight4.vue' /* webpackChunkName: "components/comps-item-weight4" */).then(c => wrapFunctional(c.default || c))
export const HelloWorld = () => import('../..\\components\\HelloWorld.vue' /* webpackChunkName: "components/hello-world" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
