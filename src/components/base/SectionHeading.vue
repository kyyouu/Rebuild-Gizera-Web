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
      class="font-display text-h2 text-text-heading font-normal"
    >
      <slot>{{ title }}</slot>
    </component>

    <p
      v-if="subtitle"
      :class="[
        'font-body text-body text-text-secondary',
        align === 'center' && 'max-w-[600px]',
      ]"
    >
      {{ subtitle }}
    </p>

    <!-- Optional slot: content below subtitle -->
    <slot name="below" />
  </div>
</template>
