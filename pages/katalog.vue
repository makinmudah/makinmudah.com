<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// ============================================================================
// SEO META
// ============================================================================
// ============================================================================
// SEO META TAGS
// ============================================================================
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  // Primary Meta Tags
  title: 'Katalog Aplikasi Bisnis & Mentoring IT - Makin Mudah',
  description:
    'Jelajahi aplikasi bisnis untuk UMKM dan program mentoring IT terjangkau. Sistem kasir, inventori, CRM, dan belajar web development dengan mentor berpengalaman.',

  // Keywords for search engines
  keywords:
    'aplikasi bisnis UMKM, mentoring IT Indonesia, belajar web development, bootcamp programming murah, sistem kasir online, aplikasi inventori, konsultan IT',

  // Open Graph / Facebook
  ogTitle: 'Katalog Aplikasi Bisnis & Mentoring IT - Makin Mudah',
  ogDescription:
    'Solusi IT terjangkau: aplikasi kasir, inventori, CRM untuk UMKM. Program mentoring web development dengan mentor berpengalaman.',
  ogImage: `${config.public.siteUrl}/images/og-image.jpg`,
  ogUrl: `${config.public.siteUrl}${route.path}`,
  ogType: 'website',
  ogLocale: 'id_ID',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Katalog Aplikasi Bisnis & Mentoring IT',
  twitterDescription:
    'Aplikasi bisnis UMKM dan program mentoring IT terjangkau. Bayar seperlumu, didampingi mentor.',
  twitterImage: `${config.public.siteUrl}/images/og-image.jpg`,

  // Canonical URL
  canonical: `${config.public.siteUrl}${route.path}`,
})

// ============================================================================
// STRUCTURED DATA (Schema.org)
// ============================================================================

// Breadcrumb Structured Data
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: config.public.siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Katalog',
      item: `${config.public.siteUrl}/katalog`,
    },
  ],
}

// Inject structured data into head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema),
    },
  ],
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
  skillLevel?: 'Pemula' | 'Menengah' | 'Lanjut'
  duration?: string
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
      '✅ Didampingi mentor berpengalaman',
      '✅ Support via WhatsApp grup',
      '✅ Sertifikat penyelesaian',
    ],
    pricing: 'Rp 499.000 (8 sesi) atau Rp 75.000/sesi',
    status: 'coming-soon',
    badge: 'Segera Hadir',
    skillLevel: 'Pemula',
    duration: '8 sesi',
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
      '✅ Didampingi mentor industry expert',
      '✅ Portfolio 3+ project lengkap',
    ],
    pricing: 'Rp 2.499.000 (3 bulan) atau Rp 899.000/bulan',
    status: 'coming-soon',
    badge: 'Segera Hadir',
    skillLevel: 'Menengah',
    duration: '3 bulan',
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
      '✅ Didampingi IT consultant berpengalaman',
      '✅ Training karyawan',
      '✅ Support after implementation',
    ],
    pricing: 'Rp 150.000/jam atau paket custom',
    status: 'coming-soon',
    badge: 'Segera Hadir',
    skillLevel: 'Lanjut',
    duration: 'Fleksibel',
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

// ============================================================================
// SCROLL TO SECTION
// ============================================================================
onMounted(() => {
  // Handle hash navigation (e.g., /katalog#aplikasi or /katalog#mentoring)
  const hash = window.location.hash
  if (hash) {
    const element = document.querySelector(hash)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <CommonAppHeader />

    <!-- Breadcrumb -->
    <div class="container mx-auto px-4">
      <CommonAppBreadcrumb />
    </div>

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
    <section id="aplikasi" class="scroll-mt-20 py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="mb-2 text-3xl font-bold text-navy-900">Aplikasi untuk Bisnis</h2>
          <p class="text-lg text-gray-600">
            Solusi digital terjangkau untuk mengelola bisnis kamu dengan lebih efisien
          </p>
        </div>

        <CatalogueGrid :items="aplikasiItems" />
      </div>
    </section>

    <!-- Mentoring Section -->
    <section id="mentoring" class="scroll-mt-20 bg-white py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="mb-2 text-3xl font-bold text-navy-900">Program Belajar & Mentoring</h2>
          <p class="text-lg text-gray-600">
            Upgrade skill IT dengan bimbingan mentor berpengalaman. Belajar sambil praktek!
          </p>
        </div>

        <!-- Trust Messaging -->
        <div class="mb-8 text-center">
          <p class="text-lg font-semibold text-teal-600">✨ Belajar Bareng, Bukan Sendirian</p>
        </div>

        <CatalogueGrid :items="mentoringItems" />
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
