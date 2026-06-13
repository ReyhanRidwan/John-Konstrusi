import { IMAGES } from '../constants/images';
import { Project, Service, FaqItem, Testimonial, Article } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Renovasi Rumah Kolonial Ceporan",
    category: "Renovasi Total",
    challenge: "Struktur atap hampir runtuh dan pondasi mengalami pergeseran tanah akibat sistem drainase yang buruk selama puluhan tahun.",
    solution: "Pemasangan pondasi cakar ayam tambahan di 8 titik kritis, rekonstruksi total sistem pembuangan air hujan bawah tanah, serta penggantian rangka atap menggunakan baja ringan premium dengan genteng keramik berglazur.",
    beforeImg: IMAGES.project1.before,
    afterImg: IMAGES.project1.after,
    gallery: IMAGES.project1.gallery,
    specs: {
      luas: "180 m²",
      tipe: "Rumah Klasik Kolonial",
      durasi: "4 Bulan",
      lokasi: "Ceporan, Gantiwarno, Klaten"
    }
  },
  {
    id: "proj-2",
    title: "Villa Mewah Minimalis Modern",
    category: "Bangun Baru",
    challenge: "Lahan berkontur miring ekstrim yang tidak stabil serta keterbatasan akses jalan masuk untuk armada pencampur semen (molen beton).",
    solution: "Penerapan rekayasa sipil footing bertingkat (terrace footing) yang diperkuat dinding penahan tanah (retaining wall) beton masif, serta mobilisasi material cerdas menggunakan sistem estafet konveyor portabel.",
    beforeImg: IMAGES.project2.before,
    afterImg: IMAGES.project2.after,
    gallery: IMAGES.project2.gallery,
    specs: {
      luas: "240 m²",
      tipe: "Hunian Modern Tropis",
      durasi: "6 Bulan",
      lokasi: "Wedi, Klaten"
    }
  },
  {
    id: "proj-3",
    title: "Restorasi Hunian Joglo Klasik",
    category: "Restorasi Kayu & Struktur",
    challenge: "Rangka kayu jati 'Soko Guru' utama yang berusia di atas 80 tahun mengalami pelapukan parah dan diserang koloni rayap bawah tanah.",
    solution: "Suntik resin polimer berkekuatan mekanis tinggi pada core kayu yang keropos, renovasi ukiran tumpang sari secara manual oleh maestro ukir lokal, dan integrasi silent steel bracket tersembunyi sebagai perkuatan seismik.",
    beforeImg: IMAGES.project3.before,
    afterImg: IMAGES.project3.after,
    gallery: IMAGES.project3.gallery,
    specs: {
      luas: "310 m²",
      tipe: "Joglo Tradisional Jawa",
      durasi: "5 Bulan",
      lokasi: "Prambanan, Klaten"
    }
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "srv-1",
    title: "Bangun Rumah Baru",
    iconName: "Home",
    bgImg: IMAGES.services.bangunBaru,
    description: "Mewujudkan tempat tinggal impian Anda mulai dari perancangan denah nol hingga serah terima kunci fisik dengan dokumentasi lengkap.",
    features: [
      "Perencanaan arsitektur kustom (Gratis Layout & 3D)",
      "Penyusunan Rencana Anggaran Biaya (RAB) mengikat tanpa biaya siluman",
      "Sistem pemantauan progres berkala melalui grup koordinasi",
      "Garansi pemeliharaan struktural selama 12 bulan penuh"
    ]
  },
  {
    id: "srv-2",
    title: "Renovasi Rumah Total",
    iconName: "Hammer",
    bgImg: IMAGES.services.renovasi,
    description: "Memperbarui tampilan, memperkuat struktur lama, dan mengoptimalkan tata ruang rumah lama Anda agar lebih lapang dan fungsional.",
    features: [
      "Perkuatan balok beton dan struktur kolom dasar",
      "Pembenahan total tata letak interior (Space Re-layout)",
      "Penggantian pipa air mampet dan instalasi kabel anti-korsleting",
      "Pembersihan menyeluruh sisa puing saat proyek selesai"
    ]
  },
  {
    id: "srv-3",
    title: "Desain Arsitektur & Interior",
    iconName: "DraftingCompass",
    bgImg: IMAGES.services.arsitektur,
    description: "Menggabungkan nilai estetika tinggi, ergonomi sirkulasi udara, serta perhitungan daya dukung beban mekanis secara presisi.",
    features: [
      "Rancangan visual 3D photorealistic eksterior & interior",
      "Gambar Detail Engineering Design (DED) lengkap untuk izin IMB",
      "Skema tata pencahayaan alami (eco-lighting) hemat energi",
      "Panduan kurasi pembelian material furnitur bernilai seni"
    ]
  },
  {
    id: "srv-4",
    title: "Konstruksi Rumah Toko & Komersial",
    iconName: "Building2",
    bgImg: IMAGES.services.interior,
    description: "Membangun pertokoan, kantor regional, ruko lantai bertingkat yang fungsional, tahan lama, aman, serta cepat dibangun.",
    features: [
      "Sistem kerja shift terencana untuk percepatan proyek",
      "Pilihan material tahan gores berat & beban tinggi (heavy duty)",
      "Integrasi proteksi penangkal petir bersertifikat dinas sipil",
      "Pemberian sertifikasi kekuatan struktur untuk ketenangan bisnis"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "tst-1",
    name: "Bapak Budi Santoso",
    location: "Gantiwarno, Klaten",
    rating: 5,
    quote: "Sangat bersyukur mempercayakan pembangunan rumah keluarga kami ke JohnKonstruksi. Insinyurnya sangat komunikatif, setiap rincian pengeluaran tertulis transparan dalam RAB, dan hasilnya kokoh presisi!"
  },
  {
    id: "tst-2",
    name: "Ibu Dr. Amalia Wijaya",
    location: "Prambanan, Klaten",
    rating: 5,
    quote: "Restorasi joglo kuno warisan kakek kami ditangani dengan luar biasa kreatif. Mereka berhasil memperkuat pondasi tanpa mengubah struktur kayu antik aslinya. Sentuhan profesional yang langka."
  },
  {
    id: "tst-3",
    name: "Bapak Roni Hermawan",
    location: "Wedi, Klaten",
    rating: 5,
    quote: "Kamarnya direnovasi total dengan konsep minimalis tropis masa kini. Cara kerja tukangnya rapi, bersih, dan proyek terselesaikan lebih cepat dua minggu dari target kontrak semula. Rekomendasi utama!"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apakah gratis konsultasi dan survey lokasi di sekitar Klaten?",
    answer: "Ya, betul sekali. Kami memberikan layanan konsultasi awal, diskusi sketsa tata ruang kasar, serta survey pengukuran tanah di seluruh wilayah Kabupaten Klaten, Sleman, Bantul, dan Yogyakarta tanpa dipungut biaya sepeser pun.",
    category: "Layanan"
  },
  {
    id: "faq-2",
    question: "Bagaimana sistem pembayaran termin pembangunan rumah baru?",
    answer: "Pembayaran dilakukan secara bertahap (biasanya dibagi dalam 4-5 termin kerja). Tiap termin akan ditagihkan hanya setelah progres riil konstruksi di lapangan mencapai pencapaian tertentu (milestone) yang diverifikasi bersama.",
    category: "Biaya"
  },
  {
    id: "faq-3",
    question: "Berapa lama waktu pengerjaan untuk bangun rumah baru dari nol?",
    answer: "Untuk rumah lantai satu berkisar antara 2.5 hingga 4 bulan. Sedangkan untuk rumah lantai dua berkisar antara 4.5 hingga 7 bulan. Waktu pelaksanaan sangat dipengaruhi oleh luasan lantai, kerumitan arsitektur, serta kondisi cuaca musiman.",
    category: "Waktu"
  },
  {
    id: "faq-4",
    question: "Apakah material konstruksi yang dipakai dapat disesuaikan budget?",
    answer: "Tentu saja. Kami mengkategorikan spesifikasi material ke dalam tigal level: Standar (hemat namun kokoh), Medium (seimbang estetika), dan Premium (material mewah tahan lama). Semuanya dituangkan dalam lampiran RAB tertulis.",
    category: "Biaya"
  },
  {
    id: "faq-5",
    question: "Apakah JohnKonstruksi memberikan garansi tertulis setelah serah terima?",
    answer: "Ya. Setiap proyek pembangunan baru mendapatkan jaminan garansi kebocoran penutup atap, retak dinding, dan kebocoran pipa air selama 365 hari (1 tahun). Untuk renovasi parsial, kami beri garansi pemeliharaan 3 bulan.",
    category: "Layanan"
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    title: "Panduan Praktis Menghitung RAB Bangun Rumah Baru di Indonesia",
    category: "Biaya",
    excerpt: "Hindari biaya bengkak tak terduga! Baca panduan praktis dari Founder JohnKonstruksi tentang menghitung Rencana Anggaran Biaya struktur rumah secara aman.",
    content: `Menyusun Rencana Anggaran Biaya (RAB) adalah benteng pertahanan utama Anda dari resiko proyek mangkrak di tengah jalan. Banyak pemilik hunian terjebak dengan penawaran harga murah per meter persegi tanpa memperhatikan spesifikasi detail di dalam lampiran material.

Komponen mendasar dalam RAB struktural meliputi:
1. Pekerjaan Persiapan (Pembersihan lahan, pasang bouwplank paku kayu).
2. Pekerjaan Tanah (Galian pondasi batu kali, urugan pasir padat).
3. Struktur Utama (Pembesian sengkang balok beton bertulang 12mm standar SNI).
4. Dinding & Lantai (Batu bata merah bakar lokal Ceporan / bata ringan, plesteran semen instan, keramik keramik).
5. Penutup Atap (Rangka baja ringan galvalum tebal minimal 0.75mm, genteng flat).

Dengan menyusun detail volume dan harga satuan bahan secara rapi sebelum kontrak ditandatangani, Anda mengunci kepastian harga tanpa khawatir ada penagihan biaya tambahan ilegal selama proses kerja berlangsung.`,
    date: "10 Juni 2026",
    readTime: "5 Menit",
    bgImg: IMAGES.services.bangunBaru,
    author: "Ir. Hendra Wijaya"
  },
  {
    id: "art-2",
    title: "Mengapa Rangka Baja Ringan Lebih Unggul Dibanding Rangka Kayu?",
    category: "Material",
    excerpt: "Analisis teknis sosiologis mengapa baja ringan lebih disukai untuk hunian tahan gempa di area Klaten dan sekitarnya.",
    content: `Wilayah Jawa Tengah selatan tergolong sebagai kawasan rawan aktivitas seismik teratur. Oleh sebab itu, bobot mati penutup atap rumah sangat krusial dalam kriteria bangunan tahan gempa.

Rangka kayu jati kelas satu memang memiliki nilai seni tinggi, namun keterbatasan ketersediaan di alam menuntut harga beli yang selangit. Sebaliknya, kayu kelas rendah sangat rentan terhadap serangan hama rayap pemakan selulosa serta kelembaban tinggi tropis yang memicu pembusukan sel struktural.

Baja ringan bersertifikat SNI menawarkan keuntungan mutlak:
- **Daya Tepat Ukur**: Tidak menyusut, memuai, atau melengkung akibat pergantian cuaca tajam.
- **Lapisan Anti-Karat**: Dilapisi paduan Zinc-Alumunium (Galvalum) yang memproteksi logam dari korosi karat udara lembab.
- **Keamanan Struktur**: Bersifat non-combustible (tidak merambatkan jilatan api kebakaran) serta beban tarik seimbang yang mengurangi resiko runtuhnya atap saat gempa bumi melanda.`,
    date: "5 Juni 2026",
    readTime: "4 Menit",
    bgImg: IMAGES.project1.gallery[0],
    author: "Bambang Susilo, Site Specialist"
  },
  {
    id: "art-3",
    title: "Sering Diabaikan! Kenali Retak Rambut vs Retak Struktur Pada Dinding",
    category: "Struktur",
    excerpt: "Kenali ciri-ciri visual retak dinding yang berbahaya bagi keselamatan penghuni rumah sebelum kerusakan makin meluas.",
    content: `Dinding rumah yang retak seringkali dinilai hanya mengganggu masalah keindahan (estetika). Namun, jika dilihat dari sudut pandang keselamatan sipil, terdapat retak dinding yang merupakan tanda kerusakan fatal pada pondasi tanah atau balok penopang lantai atas.

Mari kita bagi jenis retakan menjadi dua tipe:
1. **Retak Rambut (Non-Struktural)**: Biasanya memiliki ketebalan di bawah 1mm, bercabang acak seperti rambut manusia. Ini disebabkan kegagalan material plesteran semen yang menyusut saat mengering terlalu cepat tanpa disiram air yang cukup. Cukup diatasi dengan plamir dinding elastis sebelum pengecetan ulang.
2. **Retak Struktur (Fatal)**: Pola retakan tebal, berbentuk garis diagonal miring melewatin batu bata, atau retak horizontal memanjang tepat di sambungan tiang kolom beton. Retakan ini biasanya melebar dari hari ke hari akibat pergeseran tanah pondasi bawah. Solusinya memerlukan injeksi cairan epoxy beton khusus atau pembuatan tiang kolom pembantu baru.`,
    date: "28 Mei 2026",
    readTime: "6 Menit",
    bgImg: IMAGES.portfolioBefore,
    author: "Ir. Hendra Wijaya"
  },
  {
    id: "art-4",
    title: "Teknologi Pondasi Cakar Ayam: Pondasi Kokoh di Atas Tanah Klaten",
    category: "Pondasi",
    excerpt: "Mengenal cara kerja penemuan struktur legendaris Ir. Sedyatmo dalam mendistribusikan beban secara merata di tanah labil pesawahan.",
    content: `Banyak wilayah di dataran rendah Klaten berupa tanah bekas area pesawahan aktif yang memiliki kandungan air tanah tinggi serta daya dukung beban lapisan tanah yang labil.

Ketika mendirikan bangunan lantai dua ke atas, fondasi batu kali standar tidak lagi memadai. Di sinilah metode pondasi cakar ayam bertindak sebagai penyelamat struktur:

Pondasi ini terdiri dari plat beton tipis bertulang yang disatukan secara monolit dengan pipa-pipa beton vertikal (cakar) di bawahnya. Mekanisme gesek antara silinder pipa beton dengan tanah padat di sekitarnya membentuk satu kesatuan slab kaku yang mencegah bangunan miring atau ambles sebagian. Kami di JohnKonstruksi selalu melakukan uji sondir tanah awal untuk menetapkan kedalaman galian cakar ayam yang optimal demi integritas bangunan jangka panjang.`,
    date: "15 Mei 2026",
    readTime: "5 Menit",
    bgImg: IMAGES.project1.gallery[2],
    author: "Ir. Hendra Wijaya"
  },
  {
    id: "art-5",
    title: "Tips Mendesain Rumah Tropis Modern Agar Tetap Sejuk Tanpa AC",
    category: "Arsitektur",
    excerpt: "Terapkan ventilasi silang, dinding bernafas (roster), dan overhang lebar untuk hunian sejuk ramah lingkungan di iklim hangat.",
    content: `Tinggal di iklim tropis khatulistiwa seringkali membuat ruangan di dalam rumah terasa pengap di siang hari, memaksa kita menyalakan pendingin ruangan (AC) sepanjang hari dengan biaya pemakaian listrik yang melonjak.

Padahal, dengan menerapkan prinsip arsitektur tropis pasif, kita bisa menciptakan hunian yang tetap sejuk secara alami:
- **Cross Ventilation (Ventilasi Silang)**: Menempatkan bukaan jendela yang berhadapan secara diagonal di ruangan agar sirkulasi udara luar bersirkulasi masuk dan mendorong udara panas keluar secara optimal.
- **Plafon Tinggi (High Ceiling)**: Jarak lantai ke plafon di atas 3.2 meter memberi ruang penampung udara panas naik ke atas di atas area aktivitas manusia sebelum dibuang melalui celah atap.
- **Overhang yang Lebar**: Atap teritisan yang menjorok keluar sejauh 1 - 1.2 meter dapat menghindari sorotan terik matahari langsung serta tampias air hujan deras mengenai dinding kaca rumah.`,
    date: "8 Mei 2026",
    readTime: "4 Menit",
    bgImg: IMAGES.services.arsitektur,
    author: "Sarah Angelica, Lead Designer"
  }
];
