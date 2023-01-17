export { default as CompsItemWeight2 } from '../..\\components\\CompsItemWeight2.vue'
export { default as CompsItemWeight3 } from '../..\\components\\CompsItemWeight3.vue'
export { default as CompsItemWeight4 } from '../..\\components\\CompsItemWeight4.vue'
export { default as FilterMenu } from '../..\\components\\FilterMenu.vue'
export { default as HelloWorld } from '../..\\components\\HelloWorld.vue'
export { default as Help } from '../..\\components\\Help.vue'
export { default as RegLogMenu } from '../..\\components\\RegLogMenu.vue'

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
