<script setup>
/**
 * BaseTag — Label/tag component using design tokens.
 *
 * Props:
 *   variant : 'default' | 'blue' | 'teal' | 'dark'   (default: 'default')
 *   size    : 'sm' | 'md'                             (default: 'sm')
 */
defineProps({
  variant: { type: String, default: 'default' }, // 'default' | 'blue' | 'teal' | 'dark'
  size:    { type: String, default: 'sm' },       // 'sm' | 'md'
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center font-semibold uppercase tracking-widest rounded-full',
      size === 'md' ? 'px-4 py-1.5 text-xs' : 'px-3 py-1 text-[11px]',
      variant === 'blue'    && 'bg-[var(--color-brand-blue-pale)] text-[var(--color-brand-blue-navy)]',
      variant === 'teal'    && 'bg-[var(--color-teal-light)] text-[var(--color-teal-dark)]',
      variant === 'dark'    && 'bg-[var(--color-dark-card)] text-white/70',
      (variant === 'default' || !['blue','teal','dark'].includes(variant)) && 'bg-[var(--color-bg-pale-teal)] text-[var(--color-teal)]',
    ]"
    :style="{ fontFamily: 'var(--font-ui)', letterSpacing: 'var(--tracking-widest)' }"
  >
    <slot />
  </span>
</template>
