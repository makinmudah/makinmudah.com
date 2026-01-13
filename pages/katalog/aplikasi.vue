<script setup lang="ts">
useSeoMeta({
  title: 'Katalog Aplikasi - Makin Mudah',
  description: 'Katalog aplikasi bisnis untuk UMKM',
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-6">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold text-navy-900">Katalog Aplikasi</h1>
      <p class="text-lg text-gray-600">Halaman katalog aplikasi sedang dalam pengembangan.</p>
      <NuxtLink
        to="/"
        class="mt-6 inline-block rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-600"
      >
        Kembali ke Beranda
      </NuxtLink>
    </div>
  </div>
</template>
