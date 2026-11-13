/**
 * blogService.js — Service layer untuk data blog/artikel Gizera.
 *
 * Menyediakan fungsi akses data yang bersih untuk:
 *   - Mendapatkan semua artikel
 *   - Mendapatkan artikel berdasarkan slug
 *   - Mendapatkan artikel sebelum/sesudah (prev/next navigation)
 */

import { blogs } from '@/data/blogs.js'

/**
 * Mengembalikan seluruh daftar artikel.
 * @returns {Array} Array of blog objects
 */
export function getAllBlogs() {
  return blogs
}

/**
 * Mencari artikel berdasarkan slug.
 * @param {string} slug
 * @returns {Object|null}
 */
export function getBlogBySlug(slug) {
  if (!slug) return null
  return blogs.find(b => b.slug === slug) ?? null
}

/**
 * Mendapatkan artikel sebelumnya.
 * @param {string} slug
 * @returns {Object|null}
 */
export function getPrevBlog(slug) {
  const idx = blogs.findIndex(b => b.slug === slug)
  if (idx <= 0) return null
  return blogs[idx - 1]
}

/**
 * Mendapatkan artikel berikutnya.
 * @param {string} slug
 * @returns {Object|null}
 */
export function getNextBlog(slug) {
  const idx = blogs.findIndex(b => b.slug === slug)
  if (idx === -1 || idx >= blogs.length - 1) return null
  return blogs[idx + 1]
}

/**
 * Mengembalikan daftar kategori unik.
 * @returns {string[]}
 */
export function getBlogCategories() {
  return [...new Set(blogs.map(b => b.category))]
}

