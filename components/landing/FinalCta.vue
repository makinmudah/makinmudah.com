<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
// No imports needed for this simple presentational component
</script>

<template>
  <section class="bg-gradient-to-r from-gray-50 to-white py-16 md:py-20 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-8 text-3xl font-bold text-navy-900 md:text-4xl lg:text-5xl">
          Siap untuk hidup yang makin mudah?
        </h2>

        <NuxtLink
          to="/katalog"
          class="inline-block rounded-lg bg-teal-500 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Intip Solusinya
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
