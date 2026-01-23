<script setup lang="ts">
// ============================================================================
// DATA
// ============================================================================
const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'Tentang Kami', href: '#' },
  { label: 'Kontak', href: '#' },
  { label: 'Kebijakan Privasi', href: '#' },
]
</script>

<template>
  <footer class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <!-- Footer Links -->
      <nav aria-label="Footer navigation" class="mb-6 flex flex-wrap justify-center gap-6 text-sm">
        <a
          v-for="link in footerLinks"
          :key="link.label"
          :href="link.href"
          class="rounded text-gray-600 transition-colors hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Copyright -->
      <p class="text-center text-sm text-gray-600">
        © {{ currentYear }} Makin Mudah. All rights reserved.
      </p>
    </div>
  </footer>
</template>
