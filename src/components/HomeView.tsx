import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Hammer, 
  DraftingCompass, 
  Building2, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  BookOpen, 
  Calendar, 
  User, 
  Sparkles,
  Calculator
} from 'lucide-react';
import { PROJECTS_DATA, SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, ARTICLES_DATA } from '../data/constructionData';
import { Article } from '../types';
import OptimizedImage from './OptimizedImage';
import BeforeAfterSlider from './BeforeAfterSlider';
import CostCalculator from './CostCalculator';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  onOpenArticle: (article: Article) => void;
}

export default function HomeView({ setCurrentPage, onOpenArticle }: HomeViewProps) {
  // Hero slider index state
  const [heroIndex, setHeroIndex] = useState(0);

  // Background fade slider autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Home FAQ open element state
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Hero backgrounds array
  const heroBackgrounds = [
    "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto,w_1200,c_limit/v1778941841/slide2_vlhgia.jpg",
    "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto,w_1200,c_limit/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg"
  ];

  // Match icon by name
  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-orange-500" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-orange-500" />;
      case 'DraftingCompass': return <DraftingCompass className="w-6 h-6 text-orange-500" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-orange-500" />;
      default: return <Hammer className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div className="flex flex-col w-full text-white bg-zinc-950 font-sans">
      
      {/* 1. Hero Section (Smooth FADE Autoplay slider + centered styled text) */}
      <section className="relative h-[85vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Automatic smooth FADE background images */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={heroBackgrounds[heroIndex]}
                alt={`JohnKonstruksi slide ${heroIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-zinc-950/75 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40 z-10" />
        </div>

        {/* Text Area (Rapi & Center) */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center text-center space-y-5">
          {/* Badge Atas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900/40 border border-zinc-800 backdrop-blur-md shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2 animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest text-zinc-300 font-mono">
              KOKOH, PRESISI, DAN DIBANGUN UNTUK GENERASI.
            </span>
          </motion.div>

          {/* Judul Utama */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight max-w-3xl"
          >
            “Wujudkan Rumah Impian Anda dari Nol Hingga Sempurna.”
          </motion.h1>

          {/* Sub-deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-zinc-400 text-xs md:text-sm font-medium italic leading-relaxed max-w-2xl px-2"
          >
            “Kami percaya struktur yang kuat berawal dari perencanaan yang matang. Dari bangun baru hingga renovasi total, kami hadir memastikan setiap sudut hunian Anda kokoh, fungsional, dan bernilai tinggi.”
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <a
              href="https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2C%20saya%20sudah%20melihat%20website%20Anda%20dan%20ingin%20berkonsultasi%20mengenai%20proyek%20pembangunan%20rumah."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-full border border-white/70 hover:border-orange-500 font-extrabold text-[11px] md:text-xs text-white uppercase tracking-widest transition duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-600/10 active:scale-95 group"
            >
              <span>Mulai Konsultasi Proyek &rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Highlight (Grid 4 kolom) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">LAYANAN UNGGULAN</span>
          <h2 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            APA YANG KAMI KERJAKAN
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-xs md:text-sm">
            Menyediakan cakupan layanan terintegrasi untuk mewujudkan struktur hunian modern dengan pengerjaan presisi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between hover:border-orange-600/50 hover:shadow-lg hover:shadow-orange-600/5 transition duration-300 group"
            >
              <div>
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 inline-block mb-5 group-hover:bg-orange-600/10 group-hover:border-orange-600/30 transition duration-300">
                  {renderServiceIcon(srv.iconName)}
                </div>
                <h3 className="font-sans font-bold text-base text-white uppercase tracking-wide group-hover:text-orange-500 transition mb-2">
                  {srv.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>
              
              <button
                onClick={() => setCurrentPage('services')}
                className="flex items-center text-[10px] font-bold uppercase text-orange-600 tracking-wider group-hover:translate-x-1 transition duration-200 mt-2"
              >
                <span>Pelajari Detail &rarr;</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Project Shortcut (Before/After Slider & CTA Link to portfolio) */}
      <section className="py-20 bg-zinc-900/30 border-y border-zinc-900 px-4 md:px-8 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Info text */}
          <div className="w-full lg:w-5/12 space-y-5">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">PROYEK TERBARU KAMI</span>
            <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight leading-tight">
              PROSES TRANSFORMASI NYATA (BEFORE VS AFTER)
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Lihat foto perbandingan langsung kondisi bangunan sebelum dirombak dan hasil akhir yang kokoh serta elegan hasil karya ahli teknik sipil JohnKonstruksi.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-zinc-350 bg-zinc-950 p-2.5 rounded-lg border border-zinc-850">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>Proyek: {PROJECTS_DATA[0].title}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-zinc-350 bg-zinc-950 p-2.5 rounded-lg border border-zinc-850">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>Lokasi: {PROJECTS_DATA[0].specs.lokasi}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setCurrentPage('projects')}
                className="inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-full bg-orange-600 hover:bg-orange-700 font-bold text-xs text-white uppercase tracking-widest transition duration-300 active:scale-95"
              >
                <span>Lihat Semua Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live comparison slider */}
          <div className="w-full lg:w-7/12">
            <BeforeAfterSlider
              beforeImg={PROJECTS_DATA[0].beforeImg}
              afterImg={PROJECTS_DATA[0].afterImg}
              beforeAlt="Sebelum renovasi bangunan tua Ceporan"
              afterAlt="Hasil pengerjaan rumah klasik Ceporan oleh JohnKonstruksi"
            />
          </div>

        </div>
      </section>

      {/* 4. Kalkulator Biaya Bangun Rumah (RAB Kasar) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-1">
            <Calculator className="w-4 h-4" />
            KALKULATOR RAB INDEPENDEN
          </span>
          <h2 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            SIMULASI BIAYA RUMAH (RAB)
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-xs md:text-sm">
            Hitung perkiraan kasar total pengeluaran konstruksi hunian idaman sesuai luas, jumlah lantai, dan mutu bahan berkualitas pilihan Anda.
          </p>
        </div>

        <CostCalculator />
      </section>

      {/* 5. Home Testimonial (Sampai 3 vertikal di mobile) */}
      <section className="py-20 bg-zinc-900/20 border-t border-zinc-900 px-4 md:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">TESTIMONIAL CLIENT</span>
            <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight leading-none mb-4">
              KATA MEREKA TENTANG KAMI
            </h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-zinc-400 text-xs md:text-sm">
              Kepuasan klien kami adalah bukti komitmen JohnKonstruksi terhadap hasil pengerjaan struktur bangunan yang kokoh dan presisi.
            </p>
          </div>

          {/* Testimonial Cards Layout - Normal Grid, and 3 vertikal stacking for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-950 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex space-x-1 mb-4 text-orange-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-350 text-xs md:text-sm italic leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>
                
                <div className="border-t border-zinc-900 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">{t.name}</h4>
                    <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">{t.location}</span>
                  </div>
                  <div className="text-[10px] text-orange-600 font-mono uppercase bg-orange-500/10 px-2 py-0.5 rounded-md font-bold">
                    KLIEN RESMI
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Home Artikel (Sampai 3) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">ARTIKEL & ENSIKLOPEDIA</span>
          <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight leading-none mb-4">
            EDUKASI TEKNOLOGI KONSTRUKSI
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-xs md:text-sm">
            Kumpulan tips sipil, mitigasi kerusakan bangunan, serta panduan memilih spesifikasi material terbaik karya tim insinyur senior kami.
          </p>
        </div>

        {/* Display exactly 3 articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.slice(0, 3).map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-805 hover:shadow-xl transition group"
            >
              <div>
                <OptimizedImage
                  src={art.bgImg}
                  alt={art.title}
                  aspectRatio="aspect-video"
                />
                <div className="p-6">
                  {/* Category and date row */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono uppercase mb-3">
                    <span className="bg-orange-600/10 text-orange-500 px-2.5 py-1 rounded-md font-bold">
                      {art.category}
                    </span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="font-sans font-bold text-sm md:text-base text-white hover:text-orange-500 uppercase tracking-wide leading-snug transition line-clamp-2 mb-3">
                    {art.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex justify-between items-center border-t border-zinc-850/40 mt-2">
                <div className="flex items-center space-x-1.5 text-[10px] text-zinc-500 font-medium">
                  <User className="w-3 h-3 text-orange-600" />
                  <span>{art.author}</span>
                </div>
                <button
                  onClick={() => onOpenArticle(art)}
                  className="flex items-center space-x-1 text-[11px] font-extrabold uppercase text-orange-600 tracking-wider hover:text-orange-550 transition"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>BACA &rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action to show and open all 5 articles */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('faq')} // FAQ page has our total encyclopedias/articles list
            className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-orange-500 hover:text-white border-b border-orange-600 pb-1 hover:border-white transition duration-200"
          >
            <span>BACA 5 PANDUAN KONSTRUKSI KAMI &rarr;</span>
          </button>
        </div>
      </section>

      {/* 7. Home FAQ - Interactive Akordion singkat */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-900/10 px-4 md:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">TANYA JAWAB CEPAT</span>
            <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight leading-none mb-4">
              PERTANYAAN UMUM
            </h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full mb-4"></div>
          </div>

          {/* FAQS briefly list (up to 3 for home, full inside FAQ tab) */}
          <div className="space-y-4">
            {FAQ_DATA.slice(0, 3).map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div 
                  key={item.id}
                  className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left p-4 md:p-5 flex justify-between items-center bg-zinc-950 hover:bg-zinc-900 transition focus:outline-none"
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase font-mono bg-orange-500/10 text-orange-600 px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                      <span className="font-bold text-xs md:text-sm text-white uppercase tracking-wide leading-tight">
                        {item.question}
                      </span>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 md:p-5 border-t border-zinc-900 text-xs md:text-sm text-zinc-400 font-medium leading-relaxed bg-zinc-950/40">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setCurrentPage('faq')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition duration-200"
            >
              Lihat Seluruh Pertanyaan FAQ Selengkapnya &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 8. Home CTA (Call to action banner) */}
      <section className="relative py-24 px-4 md:px-8 w-full overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-center">
        {/* Decorative elements behind */}
        <div className="absolute inset-0 z-0 bg-black/10 mix-blend-overlay"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] font-mono text-white/90 bg-white/10 px-4 py-1 rounded-full border border-white/20">
            KONSULTASI GRATIS &bull; TANPA KOMITMEN
          </span>
          <h2 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-none">
            Rencanakan Rumah Impian Anda Hari Ini
          </h2>
          <p className="text-white/80 text-xs md:text-sm italic font-medium max-w-2xl leading-relaxed">
            “Dapatkan estimasi penawaran RAB presisi, sketsa gambar denah gratis, beserta survey pengukuran medan tanah gratis dari insinyur berpengalaman JohnKonstruksi.”
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2C%20saya%20tertarik%20mencoba%20survey%20lokasi%20gratis%20untuk%20rencana%20proyek%20saya."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-900 py-3.5 px-8 rounded-full font-black text-xs text-white uppercase tracking-widest transition duration-300 shadow-xl hover:shadow-black/20 active:scale-95 group"
            >
              <MessageSquare className="w-4 h-4 text-orange-500 animate-pulse mr-1" />
              <span>HUBUNGI INYUR LEWAT WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
