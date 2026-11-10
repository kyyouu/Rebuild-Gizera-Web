<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

/**
 * BaseButton — Reusable button/link component.
 *
 * Props:
 *   variant  : 'solid' | 'outline'              (default: 'solid')
 *   as       : 'button' | 'a' | 'router-link'   (default: 'button')
 *   href     : string  — required when as='a'
 *   to       : string | object — required when as='router-link'
 *   disabled : boolean
 *   type     : 'button' | 'submit' | 'reset'    (default: 'button')
 *   size     : 'sm' | 'md' | 'lg'               (default: 'md')
 */
const props = defineProps({
  variant:  { type: String,  default: 'solid' },     // 'solid' | 'outline'
  as:       { type: String,  default: 'button' },    // 'button' | 'a' | 'router-link'
  href:     { type: String,  default: null },
  to:       { type: [String, Object], default: null },
  disabled: { type: Boolean, default: false },
  type:     { type: String,  default: 'button' },
  size:     { type: String,  default: 'md' },        // 'sm' | 'md' | 'lg'
})

defineEmits(['click'])

const tag = computed(() => {
  if (props.as === 'router-link') return RouterLink
  if (props.as === 'a')           return 'a'
  return 'button'
})

const baseClasses = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-ui',
  'font-semibold',
  'transition-all',
  'duration-200',
  'rounded-lg',
  'cursor-pointer',
  'select-none',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
]

const sizeClasses = computed(() => ({
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}[props.size] ?? 'px-6 py-3 text-sm'))

const variantClasses = computed(() => {
  if (props.variant === 'outline') {
    return [
      'border-2',
      'border-brand-blue',
      'text-brand-blue',
      'bg-transparent',
      'hover:bg-brand-blue',
      'hover:text-white',
      'focus-visible:ring-brand-blue',
    ]
  }
  // solid (default)
  return [
    'bg-brand-blue',
    'text-white',
    'hover:bg-brand-blue-hover',
    'shadow-button',
    'focus-visible:ring-brand-blue',
  ]
})

const disabledClasses = computed(() =>
  props.disabled ? ['opacity-50', 'cursor-not-allowed', 'pointer-events-none'] : []
)

const classes = computed(() => [
  ...baseClasses,
  sizeClasses.value,
  ...variantClasses.value,
  ...disabledClasses.value,
])

const attrs = computed(() => {
  const a = {}
  if (props.as === 'button') {
    a.type     = props.type
    a.disabled = props.disabled || undefined
  }
  if (props.as === 'a')           a.href = props.href
  if (props.as === 'router-link') a.to   = props.to
  return a
})
</script>

<template>
  <component
    :is="tag"
    v-bind="attrs"
    :class="classes"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>
