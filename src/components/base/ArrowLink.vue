<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

/**
 * ArrowLink — Link with trailing arrow icon.
 *
 * Props:
 *   to      : string | object — Vue Router target
 *   href    : string          — External href (renders <a>)
 *   color   : 'blue' | 'teal' | 'dark'   (default: 'blue')
 */
const props = defineProps({
  to:    { type: [String, Object], default: null },
  href:  { type: String,  default: null },
  color: { type: String,  default: 'blue' }, // 'blue' | 'teal' | 'dark'
})

const tag = computed(() => {
  if (props.to)   return RouterLink
  if (props.href) return 'a'
  return 'span'
})

const colorStyle = computed(() => ({
  blue: 'var(--color-brand-blue)',
  teal: 'var(--color-teal)',
  dark: 'var(--color-text-heading)',
}[props.color] ?? 'var(--color-brand-blue)'))
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="inline-flex items-center gap-1.5 font-semibold transition-all duration-200 group"
    :style="{
      fontFamily: 'var(--font-ui)',
      fontSize:   'var(--text-sm)',
      color:      colorStyle,
    }"
  >
    <slot />
    <!-- Arrow icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </component>
</template>
