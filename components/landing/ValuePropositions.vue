<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
import { TagIcon, WindowIcon, UsersIcon } from '@heroicons/vue/24/outline'

// ============================================================================
// COMPONENT LOGIC
// ============================================================================
// No state needed - presentational component
</script>

<template>
  <section
    role="region"
    aria-label="Value Propositions"
    class="bg-gray-100 py-12 md:py-16 lg:py-20"
  >
    <div class="container mx-auto px-4">
      <!-- Three-column grid: stacks on mobile, side-by-side on desktop -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Column 1: Pricing Flexibility -->
        <div class="text-center">
          <TagIcon class="mx-auto mb-4 h-16 w-16 text-teal-500" aria-hidden="true" />
          <h2 class="mb-3 text-xl font-semibold text-navy-900">Bayar Seperlumu, Bayar Semaumu</h2>
          <p class="text-base text-gray-600">
            Tidak ada kontrak panjang atau biaya tersembunyi. Pilih paket yang sesuai dengan
            kebutuhan dan budget Anda. Upgrade atau downgrade kapan saja tanpa ribet.
          </p>
        </div>

        <!-- Column 2: Web-Based Access -->
        <div class="text-center">
          <WindowIcon class="mx-auto mb-4 h-16 w-16 text-teal-500" aria-hidden="true" />
          <h2 class="mb-3 text-xl font-semibold text-navy-900">
            Tanpa Instalasi, Buka Dimana Saja
          </h2>
          <p class="text-base text-gray-600">
            Cukup buka browser, login, dan mulai bekerja. Tidak perlu install software atau khawatir
            soal komputer tua. Akses dari mana saja, kapan saja.
          </p>
        </div>

        <!-- Column 3: Mentorship Support -->
        <div class="text-center">
          <UsersIcon class="mx-auto mb-4 h-16 w-16 text-teal-500" aria-hidden="true" />
          <h2 class="mb-3 text-xl font-semibold text-navy-900">Didampingi Mentor</h2>
          <p class="text-base text-gray-600">
            Bingung cara pakainya? Tenang! Ada mentor yang siap bantu Anda. Tanya langsung lewat
            chat atau video call. Belajar sambil praktik.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
