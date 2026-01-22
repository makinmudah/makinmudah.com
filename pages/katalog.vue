<script setup lang="ts">
// ============================================================================
// SEO META
// ============================================================================
useSeoMeta({
  title: 'Katalog - Makin Mudah',
  description:
    'Jelajahi aplikasi bisnis dan program mentoring IT kami. Solusi terjangkau untuk UMKM dan pelajar Indonesia.',
})

// ============================================================================
// TYPES
// ============================================================================
interface CatalogueItem {
  id: string
  title: string
  category: 'aplikasi' | 'mentoring'
  description: string
  features: string[]
  pricing: string
  status: 'available' | 'coming-soon'
  badge?: string
}

// ============================================================================
// DATA
// ============================================================================
const catalogueItems = ref<CatalogueItem[]>([
  // APLIKASI BISNIS
  {
    id: 'pos-system',
    title: 'Sistem Kasir Modern (POS)',
    category: 'aplikasi',
    description:
      'Sistem kasir berbasis web yang mudah digunakan untuk UMKM. Kelola penjualan, stok, dan laporan dengan simpel.',
    features: [
      '✅ Pencatatan transaksi otomatis',
      '✅ Manajemen stok barang',
      '✅ Laporan penjualan harian/bulanan',
      '✅ Dukungan multi-user',
      '✅ Akses dari mana saja (berbasis web)',
    ],
    pricing: 'Mulai dari Rp 99.000/bulan',
    status: 'coming-soon',
    badge: 'Segera Hadir',
  },
  {
    id: 'inventory-management',
    title: 'Manajemen Inventori',
    category: 'aplikasi',
    description:
      'Kelola stok barang dengan mudah. Tracking otomatis, notifikasi stok menipis, dan integrasi dengan POS.',
    features: [
      '✅ Tracking stok real-time',
      '✅ Notifikasi stok menipis',
      '✅ Riwayat pergerakan barang',
      '✅ Laporan inventori lengkap',
      '✅ Integrasi dengan sistem kasir',
    ],
    pricing: 'Mulai dari Rp 79.000/bulan',
    status: 'coming-soon',
    badge: 'Segera Hadir',
  },
  {
    id: 'customer-management',
    title: 'Manajemen Pelanggan (CRM)',
    category: 'aplikasi',
    description:
      'Kelola data pelanggan, riwayat pembelian, dan program loyalitas untuk meningkatkan penjualan.',
    features: [
      '✅ Database pelanggan lengkap',
      '✅ Riwayat transaksi per pelanggan',
      '✅ Program poin & loyalitas',
      '✅ WhatsApp broadcast marketing',
      '✅ Analisis perilaku pelanggan',
    ],
    pricing: 'Mulai dari Rp 89.000/bulan',
    status: 'coming-soon',
    badge: 'Segera Hadir',
  },

  // PROGRAM MENTORING
  {
    id: 'web-dev-fundamentals',
    title: 'Web Development Fundamentals',
    category: 'mentoring',
    description:
      'Belajar membuat website dari nol. HTML, CSS, JavaScript dengan project nyata dan bimbingan mentor.',
    features: [
      '✅ Materi: HTML, CSS, JavaScript',
      '✅ Project: Portfolio website sendiri',
      '✅ Sesi 1-on-1 dengan mentor',
      '✅ Support via WhatsApp grup',
      '✅ Sertifikat penyelesaian',
    ],
    pricing: 'Rp 499.000 (8 sesi) atau Rp 75.000/sesi',
    status: 'coming-soon',
    badge: 'Segera Hadir',
  },
  {
    id: 'fullstack-bootcamp',
    title: 'Full-Stack Development Bootcamp',
    category: 'mentoring',
    description:
      'Program intensif belajar frontend dan backend. Dari UI hingga database, siap jadi full-stack developer.',
    features: [
      '✅ Frontend: Vue.js/React + Tailwind',
      '✅ Backend: Node.js + Express',
      '✅ Database: PostgreSQL/MongoDB',
      '✅ Deploy production-ready app',
      '✅ Portfolio 3+ project lengkap',
    ],
    pricing: 'Rp 2.499.000 (3 bulan) atau Rp 899.000/bulan',
    status: 'coming-soon',
    badge: 'Segera Hadir',
  },
  {
    id: 'it-consultation',
    title: 'Konsultasi IT untuk Bisnis',
    category: 'mentoring',
    description:
      'Butuh solusi IT custom untuk bisnis? Konsultasi 1-on-1 dengan expert untuk automasi dan digitalisasi.',
    features: [
      '✅ Analisis kebutuhan bisnis',
      '✅ Rekomendasi solusi IT',
      '✅ Panduan implementasi',
      '✅ Training karyawan',
      '✅ Support after implementation',
    ],
    pricing: 'Rp 150.000/jam atau paket custom',
    status: 'coming-soon',
    badge: 'Segera Hadir',
  },
])

// ============================================================================
// COMPUTED
// ============================================================================
const aplikasiItems = computed(() =>
  catalogueItems.value.filter(item => item.category === 'aplikasi'),
)

const mentoringItems = computed(() =>
  catalogueItems.value.filter(item => item.category === 'mentoring'),
)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-navy-900"> Makin Mudah </NuxtLink>
          <NuxtLink to="/" class="text-sm text-gray-600 transition-colors hover:text-teal-600">
            ← Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-teal-50 to-white py-12 md:py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="mb-4 text-4xl font-bold text-navy-900 md:text-5xl">Katalog Makin Mudah</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">
          Pilih solusi yang cocok buat kamu. Aplikasi bisnis untuk UMKM atau program mentoring untuk
          upgrade skill IT.
        </p>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="mb-2 text-3xl font-bold text-navy-900">Aplikasi untuk Bisnis</h2>
          <p class="text-lg text-gray-600">
            Solusi digital terjangkau untuk mengelola bisnis kamu dengan lebih efisien
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="item in aplikasiItems"
            :key="item.id"
            class="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-teal-500 hover:shadow-md"
          >
            <!-- Coming Soon Badge -->
            <div
              v-if="item.badge"
              class="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white"
            >
              {{ item.badge }}
            </div>

            <h3 class="mb-3 text-xl font-bold text-navy-900">{{ item.title }}</h3>
            <p class="mb-4 text-gray-700">{{ item.description }}</p>

            <div class="mb-4 space-y-1">
              <p
                v-for="(feature, index) in item.features"
                :key="index"
                class="text-sm text-gray-600"
              >
                {{ feature }}
              </p>
            </div>

            <div class="mt-auto">
              <p class="mb-4 text-lg font-semibold text-teal-600">{{ item.pricing }}</p>
              <button
                class="w-full rounded-lg bg-teal-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="item.status === 'coming-soon'"
              >
                {{ item.status === 'coming-soon' ? 'Segera Hadir' : 'Pelajari Lebih Lanjut' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mentoring Section -->
    <section class="bg-white py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="mb-2 text-3xl font-bold text-navy-900">Program Belajar & Mentoring</h2>
          <p class="text-lg text-gray-600">
            Upgrade skill IT dengan bimbingan mentor berpengalaman. Belajar sambil praktek!
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="item in mentoringItems"
            :key="item.id"
            class="relative rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all hover:border-teal-500 hover:shadow-md"
          >
            <!-- Coming Soon Badge -->
            <div
              v-if="item.badge"
              class="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white"
            >
              {{ item.badge }}
            </div>

            <h3 class="mb-3 text-xl font-bold text-navy-900">{{ item.title }}</h3>
            <p class="mb-4 text-gray-700">{{ item.description }}</p>

            <div class="mb-4 space-y-1">
              <p
                v-for="(feature, index) in item.features"
                :key="index"
                class="text-sm text-gray-600"
              >
                {{ feature }}
              </p>
            </div>

            <div class="mt-auto">
              <p class="mb-4 text-lg font-semibold text-teal-600">{{ item.pricing }}</p>
              <button
                class="w-full rounded-lg bg-teal-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="item.status === 'coming-soon'"
              >
                {{ item.status === 'coming-soon' ? 'Segera Hadir' : 'Mulai Belajar' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-gray-50 to-white py-12 md:py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">Belum nemu yang cocok?</h2>
        <p class="mb-8 text-lg text-gray-700">
          Semua produk dan program di atas sedang dalam tahap pengembangan. Kami akan segera
          meluncurkannya!
        </p>
        <NuxtLink
          to="/"
          class="inline-block rounded-lg bg-teal-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-teal-600"
        >
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <CommonAppFooter />
  </div>
</template>
