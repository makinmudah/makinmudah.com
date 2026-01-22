<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
// No imports needed for this presentational component
// Images will be in public/images/ directory

// ============================================================================
// COMPONENT LOGIC
// ============================================================================
// No state needed - presentational component with static content
</script>

<template>
  <section class="bg-white py-12 md:py-16 lg:py-20">
    <div class="container mx-auto px-4">
      <!-- Problem-Solution Pair 1: IT Complexity -->
      <div class="mb-16 md:mb-20">
        <!-- Problem 1 -->
        <div class="mb-8">
          <h2 class="mb-4 text-2xl font-bold text-navy-900 md:text-3xl">
            IT terlalu ribet dan bikin pusing?
          </h2>
          <p class="text-base text-gray-600 md:text-lg">
            Kamu pernah ngerasa IT itu kayak bahasa alien? Instalasi ini-itu, setting sana-sini,
            error yang gak jelas artinya? Kami ngerti banget, makanya solusi kami dibuat sesederhana
            mungkin.
          </p>
        </div>

        <!-- Solution 1 -->
        <div class="mb-8">
          <h3 class="mb-4 text-xl font-semibold text-teal-600 md:text-2xl">
            Solusi kami dibuat sederhana, bahkan untuk yang gaptek sekalipun
          </h3>
          <p class="text-base text-gray-600 md:text-lg">
            Gak perlu jadi IT expert. Interface kami intuitif, langkah-langkahnya jelas, dan kalau
            bingung ada mentor yang siap bantu. Cukup klik, ikuti panduan, dan selesai!
          </p>
        </div>

        <!-- Visual Demo 1 -->
        <div class="flex justify-center">
          <img
            src="/images/simple-ui-demo.png"
            alt="Demo of simple and intuitive user interface"
            width="600"
            height="400"
            loading="lazy"
            class="h-auto max-w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <!-- Problem-Solution Pair 2: Pricing Concerns -->
      <div class="mb-16 md:mb-20">
        <!-- Problem 2 -->
        <div class="mb-8">
          <h2 class="mb-4 text-2xl font-bold text-navy-900 md:text-3xl">
            Khawatir budget bengkak atau bayar fitur yang gak kepake?
          </h2>
          <p class="text-base text-gray-600 md:text-lg">
            Khawatir budget bengkak? Atau malah bayar fitur yang gak kepake? Tenang, di Makin Mudah
            kamu bayar sesuai kebutuhan aja. Gak ada kontrak panjang yang mengikat.
          </p>
        </div>

        <!-- Solution 2 -->
        <div class="mb-8">
          <h3 class="mb-4 text-xl font-semibold text-teal-600 md:text-2xl">
            Bayar sesuai kebutuhan, fleksibel sesuai budget kamu
          </h3>
          <p class="text-base text-gray-600 md:text-lg">
            Mau bayar bulanan? Bisa. Mau commit setahun biar lebih murah? Bisa juga. Atau bayar
            sesuai pemakaian (pay-as-you-go)? Oke banget! Kamu yang tentuin sesuai kantong.
          </p>
        </div>

        <!-- Visual Demo 2 -->
        <div class="flex justify-center">
          <img
            src="/images/pricing-flexibility.png"
            alt="Illustration showing flexible pricing options and payment models"
            width="600"
            height="400"
            loading="lazy"
            class="h-auto max-w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <NuxtLink
          to="/katalog"
          class="inline-block rounded-lg bg-teal-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-600 md:text-lg"
        >
          Intip Solusinya
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
