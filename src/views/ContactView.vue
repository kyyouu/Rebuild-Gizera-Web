<script setup>
/**
 * ContactView — Halaman Kontak Gizera (/contact).
 *
 * Day 10: Implementasi penuh berdasarkan referensi enforceContactPage()
 * dari Gizera Web index.html.
 *
 * Konten:
 *   - PageHero: "Kontak Gizera®"
 *   - Left column: tag, h2, deskripsi
 *   - Form kontak: Nama, Email, Perusahaan, Telepon, Pesan
 *   - Contact cards: Hubungi Langsung, Kirimkan Email
 */

import { ref } from 'vue'
import PageHero from '@/components/shared/PageHero.vue'

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Kontak' },
]

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  // Simulasi submit — form handling akan diimplementasikan dengan backend
  await new Promise(resolve => setTimeout(resolve, 1200))
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <!-- PageHero -->
  <PageHero
    tag="HUBUNGI KAMI"
    title="Kontak "
    title-highlight="Gizera®"
    description="Bermitra dengan konsultan ahli yang berkomitmen menghadirkan hasil bisnis nyata dan terukur."
    :breadcrumbs="breadcrumbs"
  />

  <!-- Contact Section -->
  <section class="contact-section" aria-labelledby="contact-heading">
    <div class="contact-container">
      <div class="contact-layout">

        <!-- Left Column -->
        <div class="contact-left">
          <p class="contact-eyebrow">HUBUNGI KAMI</p>
          <h2 id="contact-heading" class="contact-heading">
            Konsultasikan Kebutuhan Bisnis Anda Bersama Tim Ahli Kami
          </h2>
          <p class="contact-desc">
            Bermitra dengan konsultan ahli dan praktisi teknologi Gizera yang berdedikasi mewujudkan transformasi dan pertumbuhan bisnis terukur.
          </p>

          <!-- Contact Cards -->
          <div class="contact-cards" role="list">
            <!-- Card: Hubungi Langsung -->
            <article class="contact-card" role="listitem">
              <div class="contact-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.6 2.39 2.33 1.5 3.36 1.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="contact-card-content">
                <h3 class="contact-card-title">Hubungi Langsung</h3>
                <p class="contact-card-desc">Konsultasikan kebutuhan mendesak Anda bersama tim responsif kami.</p>
                <a href="tel:+6221XXXXXXX" class="contact-card-action">Hubungi Sekarang</a>
              </div>
            </article>

            <!-- Card: Kirimkan Email -->
            <article class="contact-card" role="listitem">
              <div class="contact-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="contact-card-content">
                <h3 class="contact-card-title">Kirimkan Email</h3>
                <p class="contact-card-desc">Kirimkan detail kebutuhan proyek Anda, kami respons dalam 1×24 jam.</p>
                <a href="mailto:hello@gizera.id" class="contact-card-action">Kirim Email Sekarang</a>
              </div>
            </article>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="contact-right">
          <!-- Success State -->
          <div v-if="isSubmitted" class="form-success" role="alert">
            <div class="form-success-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22 4 12 14.01 9 11.01" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="form-success-title">Pesan Terkirim!</h3>
            <p class="form-success-desc">
              Terima kasih telah menghubungi Gizera. Tim kami akan segera merespons dalam 1×24 jam kerja.
            </p>
          </div>

          <!-- Form -->
          <form
            v-else
            class="contact-form"
            @submit.prevent="handleSubmit"
            novalidate
            aria-label="Formulir kontak"
          >
            <div class="form-group">
              <label class="form-label" for="contact-name">Nama Lengkap</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                class="form-input"
                placeholder="Masukkan nama lengkap Anda"
                required
                autocomplete="name"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-email">Email Bisnis</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                class="form-input"
                placeholder="Masukkan email bisnis Anda"
                required
                autocomplete="email"
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="contact-company">Perusahaan</label>
                <input
                  id="contact-company"
                  v-model="form.company"
                  type="text"
                  class="form-input"
                  placeholder="Nama perusahaan / instansi"
                  autocomplete="organization"
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-phone">Nomor Telepon / WhatsApp</label>
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  type="tel"
                  class="form-input"
                  placeholder="Nomor WhatsApp aktif"
                  autocomplete="tel"
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-message">Pesan / Kebutuhan Solusi</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                class="form-textarea"
                rows="5"
                placeholder="Ceritakan kebutuhan transformasi, kendala sistem, atau proyek Anda..."
                required
              />
            </div>

            <button
              type="submit"
              class="form-submit"
              :disabled="isSubmitting"
              :aria-busy="isSubmitting"
            >
              <span v-if="!isSubmitting">Kirim Pesan Konsultasi</span>
              <span v-else>Mengirim...</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Container ── */
.contact-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ── Section ── */
.contact-section {
  background-color: #00030d;
  padding: 96px 0 120px;
}

/* ── Layout ── */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* ── Left Column ── */
.contact-eyebrow {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #14f3c1;
  text-transform: uppercase;
  margin: 0 0 20px;
}

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 20px;
}

.contact-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.68;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 40px;
}

/* ── Contact Cards ── */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: border-color 0.2s ease;
}

.contact-card:hover {
  border-color: rgba(20, 243, 193, 0.2);
}

.contact-card-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(20, 243, 193, 0.08);
  border: 1px solid rgba(20, 243, 193, 0.15);
}

.contact-card-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-card-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
}

.contact-card-desc {
  font-family: var(--font-body);
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

.contact-card-action {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 600;
  color: #14f3c1;
  text-decoration: none;
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.2s ease;
}

.contact-card-action:hover {
  opacity: 0.8;
}

/* ── Form ── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: var(--font-ui);
  font-size: 12.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.01em;
}

.form-input,
.form-textarea {
  font-family: var(--font-body);
  font-size: 14.5px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 16px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  resize: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.form-input:focus,
.form-textarea:focus {
  border-color: rgba(20, 243, 193, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.form-textarea {
  min-height: 120px;
}

.form-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 14px;
  background-color: #0752ff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 14.5px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(7, 82, 255, 0.35);
}

.form-submit:hover:not(:disabled) {
  background-color: #0043d9;
  transform: translateY(-1px);
}

.form-submit:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* ── Success State ── */
.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  padding: 80px 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(20, 243, 193, 0.15);
  border-radius: 24px;
}

.form-success-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(20, 243, 193, 0.08);
  border: 1px solid rgba(20, 243, 193, 0.2);
}

.form-success-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
}

.form-success-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 380px;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .contact-layout {
    gap: 48px;
  }
}

@media (max-width: 809px) {
  .contact-container {
    padding: 0 20px;
  }

  .contact-section {
    padding: 64px 0 80px;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 28px 20px;
  }
}
</style>
