/**
 * serviceService.js — Service Layer untuk data layanan Gizera.
 *
 * Menyediakan fungsi-fungsi akses data yang bersih untuk:
 *   - Mendapatkan semua layanan
 *   - Mendapatkan layanan berdasarkan slug
 *   - Mendapatkan layanan sebelum/sesudah (prev/next navigation)
 */

import { services } from '@/data/services.js'

/**
 * Mengembalikan seluruh daftar layanan.
 * @returns {Array} Array of service objects
 */
export function getAllServices() {
  return services
}

/**
 * Mencari layanan berdasarkan slug.
 * @param {string} slug - Slug layanan (contoh: 'transformasi-digital')
 * @returns {Object|null} Service object atau null jika tidak ditemukan
 */
export function getServiceBySlug(slug) {
  if (!slug) return null
  return services.find(service => service.slug === slug) ?? null
}

/**
 * Mendapatkan layanan sebelumnya berdasarkan slug (untuk navigasi detail).
 * @param {string} slug - Slug layanan saat ini
 * @returns {Object|null} Service object sebelumnya atau null
 */
export function getPrevService(slug) {
  const idx = services.findIndex(s => s.slug === slug)
  if (idx <= 0) return null
  return services[idx - 1]
}

/**
 * Mendapatkan layanan berikutnya berdasarkan slug (untuk navigasi detail).
 * @param {string} slug - Slug layanan saat ini
 * @returns {Object|null} Service object berikutnya atau null
 */
export function getNextService(slug) {
  const idx = services.findIndex(s => s.slug === slug)
  if (idx === -1 || idx >= services.length - 1) return null
  return services[idx + 1]
}

