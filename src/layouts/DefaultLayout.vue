<script setup>
/**
 * DefaultLayout — Main site layout wrapper.
 *
 * Structure:
 *   AppNavbar (fixed)
 *   <main> with <slot /> for page content
 *   Footer — to be implemented on Day 8
 */
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <!-- AppNavbar renders its own spacer div to push content below the fixed bar -->
  <AppNavbar />

  <!-- Page content -->
  <main class="flex-1">
    <slot />
  </main>

  <!-- Footer placeholder — will be implemented on Day 8 -->
  <!-- <AppFooter /> -->
</template>
