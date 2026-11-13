<template>
  <div class="not-found-wrap">
    <div class="text-center px-6">
      <p class="mb-4 uppercase tracking-widest font-ui text-xs text-teal-cyan">
        404 — Halaman Tidak Ditemukan
      </p>

      <h1 class="font-display text-h1 text-white font-normal leading-tight tracking-tight">
        404
      </h1>

      <p class="mt-4 font-body text-body text-white/55">
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>

      <div class="mt-8">
        <RouterLink
          to="/"
          class="inline-flex items-center px-6 py-3 rounded-lg font-ui text-[15px] font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
        >
          ← Kembali ke Beranda
        </RouterLink>
      </div>

      <p class="mt-10 font-ui text-xs text-white/20">
        Route: <code>/:pathMatch(.*)*</code> · NotFoundView
      </p>
    </div>
  </div>
</template>

<style scoped>
.not-found-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00030d;
  color: #ffffff;
}
</style>

