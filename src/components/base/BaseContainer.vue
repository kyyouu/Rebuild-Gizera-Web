<script setup>
/**
 * BaseContainer — Responsive content container.
 *
 * Max-width: 1300px (--container-site)
 * Centers horizontally with responsive horizontal padding.
 *
 * Props:
 *   as    : HTML tag to render (default: 'div')
 *   flush : Remove horizontal padding (default: false)
 */
defineProps({
  as:    { type: String,  default: 'div' },
  flush: { type: Boolean, default: false },
})
</script>

<template>
  <component
    :is="as"
    class="w-full mx-auto"
    :class="[
      !flush && 'px-4 sm:px-8',
    ]"
    :style="{ maxWidth: 'var(--container-site, 1300px)' }"
  >
    <slot />
  </component>
</template>
