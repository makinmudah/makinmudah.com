<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  question: string
  answer: string
}

const faqItems = ref<FaqItem[]>([
  {
    question: 'Berapa sih biayanya?',
    answer:
      '<p class="mb-4">Kami percaya setiap orang punya kebutuhan dan budget yang berbeda. Makanya, kami pakai sistem <strong>"Bayar Seperlumu, Bayar Semaumu"</strong>.</p><p class="mb-3 font-semibold">Untuk Aplikasi Bisnis:</p><ul class="mb-4 space-y-2"><li><strong>Bulanan:</strong> Mulai dari Rp 99.000/bulan - bayar per bulan, bisa berhenti kapan saja</li></ul>',
  },
  {
    question: 'Butuh komputer khusus gak?',
    answer:
      '<p class="mb-4"><strong>Gak perlu!</strong> Semua solusi kami berbasis web, jadi bisa diakses dari <strong>mana saja, pakai device apa saja</strong>.</p>',
  },
])

const openIndex = ref<number | null>(null)

function toggleItem(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="bg-white py-12 md:py-16 lg:py-20">
    <div class="container mx-auto px-4">
      <h2 class="mb-8 text-center text-3xl font-bold text-navy-900 md:mb-12 md:text-4xl">
        Pertanyaan yang Sering Ditanyakan
      </h2>

      <div class="mx-auto max-w-3xl space-y-4">
        <div v-for="(item, index) in faqItems" :key="index" class="overflow-hidden rounded-lg">
          <button
            type="button"
            :data-index="index"
            :data-open="openIndex === index"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            class="flex w-full items-center justify-between rounded-lg bg-gray-50 px-6 py-4 text-left text-lg font-semibold text-navy-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 md:text-xl"
            @click="toggleItem(index)"
          >
            <span>{{ item.question }}</span>
            <svg
              :class="[
                'h-6 w-6 flex-shrink-0 text-teal-600 transition-transform duration-300',
                openIndex === index ? 'rotate-180' : '',
              ]"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </button>

          <div
            v-show="openIndex === index"
            :id="`faq-answer-${index}`"
            class="px-6 pb-4 pt-2 text-base leading-relaxed text-gray-700 md:text-lg"
            v-html="item.answer"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
