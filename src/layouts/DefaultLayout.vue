<script setup>
/**
 * DefaultLayout — Main site layout wrapper.
 *
 * Structure:
 *   Wrapper (.layout-wrapper: flex flex-col min-h-screen)
 *   AppNavbar (fixed, top: 0)
 *   <main class="flex-1 w-full min-h-screen"> with <slot /> for page content
 *   AppFooter — Site-wide footer
 */
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="layout-wrapper flex flex-col min-h-screen">
    <!-- Fixed Glassmorphic Navbar -->
    <AppNavbar />

    <!-- Page content: flex-1 keeps footer at bottom, min-h-screen prevents footer from jumping into viewport -->
    <main class="flex-1 w-full min-h-screen">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
