<script setup lang="ts">
// ============================================================================
// SEO META TAGS
// ============================================================================
const config = useRuntimeConfig()

useSeoMeta({
  // Primary Meta Tags
  title: 'Solusi IT Sederhana untuk Bisnis & Belajar - Makin Mudah',
  description:
    'Aplikasi bisnis UMKM dan program mentoring IT terjangkau. Bayar seperlumu, akses dimana saja, didampingi mentor. Buat hidup makin mudah!',

  // Keywords for search engines
  keywords:
    'solusi IT mudah, aplikasi bisnis sederhana, mentoring IT Indonesia, belajar IT terjangkau, sistem kasir online, UMKM Indonesia',

  // Open Graph / Facebook
  ogTitle: 'Makin Mudah - Solusi IT Sederhana untuk Bisnis & Belajar',
  ogDescription:
    'Aplikasi bisnis untuk UMKM dan mentoring IT dengan harga terjangkau. Tanpa instalasi, bisa diakses dimana saja, didampingi mentor.',
  ogImage: `${config.public.siteUrl}/images/og-image.jpg`,
  ogUrl: config.public.siteUrl,
  ogType: 'website',
  ogLocale: 'id_ID',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Makin Mudah - Solusi IT Sederhana',
  twitterDescription:
    'Aplikasi bisnis dan mentoring IT terjangkau. Bayar seperlumu, akses dimana saja, didampingi mentor.',
  twitterImage: `${config.public.siteUrl}/images/og-image.jpg`,

  // Canonical URL
  canonical: config.public.siteUrl,
})

// ============================================================================
// STRUCTURED DATA (Schema.org)
// ============================================================================

// FAQ Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa sih biayanya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami pakai sistem "Bayar Seperlumu, Bayar Semaamu". Untuk Aplikasi Bisnis: Bulanan mulai dari Rp 99.000/bulan, Tahunan hemat 20%, atau Pay As You Go. Untuk Mentoring: Per Sesi Rp 50.000-150.000, Paket Bulanan Rp 400.000-800.000, dengan sesi pertama GRATIS. Tidak ada biaya tersembunyi atau kontrak jangka panjang.',
      },
    },
    {
      '@type': 'Question',
      name: 'Butuh komputer khusus gak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gak perlu! Semua solusi kami berbasis web, bisa diakses dari smartphone, tablet, atau laptop apa saja. Yang kamu butuh cuma koneksi internet (3G juga lancar) dan browser modern. Tidak perlu instalasi, tidak perlu spesifikasi khusus. Data tersimpan aman di cloud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gimana cara mulainya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Super gampang! 3 langkah: 1) Pilih yang kamu butuh - klik "Intip Yuk" untuk aplikasi bisnis atau "Mulai Dulu" untuk mentoring. 2) Hubungi kami - isi form kontak singkat, tim kami respon dalam 1x24 jam. 3) Langsung mulai - dapat akses aplikasi atau jadwal sesi mentoring dengan gratis trial tersedia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kalau ada masalah, bisa tanya siapa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kamu gak akan berjuang sendirian! Kami punya Tim Support (chat support, WhatsApp, email), Mentor Khusus untuk program mentoring, Dokumentasi & Tutorial lengkap, dan Komunitas Pengguna. Gak ada pertanyaan yang terlalu simpel, tim kami sabar dan ramah.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa aja yang didapat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paket all-in-one tanpa add-on. Aplikasi Bisnis: aplikasi lengkap berbasis web, update gratis, cloud storage, dashboard analytics, support tim, panduan & video tutorial, multi-device. Program Mentoring: sesi 1-on-1 dengan expert, materi terstruktur, project-based learning, code review, sertifikat, komunitas learner, bonus career guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Harus komitmen berapa lama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gak ada kontrak jangka panjang! Sistem flexible: Aplikasi Bisnis bisa bulanan (bisa berhenti kapan saja) atau tahunan (hemat 20%). Program Mentoring bisa per sesi, paket bulanan, atau program intensif 3-6 bulan. Tidak ada auto-renewal diam-diam, tidak ada biaya pembatalan. Kamu tetap karena puas, bukan karena terjebak kontrak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bisa coba dulu gak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bisa banget! Aplikasi Bisnis: Free Trial 14 hari (full features, no credit card), demo interaktif, video walkthrough, live demo via Zoom/Meet. Program Mentoring: Sesi pertama GRATIS, sample materi, preview kurikulum, bisa ganti mentor kalau tidak cocok. Coba dulu, cocok baru lanjut - no pressure!',
      },
    },
  ],
}

// Organization Structured Data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Makin Mudah',
  url: config.public.siteUrl,
  logo: `${config.public.siteUrl}/images/logo.png`,
  description:
    'Solusi IT sederhana untuk bisnis dan belajar - aplikasi UMKM dan mentoring IT terjangkau',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@makinmudah.com',
    availableLanguage: ['Indonesian'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  slogan: 'Bayar Seperlumu, Bayar Semaumu',
}

// Inject structured data into head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema),
    },
  ],
})
</script>

<template>
  <div>
    <CommonAppHeader />
    <LandingHeroSection />
    <LandingValuePropositions />
    <LandingProblemSolution />
    <LandingFaqAccordion />
    <LandingFinalCta />
    <CommonAppFooter />
  </div>
</template>
