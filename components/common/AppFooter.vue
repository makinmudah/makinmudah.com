<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
// No imports needed for this simple presentational component

// ============================================================================
// DATA
// ============================================================================
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-100 py-6">
    <div class="container mx-auto px-4">
      <p class="text-center text-sm text-gray-600">
        © {{ currentYear }} Makin Mudah. All rights reserved.
      </p>
    </div>
  </footer>
</template>
