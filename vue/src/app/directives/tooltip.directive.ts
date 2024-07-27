import { Tooltip } from 'bootstrap'

export default {
  mounted(el: any, binding: any): void {
    const options = binding.value
    const tooltip = new Tooltip(el, {
      placement: options.position,
      title: options.text,
      ...(options.trigger && { trigger: options.trigger }),
      ...(options.delay && { delay: options.delay }),
      ...(options.offset && { offset: options.offset })
    })
    el.tooltip = tooltip
  },
  unmounted(el: any): void {
    el.tooltip.dispose()
  }
}
