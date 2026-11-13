/**
 * services.js — Gizera Service Data Layer
 *
 * Single source of truth untuk seluruh data layanan Gizera.
 * Disinkronisasi 1:1 dari GIZERA_BENCHMARK_SERVICES & enforceGizeraOurServices
 * di script Gizera Web referensi (index.html).
 *
 * Digunakan oleh:
 *   - HomeServices.vue      (kartu layanan di homepage)
 *   - ServicesView.vue      (halaman daftar layanan /services)
 *   - ServiceDetailView.vue (halaman detail /services/:slug)
 *   - ServiceCard.vue       (komponen kartu reusable)
 */

export const services = [
  {
    id: 1,
    slug: 'transformasi-digital',
    title: 'Transformasi Digital',
    tagline: 'Modernisasi kemampuan bisnis melalui platform cerdas, integrasi cloud, dan teknologi mutakhir.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    image: '/images/JmCwTnYY96cuhc9xpR4t9RnGuss.webp',
    overview: [
      'Teknologi semestinya menjadikan bisnis lebih adaptif dan kapabel, bukan sekadar menjadikannya lebih rumit. Namun kenyataannya, platform yang terfragmentasi, sistem lama yang usang, proses kerja manual yang repetitif, dan pengalaman digital yang tidak konsisten sering kali menghambat korporasi dalam memaksimalkan potensi investasi teknologi mereka.',
      'Layanan Transformasi Digital Gizera mendampingi korporasi mengidentifikasi titik temu antara kebutuhan bisnis strategis dan inovasi teknologi. Kami menyusun peta jalan modernisasi yang terstruktur, menghubungkan tujuan komersial dengan keputusan arsitektur sistem, sehingga transformasi digital selalu berorientasi pada pencapaian hasil bisnis nyata yang dapat diukur.',
      'Kami membantu organisasi membedakan antara teknologi yang benar-benar menciptakan nilai jangka panjang dan teknologi yang hanya menambah kerumitan operasional.',
    ],
    scope: {
      intro: 'Pendampingan transformasi digital kami mencakup perencanaan strategis komprehensif hingga prioritas transformasi praktis di lapangan.',
      items: [
        'Digital maturity assessments & kesiapan ekosistem teknologi',
        'Perencanaan strategi teknologi & arsitektur cloud terdistribusi',
        'Review sistem, aplikasi, dan platform enterprise terpadu',
        'Analisis peluang otomatisasi proses & alur kerja bisnis',
        'Modernisasi sistem warisan (legacy) dan migrasi data aman',
        'Integrasi ekosistem data & dashboard analitik real-time',
        'Pendampingan implementasi roadmap digital dan manajemen perubahan',
      ],
      footer: 'Setiap rekomendasi didasarkan pada data operasional, wawasan industri, dan kelayakan komersial jangka panjang.',
    },
    approach: [
      'Kami memulai dengan menilai lanskap digital Anda saat ini, termasuk infrastruktur sistem, alur kerja, integrasi data, kapabilitas tim, dan pengalaman pengguna.',
      'Dari evaluasi tersebut, kami mengidentifikasi celah serta peluang berdasarkan prioritas bisnis, bukan sekadar mengikuti tren teknologi sesaat. Kami kemudian merumuskan peta jalan modernisasi bertahap dengan tahapan yang jelas dan terarah.',
      'Kami mendampingi kepemimpinan dan tim internal Anda selama implementasi untuk memastikan adopsi sistem berjalan lancar tanpa mengganggu kesinambungan operasional harian.',
    ],
    whyImportant: [
      'Transformasi digital yang efektif jarang sekali tentang mengganti seluruh sistem sekaligus. Transformasi terbaik berfokus pada area di mana teknologi dapat mengeliminasi hambatan operasional, mempertajam akurasi pengambilan keputusan, dan menciptakan pengalaman yang lebih baik bagi pelanggan.',
      'Peta jalan yang jelas memungkinkan korporasi melakukan modernisasi secara terukur dan penuh percaya diri dengan hasil yang dapat dipertanggungjawabkan.',
    ],
    results: {
      intro: 'Bermitra bersama Gizera membantu organisasi Anda mencapai:',
      items: [
        'Arah transformasi teknologi yang lebih jelas dan terarah',
        'Keputusan investasi digital yang lebih terukur dengan ROI optimal',
        'Kompleksitas operasional dan beban pemeliharaan sistem yang berkurang',
        'Penyelarasan yang lebih kuat antara fungsi IT dan strategi bisnis',
        'Fondasi arsitektur yang siap menopang pertumbuhan skala bisnis masa depan',
      ],
    },
  },
  {
    id: 2,
    slug: 'konsultan-it',
    title: 'Konsultan IT',
    tagline: 'Perencanaan blueprint teknologi komprehensif, audit sistem informasi, dan penasihat strategis bisnis.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    image: '/images/MDhZ9e6QV3i37FZE4zgwBgZLclo.webp',
    overview: [
      'Kami bermitra dengan para pemimpin korporat dan jajaran manajemen dalam mengambil keputusan teknologi krusial yang menentukan masa depan organisasi mereka.',
      'Menavigasi lanskap teknologi informasi yang dinamis membutuhkan lebih dari sekadar wawasan teoritis. Hal ini menuntut kejernihan strategis, pemahaman mendalam tentang tata kelola TI enterprise, serta rencana eksekusi yang realistis dan terukur. Gizera memberikan perspektif objektif dan independen untuk membantu korporasi membedah tantangan kompleks, mengevaluasi risiko sistem, dan memprioritaskan alokasi investasi teknologi tepat sasaran.',
      'Peran kami adalah mendampingi para pemimpin membuat keputusan teknologi yang matang, percaya diri, dan berdaya guna tinggi.',
    ],
    scope: {
      intro: 'Layanan penasihat strategis TI kami berfokus pada penyusunan arah masa depan dan tata kelola sistem informasi yang kokoh.',
      items: [
        'Penyusunan IT Master Plan & Enterprise Architecture blueprint',
        'Penetapan prioritas strategis teknologi dan portofolio inisiatif TI',
        'Audit tata kelola sistem informasi & kepatuhan regulasi (IT Governance)',
        'Penilaian risiko keamanan siber & pengujian kerentanan aset digital',
        'Evaluasi solusi vendor pihak ketiga & uji kelayakan pengadaan (RFP)',
        'Perencanaan kelangsungan bisnis & pemulihan bencana IT (BCP & DRP)',
        'Optimalisasi belanja modal (CapEx) dan biaya operasional (OpEx) teknologi',
      ],
      footer: 'Setiap rekomendasi kami sesuaikan dengan skala prioritas, struktur organisasi, dan target bisnis perusahaan Anda.',
    },
    approach: [
      'Kami memulai dengan mendalami lanskap bisnis, struktur tata kelola, dan sasaran strategis perusahaan Anda. Melalui wawancara mendalam dengan pemangku kepentingan kunci, audit teknis, dan workshop terarah, kami memetakan tantangan nyata yang dihadapi tim manajemen.',
      'Dari temuan tersebut, kami merumuskan rekomendasi praktis yang didukung parameter terukur. Kami tidak hanya menyerahkan dokumen laporan, melainkan turut mengawal kepatuhan dan implementasi rekomendasi secara berkelanjutan bersama tim internal Anda.',
      'Evaluasi berkala memastikan inisiatif teknologi terus memberikan hasil bisnis yang signifikan dan adaptif terhadap dinamika industri.',
    ],
    whyImportant: [
      'Teknologi bergerak dengan cepat, dan kesalahan dalam pengambilan keputusan arsitektur dapat membebani korporasi selama bertahun-tahun. Penasihat independen memberikan kejelasan pandang objektif agar investasi yang dikucurkan selalu memberikan dampak positif langsung pada performa bisnis.',
    ],
    results: {
      intro: 'Bermitra bersama Konsultan IT Gizera memberikan:',
      items: [
        'Keselarasan visi antara pimpinan eksekutif dan departemen TI',
        'Pengambilan keputusan strategis teknologi yang lebih cepat dan tepat',
        'Eliminasi pemborosan biaya pengadaan dan lisensi perangkat lunak',
        'Peningkatan standar keamanan dan kepatuhan sistem informasi',
        'Ketahanan operasional yang kokoh menghadapi ancaman disrupsi',
      ],
    },
  },
  {
    id: 3,
    slug: 'human-capital-alih-daya',
    title: 'Human Capital & Alih Daya',
    tagline: 'Konsultasi pengembangan organisasi (OD), optimalisasi fungsi HR, dan tenaga alih daya profesional siap kerja.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    image: '/images/PB8m9iFknLrCjZeJprCGzECcxms.webp',
    overview: [
      'Kepemimpinan yang efektif bukan hanya tentang posisi dalam bagan hierarki, melainkan bagaimana kepemimpinan tersebut membentuk budaya kerja, mengarahkan strategi bisnis, dan memastikan keberhasilan jangka panjang.',
      'Kami bermitra dengan korporasi untuk memperkuat kapabilitas sumber daya manusia dan organisasi di setiap level bisnis. Gizera menyediakan solusi komprehensif mulai dari konsultasi restrukturisasi organisasi (Organization Development), perancangan sistem evaluasi kinerja (KPI & OKR), standarisasi SOP HR, hingga penyediaan tenaga alih daya (outsourcing) profesional siap kerja di bidang teknologi informasi dan operasional.',
      'Setiap program kami sesuaikan secara khusus dengan sasaran bisnis, tantangan kepemimpinan, dan kebutuhan talenta perusahaan Anda.',
    ],
    scope: {
      intro: 'Layanan Human Capital dan Alih Daya kami berfokus pada penyelarasan struktur kerja dan percepatan pengadaan talenta kompeten.',
      items: [
        'Konsultasi Organization Development (OD) & analisis beban kerja fungsional',
        'Penyusunan kerangka penilaian kinerja terukur (KPI & OKR Framework)',
        'Penyusunan Standard Operating Procedures (SOP) & kebijakan ketenagakerjaan',
        'Penyediaan tenaga alih daya (outsourcing) IT: Developer, QA, & Network Engineer',
        'Penyediaan tenaga alih daya staf operasional dan dukungan bisnis siap kerja',
        'Executive coaching & program pengembangan kepemimpinan manajemen',
        'Corporate capability training teknis dan fasilitasi perubahan kultur kerja',
      ],
      footer: 'Semua program kami rancang untuk mempermudah operasional perusahaan tanpa membebani proses administrasi internal yang rumit.',
    },
    approach: [
      'Kami mengawali proses dengan meneliti struktur hierarki, alur pelaporan tugas, dan tantangan distribusi beban kerja di masing-masing unit kerja. Kami mengidentifikasi kesenjangan keterampilan yang menghambat laju produktivitas.',
      'Dari pemetaan tersebut, kami merumuskan rekomendasi perbaikan struktur serta menempatkan tenaga alih daya berkualifikasi tinggi yang telah melalui proses seleksi ketat. Pendekatan ini memungkinkan perusahaan fokus pada strategi inti bisnis tanpa terbebani kerumitan rekrutmen dan administrasi personalia.',
    ],
    whyImportant: [
      'Organisasi dengan kepemimpinan yang tangguh dan talenta yang kompeten mampu merespons perubahan pasar dengan lebih lincah, mengambil keputusan strategis lebih cepat, serta menciptakan budaya kerja yang bertanggung jawab dan inovatif.',
    ],
    results: {
      intro: 'Solusi Human Capital Gizera menghadirkan manfaat nyata bagi organisasi Anda:',
      items: [
        'Penyelarasan eksekutif dan kejelasan peran di setiap posisi tim',
        'Ketersediaan talenta profesional siap kerja secara fleksibel dan cepat',
        'Peningkatan motivasi dan produktivitas karyawan melalui evaluasi terukur',
        'Efisiensi biaya overhead rekrutmen dan pengelolaan personalia',
        'Budaya organisasi yang kolaboratif dan berorientasi pada hasil nyata',
      ],
    },
  },
  {
    id: 4,
    slug: 'spesialis-perangkat-lunak',
    title: 'Spesialis Perangkat Lunak',
    tagline: 'Rekayasa perangkat lunak enterprise, aplikasi web & mobile kustom dengan arsitektur tangguh dan scalable.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    image: '/images/I4Oky3hKxsfrsOZF5OAe6nj5M.webp',
    overview: [
      'Aplikasi siap pakai di pasaran sering kali tidak fleksibel untuk mendukung alur kerja unik dan keunggulan kompetitif suatu perusahaan. Perangkat lunak yang lambat, rentan kegagalan sistem, atau sulit diintegrasikan justru memperlambat laju operasional dan menimbulkan pengalaman buruk bagi pengguna akhir.',
      'Tim rekayasa perangkat lunak Gizera memadukan standar clean architecture, metodologi Agile, dan praktik secure coding untuk membangun aplikasi kustom berkinerja tinggi. Mulai dari portal web enterprise, aplikasi mobile iOS & Android, hingga sistem backend terintegrasi, kami memastikan setiap solusi perangkat lunak dibangun kokoh dan siap berkembang seiring pertumbuhan bisnis Anda.',
      'Fokus kami adalah menciptakan aset teknologi berharga yang memberikan keunggulan kompetitif nyata bagi korporasi Anda.',
    ],
    scope: {
      intro: 'Layanan pengembangan perangkat lunak kami mencakup siklus rekayasa menyeluruh dari perancangan arsitektur hingga deployment produksi.',
      items: [
        'Pengembangan Custom Web Enterprise Application berskala tinggi',
        'Pengembangan Mobile Apps Native & Cross-Platform (Android & iOS)',
        'Pembangunan Core Business Systems (ERP, CRM, dan Portal Internal)',
        'Perancangan arsitektur API terenkripsi & integrasi Microservices',
        'Modernisasi & refactoring kode aplikasi warisan (legacy systems)',
        'Implementasi Automated Testing & pipeline CI/CD deployment mulus',
        'Pemeliharaan perangkat lunak berkala & penjaminan mutu sistem (QA)',
      ],
      footer: 'Setiap aplikasi dirancang dengan arsitektur modular sehingga mudah diperluas seiring pertumbuhan pengguna dan penambahan fitur di masa depan.',
    },
    approach: [
      'Kami memulai dengan menggali alur logika bisnis, persona pengguna, dan parameter teknis yang dibutuhkan. Kami memvalidasi spesifikasi arsitektur data serta wireframe antarmuka sebelum fase rekayasa kode dimulai.',
      'Dalam siklus pengembangan, kami menerapkan pipeline CI/CD modern, code review ketat, dan automated testing. Langkah ini memastikan setiap pembaruan sistem stabil, aman, dan siap digunakan langsung tanpa hambatan teknis.',
    ],
    whyImportant: [
      'Aplikasi yang dirancang khusus merupakan pembeda utama suatu korporasi dalam memberikan layanan terbaik bagi pelanggan. Kecepatan dan stabilitas perangkat lunak secara langsung mempengaruhi reputasi serta produktivitas bisnis Anda.',
    ],
    results: {
      intro: 'Pengembangan perangkat lunak bersama Gizera menghasilkan:',
      items: [
        'Aplikasi kustom berkinerja tinggi yang selaras dengan proses bisnis',
        'Arsitektur kode yang bersih, terdokumentasi, dan mudah dikembangkan',
        'Perlindungan keamanan data berlapis sesuai standar industri',
        'Pengalaman antarmuka yang intuitif dan mudah diadopsi pengguna',
        'Waktu muat (load time) cepat dan performa stabil saat beban puncak',
      ],
    },
  },
  {
    id: 5,
    slug: 'infrastruktur-jaringan-it',
    title: 'Infrastruktur & Jaringan IT',
    tagline: 'Fondasi arsitektur IT infrastruktur kokoh, data center andal, serta pengamanan Computer Network 24/7.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    image: '/images/bSorq8bY0mxOEBCUceu6z6sLCE.webp',
    overview: [
      'Kelancaran seluruh aktivitas operasional digital bertumpu pada keandalan infrastruktur server dan stabilitas konektivitas jaringan komputer. Downtime sistem, latensi koneksi, atau gangguan keamanan data dapat menimbulkan kerugian finansial yang signifikan bagi bisnis.',
      'Gizera menghadirkan layanan menyeluruh untuk perencanaan, implementasi, dan pemeliharaan infrastruktur IT korporat. Dari instalasi jaringan kabel dan nirkabel enterprise, setup data center, manajemen server fisik maupun hybrid-cloud, hingga pengamanan firewall terintegrasi, kami menjamin ketersediaan (uptime) tertinggi untuk operasional Anda.',
      'Kami memastikan seluruh fondasi teknologi perusahaan Anda terlindungi dan beroperasi pada performa puncak setiap saat.',
    ],
    scope: {
      intro: 'Layanan infrastruktur kami mencakup penguatan fisik maupun virtual konektivitas enterprise.',
      items: [
        'Perancangan & implementasi jaringan enterprise LAN, WAN, dan SD-WAN',
        'Setup server fisik dan manajemen virtualisasi Hybrid Cloud terdistribusi',
        'Penataan kabel terstruktur (fiber optic & UTP) & manajemen Data Center',
        'Konfigurasi Next-Generation Firewall (NGFW) & keamanan perimeter jaringan',
        'Implementasi VPN terenkripsi, segmentasi jaringan aman, dan proteksi IPS/IDS',
        'Pemantauan proaktif performa jaringan & penanganan insiden 24/7',
        'Manajemen cadangan daya (UPS) & sistem pendinginan rak server terstandarisasi',
      ],
      footer: 'Semua konfigurasi kami bangun dengan sistem redundansi ganda guna mengantisipasi kemungkinan gangguan perangkat tunggal.',
    },
    approach: [
      'Kami mengawali pekerjaan dengan survei fisik dan audit topologi jaringan yang ada. Kami menganalisis kapasitas throughput, mengidentifikasi titik hambatan (bottleneck), serta mengevaluasi kerentanan keamanan koneksi.',
      'Berdasarkan hasil analisis, kami menyusun rancangan arsitektur jaringan yang optimal, melaksanakan instalasi terstandarisasi, dan melakukan uji beban sebelum pengoperasian penuh. Langkah ini menjamin stabilitas konektivitas tanpa mengganggu operasional kerja harian.',
    ],
    whyImportant: [
      'Infrastruktur IT adalah urat nadi operasional modern. Tanpa konektivitas yang stabil dan server yang tangguh, seluruh aktivitas kolaborasi, pertukaran data, dan pelayanan pelanggan akan terhambat.',
    ],
    results: {
      intro: 'Dengan infrastruktur dan jaringan yang ditangani oleh Gizera, Anda memperoleh:',
      items: [
        'Ketersediaan sistem (uptime) maksimal dengan latensi rendah',
        'Proteksi keamanan jaringan terpadu dari potensi serangan siber',
        'Penataan perangkat dan kabel ruang server yang rapi dan terstandarisasi',
        'Kemudahan pemantauan dan skalabilitas jaringan untuk ekspansi cabang masa depan',
        'Respon cepat tim dukungan teknis dalam mitigasi gangguan konektivitas',
      ],
    },
  },
]

