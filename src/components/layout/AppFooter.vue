<script setup>
/**
 * AppFooter — Site-wide footer.
 *
 * Synchronized with Gizera Web reference:
 *   - Dark navy surface (#00030d / #0e285d)
 *   - Logo + authentic tagline
 *   - 3 structured columns: LAYANAN, HALAMAN, MEDIA SOSIAL
 *   - Trust badge ("4.8/5 Dipercaya oleh 150+ Perusahaan")
 *   - Copyright: "© 2026 Gizera. Seluruh hak cipta dilindungi."
 */
import { RouterLink } from 'vue-router'
import logoWhite from '@/assets/gizera-logo-white.png'

const serviceLinks = [
  { label: 'Konsultan IT',              to: '/services' },
  { label: 'Transformasi Digital',      to: '/services' },
  { label: 'Konsultan Organisasi & SDM', to: '/services' },
  { label: 'Spesialis Perangkat Lunak', to: '/services' },
  { label: 'Infrastruktur & Jaringan IT', to: '/services' },
  { label: 'HR & Tenaga Alih Daya',     to: '/services' },
]

const pageLinks = [
  { label: 'Beranda',           to: '/' },
  { label: 'Tentang Kami',      to: '/about' },
  { label: 'Layanan',           to: '/services' },
  { label: 'Studi Kasus',       to: '/case-studies' },
  { label: 'Kontak',            to: '/contact' },
  { label: 'Artikel & Wawasan', to: '/blogs' },
]

const socialLinks = [
  { label: 'LinkedIn',  url: 'https://linkedin.com' },
  { label: 'Instagram', url: 'https://instagram.com' },
  { label: 'Facebook',  url: 'https://facebook.com' },
  { label: 'Twitter',   url: 'https://twitter.com' },
]
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-container">
      <!-- Main Content Grid -->
      <div class="footer-top">
        <!-- Brand & Trust Column -->
        <div class="footer-brand-col">
          <RouterLink to="/" class="footer-logo-link" aria-label="Gizera — Beranda">
            <img
              :src="logoWhite"
              alt="Gizera"
              class="footer-logo"
              width="130"
              height="36"
            />
          </RouterLink>
          <p class="footer-tagline">
            Mitra terpercaya transformasi digital — IT konsultan, infrastruktur &amp; jaringan, software specialist, serta solusi HR &amp; OD.
          </p>
          <div class="footer-trust-badge">
            <div class="trust-stars" aria-hidden="true">★★★★★</div>
            <div class="trust-text">
              <strong>4.8/5</strong> &bull; Dipercaya oleh 150+ Perusahaan
            </div>
          </div>
        </div>

        <!-- Column 1: Layanan -->
        <div class="footer-col">
          <h3 class="footer-col-title">LAYANAN</h3>
          <ul class="footer-link-list" role="list">
            <li v-for="link in serviceLinks" :key="link.label">
              <RouterLink :to="link.to" class="footer-link">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Column 2: Halaman -->
        <div class="footer-col">
          <h3 class="footer-col-title">HALAMAN</h3>
          <ul class="footer-link-list" role="list">
            <li v-for="link in pageLinks" :key="link.label">
              <RouterLink :to="link.to" class="footer-link">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Media Sosial -->
        <div class="footer-col">
          <h3 class="footer-col-title">MEDIA SOSIAL</h3>
          <ul class="footer-link-list" role="list">
            <li v-for="link in socialLinks" :key="link.label">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link footer-link--external"
              >
                <span>{{ link.label }}</span>
                <span class="external-icon" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider" role="separator" aria-hidden="true"></div>

      <!-- Bottom Bar: Copyright & Contact -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; 2026 Gizera. Seluruh hak cipta dilindungi.
        </p>
        <p class="footer-privacy-note">
          Data dan privasi Anda terkelola dengan aman dan terjaga.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #00030d;
  color: rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 32px 40px;
}

/* Top grid */
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1.2fr 1fr 1fr;
  gap: 48px;
}

/* Brand column */
.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 360px;
}

.footer-logo-link {
  display: inline-block;
  line-height: 0;
}

.footer-logo {
  height: 34px;
  width: auto;
  object-fit: contain;
}

.footer-tagline {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

.footer-trust-badge {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  width: fit-content;
}

.trust-stars {
  color: #f5a623;
  font-size: 14px;
  letter-spacing: 2px;
}

.trust-text {
  font-family: var(--font-ui);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
}

.trust-text strong {
  color: #14f3c1;
  font-weight: 600;
}

/* Columns */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.footer-col-title {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
}

.footer-link-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-family: var(--font-body);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(2px);
}

.footer-link--external .external-icon {
  font-size: 12px;
  opacity: 0.5;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.footer-link--external:hover .external-icon {
  opacity: 1;
  transform: translate(2px, -2px);
}

/* Divider */
.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 56px 0 32px;
}

/* Bottom */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-copyright {
  font-family: var(--font-ui);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
}

.footer-privacy-note {
  font-family: var(--font-ui);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 809px) {
  .footer-container {
    padding: 56px 16px 32px;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
