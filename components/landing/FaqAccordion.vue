<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

// ============================================================================
// COMPOSABLES
// ============================================================================
const { trackEvent } = useAnalytics()

interface FaqItem {
  question: string
  answer: string
}

const openIndex = ref<number | null>(null)

const faqItems: FaqItem[] = [
  {
    question: 'Berapa sih biayanya?',
    answer: `
      <p class="mb-4">Kami percaya setiap orang punya kebutuhan dan budget yang berbeda. Makanya, kami pakai sistem <strong>"Bayar Seperlumu, Bayar Semaumu"</strong>.</p>

      <p class="mb-3 font-semibold">Untuk Aplikasi Bisnis:</p>
      <ul class="mb-4 space-y-2">
        <li><strong>Bulanan:</strong> Mulai dari Rp 99.000/bulan - bayar per bulan, bisa berhenti kapan saja</li>
        <li><strong>Tahunan:</strong> Hemat sampai 20% kalau bayar setahun sekaligus</li>
        <li><strong>Pay As You Go:</strong> Cuma bayar fitur yang kamu pakai, cocok buat yang baru mulai</li>
      </ul>

      <p class="mb-3 font-semibold">Untuk Mentoring:</p>
      <ul class="mb-4 space-y-2">
        <li><strong>Per Sesi:</strong> Rp 50.000 - 150.000/sesi (1-2 jam), tergantung topik</li>
        <li><strong>Paket Bulanan:</strong> Rp 400.000 - 800.000/bulan (akses mentor + materi lengkap)</li>
        <li><strong>Free Trial:</strong> Sesi pertama GRATIS untuk kenalan sama mentor</li>
      </ul>

      <p><strong>Yang pasti:</strong> Tidak ada biaya tersembunyi, tidak ada kontrak jangka panjang yang mengikat. Transparansi adalah janji kami.</p>
    `,
  },
  {
    question: 'Butuh komputer khusus gak?',
    answer: `
      <p class="mb-4"><strong>Gak perlu!</strong> Semua solusi kami berbasis web, jadi bisa diakses dari <strong>mana saja, pakai device apa saja</strong>.</p>

      <p class="mb-3 font-semibold">Yang kamu butuh cuma:</p>
      <ul class="mb-4 space-y-2">
        <li>Smartphone, tablet, atau laptop (yang kamu punya sekarang itu sudah cukup!)</li>
        <li>Koneksi internet (3G juga lancar, gak perlu WiFi kencang)</li>
        <li>Browser modern (Chrome, Firefox, Safari - yang biasa kamu pakai sehari-hari)</li>
      </ul>

      <p class="mb-3 font-semibold">Tanpa instalasi, tanpa ribet:</p>
      <ul class="mb-4 space-y-2">
        <li>Tidak perlu download software besar</li>
        <li>Tidak perlu install apapun</li>
        <li>Tidak perlu spesifikasi komputer khusus</li>
        <li>Buka browser, langsung pakai</li>
      </ul>

      <p class="mb-3 font-semibold">Akses di mana saja:</p>
      <ul class="space-y-2">
        <li>Di kantor pakai laptop</li>
        <li>Di perjalanan pakai smartphone</li>
        <li>Di rumah pakai tablet</li>
        <li>Data tersimpan aman di cloud, gak hilang walau ganti device</li>
      </ul>
    `,
  },
  {
    question: 'Gimana cara mulainya?',
    answer: `
      <p class="mb-4">Super gampang! Cuma <strong>3 langkah</strong>:</p>

      <p class="mb-3 font-semibold">Langkah 1: Pilih yang kamu butuh</p>
      <ul class="mb-4 space-y-2">
        <li>Klik <strong>"Intip Yuk"</strong> kalau cari aplikasi untuk bisnis</li>
        <li>Klik <strong>"Mulai Dulu"</strong> kalau mau belajar IT atau cari mentor</li>
        <li>Lihat-lihat dulu katalog kami, pilih yang cocok</li>
      </ul>

      <p class="mb-3 font-semibold">Langkah 2: Hubungi kami</p>
      <ul class="mb-4 space-y-2">
        <li>Isi form kontak singkat (cuma 2 menit!)</li>
        <li>Ceritakan kebutuhan kamu</li>
        <li>Tim kami akan respon dalam 1x24 jam</li>
      </ul>

      <p class="mb-3 font-semibold">Langkah 3: Langsung mulai</p>
      <ul class="mb-4 space-y-2">
        <li>Dapat akses ke aplikasi atau jadwal sesi mentoring pertama</li>
        <li>Gratis trial/demo tersedia - coba dulu, cocok baru lanjut</li>
        <li>Ada panduan lengkap untuk pemula</li>
      </ul>

      <p class="mb-3 font-semibold">Gak pakai ribet:</p>
      <ul class="space-y-2">
        <li>Tidak perlu submit dokumen macam-macam</li>
        <li>Tidak perlu survei lapangan</li>
        <li>Tidak perlu tanda tangan kontrak panjang</li>
        <li>Chat WhatsApp atau email juga bisa!</li>
      </ul>
    `,
  },
  {
    question: 'Kalau ada masalah, bisa tanya siapa?',
    answer: `
      <p class="mb-4"><strong>Tenang, kamu gak akan berjuang sendirian!</strong> Kami punya support system lengkap:</p>

      <p class="mb-3 font-semibold">1. Tim Support 24/7</p>
      <ul class="mb-4 space-y-2">
        <li>Chat support lewat website (respon cepat!)</li>
        <li>WhatsApp: +62 812-3456-7890 (jam kerja 08.00-20.00 WIB)</li>
        <li>Email: support@makinmudah.com (respon max 24 jam)</li>
      </ul>

      <p class="mb-3 font-semibold">2. Mentor Khusus (untuk program mentoring)</p>
      <ul class="mb-4 space-y-2">
        <li>Mentor personal yang dampingin kamu belajar</li>
        <li>Bisa tanya kapan saja via chat group</li>
        <li>Sesi konsultasi 1-on-1 kalau ada kesulitan</li>
        <li><strong>"Belajar Bareng, Bukan Sendirian"</strong> - itu komitmen kami!</li>
      </ul>

      <p class="mb-3 font-semibold">3. Dokumentasi & Tutorial</p>
      <ul class="mb-4 space-y-2">
        <li>Video tutorial bahasa Indonesia</li>
        <li>Panduan step-by-step untuk setiap fitur</li>
        <li>FAQ lengkap di website</li>
        <li>Tips & trik praktis</li>
      </ul>

      <p class="mb-3 font-semibold">4. Komunitas Pengguna</p>
      <ul class="mb-4 space-y-2">
        <li>Group Telegram/WhatsApp sesama pengguna</li>
        <li>Saling bantu, sharing pengalaman</li>
        <li>Networking sama pebisnis dan learner lainnya</li>
      </ul>

      <p><strong>Yang pasti:</strong> Gak ada pertanyaan yang "terlalu simpel". Tim kami sabar dan ramah, siap bantu sampai tuntas!</p>
    `,
  },
  {
    question: 'Apa aja yang didapat?',
    answer: `
      <p class="mb-4">Tergantung yang kamu pilih, tapi semua paket kami <strong>all-in-one</strong> - gak perlu beli add-on macem-macem!</p>

      <p class="mb-3 font-semibold">Kalau Pilih Aplikasi Bisnis (contoh: POS System):</p>
      <ul class="mb-4 space-y-2">
        <li>✅ Aplikasi lengkap berbasis web (akses unlimited)</li>
        <li>✅ Update otomatis gratis (fitur baru langsung kamu dapat)</li>
        <li>✅ Cloud storage untuk data bisnis kamu</li>
        <li>✅ Dashboard analytics untuk pantau bisnis</li>
        <li>✅ Support tim via chat/email</li>
        <li>✅ Panduan lengkap & video tutorial</li>
        <li>✅ Multi-device (akses dari HP, tablet, laptop)</li>
      </ul>

      <p class="mb-3 font-semibold">Kalau Pilih Program Mentoring:</p>
      <ul class="mb-4 space-y-2">
        <li>✅ Sesi mentoring 1-on-1 dengan expert (sesuai paket)</li>
        <li>✅ Materi pembelajaran terstruktur (modul + video)</li>
        <li>✅ Project-based learning (praktik langsung, bukan cuma teori)</li>
        <li>✅ Code review & feedback dari mentor</li>
        <li>✅ Sertifikat setelah selesai program</li>
        <li>✅ Akses ke komunitas learner Indonesia</li>
        <li>✅ Bonus: Career guidance & job preparation</li>
      </ul>

      <p class="mb-3 font-semibold">Bonus untuk Semua:</p>
      <ul class="space-y-2">
        <li>✅ Akses ke webinar gratis bulanan</li>
        <li>✅ Newsletter tips & trik</li>
        <li>✅ Early access ke produk baru kami</li>
      </ul>
    `,
  },
  {
    question: 'Harus komitmen berapa lama?',
    answer: `
      <p class="mb-4"><strong>Gak ada kontrak jangka panjang!</strong> Kami paham setiap orang punya situasi berbeda.</p>

      <p class="mb-3 font-semibold">Sistem Flexible:</p>

      <p class="mb-2 font-semibold">Untuk Aplikasi Bisnis:</p>
      <ul class="mb-4 space-y-2">
        <li><strong>Bulanan:</strong> Bayar per bulan, bisa berhenti/pause kapan aja tanpa penalty</li>
        <li><strong>Tahunan:</strong> Komitmen 1 tahun, tapi hemat 20% (rekomendasi untuk bisnis established)</li>
        <li><strong>Bebas pause/cancel:</strong> Kasih tau 7 hari sebelumnya, no questions asked</li>
      </ul>

      <p class="mb-2 font-semibold">Untuk Program Mentoring:</p>
      <ul class="mb-4 space-y-2">
        <li><strong>Per Sesi:</strong> Gak ada komitmen, booking sesi sesuai kebutuhan</li>
        <li><strong>Paket Bulanan:</strong> Komitmen 1 bulan, bisa lanjut atau stop di akhir bulan</li>
        <li><strong>Program Intensif:</strong> 3-6 bulan (buat yang serius mau career switch), tapi bisa diskusi kalau ada kendala</li>
      </ul>

      <p class="mb-3 font-semibold">Yang Penting:</p>
      <ul class="mb-4 space-y-2">
        <li><strong>Tidak ada auto-renewal diam-diam</strong> - kami reminder 1 minggu sebelum perpanjangan</li>
        <li><strong>Tidak ada biaya pembatalan</strong> - kalau memang tidak cocok, ya sudah, tidak masalah</li>
        <li><strong>Flexibilitas adalah prioritas</strong> - hidup bisa berubah tiba-tiba, kami paham itu</li>
      </ul>

      <p><strong>Prinsip kami:</strong> Kamu tetap karena <strong>puas</strong>, bukan karena <strong>terjebak kontrak</strong>.</p>
    `,
  },
  {
    question: 'Bisa coba dulu gak?',
    answer: `
      <p class="mb-4"><strong>Bisa banget!</strong> Kami percaya kamu harus <strong>coba dulu, cocok baru lanjut</strong>.</p>

      <p class="mb-3 font-semibold">Demo & Trial Gratis:</p>

      <p class="mb-2 font-semibold">Aplikasi Bisnis:</p>
      <ul class="mb-4 space-y-2">
        <li>🎁 <strong>Free Trial 14 hari</strong> - akses full features, no credit card required</li>
        <li>🎁 <strong>Demo interaktif</strong> - jalan-jalan lihat fiturnya dulu sebelum daftar</li>
        <li>🎁 <strong>Video walkthrough</strong> - lihat cara pakainya dari awal sampai akhir</li>
        <li>🎁 <strong>Live demo</strong> - book sesi 30 menit, tim kami tunjukin langsung (via Zoom/Meet)</li>
      </ul>

      <p class="mb-2 font-semibold">Program Mentoring:</p>
      <ul class="mb-4 space-y-2">
        <li>🎁 <strong>Sesi pertama GRATIS</strong> - kenalan sama mentor, tanya-jawab bebas</li>
        <li>🎁 <strong>Sample materi</strong> - lihat kualitas materi pembelajaran kami</li>
        <li>🎁 <strong>Preview kurikulum</strong> - tau persis apa yang akan dipelajari</li>
        <li>🎁 <strong>Match mentor</strong> - gak cocok sama mentor pertama? Ganti, no problem!</li>
      </ul>

      <p class="mb-3 font-semibold">Cara Coba:</p>
      <ol class="mb-4 list-decimal space-y-2 pl-6">
        <li>Klik tombol <strong>"Intip Yuk"</strong> atau <strong>"Mulai Dulu"</strong></li>
        <li>Pilih produk/program yang mau dicoba</li>
        <li>Isi form sederhana</li>
        <li>Langsung dapat akses trial atau jadwal demo</li>
      </ol>

      <p class="mb-3 font-semibold">Jaminan:</p>
      <ul class="mb-4 space-y-2">
        <li>Gak ada hidden terms</li>
        <li>Gak ada auto-charge tiba-tiba</li>
        <li>Trial habis, bisa putuskan lanjut atau gak - no pressure!</li>
      </ul>

      <p><strong>Prinsip kami:</strong> Kalau solusi kami bagus, pasti kamu mau lanjut. Kalau gak cocok, ya udah, terima kasih sudah coba! 😊</p>
    `,
  },
]

// ============================================================================
// EVENT HANDLERS
// ============================================================================
const toggleItem = (idx: number) => {
  const isOpening = openIndex.value !== idx
  openIndex.value = openIndex.value === idx ? null : idx

  // Track FAQ interaction
  trackEvent('faq_interaction', {
    question_number: idx + 1, // 1-indexed for readability
    action: isOpening ? 'open' : 'close',
  })
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
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            class="flex w-full items-center justify-between rounded-lg bg-gray-50 px-6 py-4 text-left text-lg font-semibold text-navy-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 md:text-xl"
            @click="toggleItem(index)"
          >
            <span>{{ item.question }}</span>
            <ChevronDownIcon
              :class="[
                'h-6 w-6 flex-shrink-0 text-teal-600 transition-transform duration-300',
                openIndex === index ? 'rotate-180' : '',
              ]"
            />
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
