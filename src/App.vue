<script setup>
/**
 * App.vue — Root component.
 * Wraps all pages in DefaultLayout (Navbar + slot + Footer).
 * Day 7: DefaultLayout and AppNavbar implemented.
 */
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
