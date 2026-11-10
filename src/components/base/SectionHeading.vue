<script setup>
/**
 * SectionHeading — Reusable section title + subtitle block.
 *
 * Props:
 *   title    : string — required
 *   subtitle : string — optional
 *   tag      : HTML heading tag              (default: 'h2')
 *   align    : 'left' | 'center' | 'right'  (default: 'left')
 */
defineProps({
  title:    { type: String,  required: true },
  subtitle: { type: String,  default: '' },
  tag:      { type: String,  default: 'h2' },
  align:    { type: String,  default: 'left' },   // 'left' | 'center' | 'right'
})
</script>

<template>
  <div
    :class="[
      'flex flex-col gap-3',
      align === 'center' && 'items-center text-center',
      align === 'right'  && 'items-end text-right',
      align === 'left'   && 'items-start text-left',
    ]"
  >
    <!-- Optional slot: tag/badge above the title -->
    <slot name="tag" />

    <component
      :is="tag"
      class="font-bold"
      :style="{
        fontFamily:     'var(--font-display)',
        fontSize:       'var(--text-h2)',
        lineHeight:     'var(--text-h2--line-height, 1.2)',
        letterSpacing:  'var(--text-h2--letter-spacing, -0.032em)',
        color:          'var(--color-text-heading)',
      }"
    >
      <slot>{{ title }}</slot>
    </component>

    <p
      v-if="subtitle"
      :style="{
        fontFamily: 'var(--font-body)',
        fontSize:   'var(--text-body)',
        lineHeight: 'var(--text-body--line-height, 1.6)',
        color:      'var(--color-text-secondary)',
        maxWidth:   align === 'center' ? '600px' : undefined,
      }"
    >
      {{ subtitle }}
    </p>

    <!-- Optional slot: content below subtitle -->
    <slot name="below" />
  </div>
</template>
