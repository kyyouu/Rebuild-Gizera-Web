<template>
  <main
    class="min-h-screen flex items-center justify-center"
    style="background-color: var(--color-dark);"
  >
    <div class="text-center px-6">
      <p
        class="mb-4 uppercase tracking-widest"
        style="
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-teal-cyan);
        "
      >
        404 — Halaman Tidak Ditemukan
      </p>

      <h1
        style="
          font-family: var(--font-display);
          font-size: var(--text-h1);
          color: var(--color-white);
          line-height: 1.1;
          letter-spacing: -0.032em;
        "
      >
        404
      </h1>

      <p
        class="mt-4"
        style="
          font-family: var(--font-body);
          font-size: var(--text-body);
          color: rgba(255, 255, 255, 0.55);
        "
      >
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>

      <div class="mt-8">
        <RouterLink
          to="/"
          class="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white transition-colors"
          style="
            background-color: var(--color-brand-blue);
            font-family: var(--font-ui);
            font-size: 15px;
          "
        >
          ← Kembali ke Beranda
        </RouterLink>
      </div>

      <p
        class="mt-10"
        style="
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: rgba(255, 255, 255, 0.2);
        "
      >
        Route: <code>/:pathMatch(.*)*</code> · NotFoundView
      </p>
    </div>
  </main>
</template>

