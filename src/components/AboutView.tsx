import { motion } from 'motion/react';
import { Eye, Target, Award, ShieldCheck, HeartHandshake, Star } from 'lucide-react';
import { IMAGES } from '../constants/images';
import OptimizedImage from './OptimizedImage';

export default function AboutView() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const misiItems = [
    {
      id: "misi-1",
      icon: <Award className="w-5 h-5 text-orange-500" />,
      title: "STANDAR TEKNIK SIPIL SNI",
      desc: "Mengaplikasikan perhitungan kekuatan pembebanan kolom beton dan material besi sengkang SNI 100% presisi demi ketahanan seismik tahan gempa."
    },
    {
      id: "misi-2",
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      title: "RAB DETAIL & MATANG",
      desc: "Menyediakan rincian volume material dan harga satuan pemborongan secara transparan demi menghindarkan resiko pembengkakan biaya siluman."
    },
    {
      id: "misi-3",
      icon: <HeartHandshake className="w-5 h-5 text-orange-500" />,
      title: "TUKANG SELEKTIF TERAMPIL",
      desc: "Bekerja sama eksklusif dengan komunitas tukang bangunan lokal terampil yang memiliki catatan kerja rapi dan dedikasi kejujuran tinggi."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-zinc-950 text-white font-sans">
      
      {/* 1. Page Header */}
      <section className="relative bg-orange-600 py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 mb-3">
            SEJARAH & INTEGRITAS KAMI
          </span>
          <h1 className="font-sans font-black text-2xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            TENTANG JOHNKONSTRUKSI
          </h1>
          <p className="text-white/95 max-w-2xl mx-auto text-xs md:text-sm font-medium italic leading-relaxed">
            “Sebuah kisah dedikasi membangun peradaban dari tanah Klaten sejak tahun 2018 dengan mengutamakan kualitas, ketepatan estimasi, dan kejujuran kerja.”
          </p>
        </div>
      </section>

      {/* 2. Founder Section (1 Person: Ir. Hendra Wijaya CEO & Founder with large artistic photo + quote) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Large Artistic Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-900 group shadow-2xl">
              <OptimizedImage
                src={IMAGES.about.founder}
                alt="Ir. Hendra Wijaya - CEO & Founder JohnKonstruksi"
                className="w-full object-cover grayscale hover:grayscale-0 transition duration-700 aspect-[3/4]"
                aspectRatio="aspect-[3/4]"
              />
              
              {/* Overlay signature stamp */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-4 rounded-xl">
                <span className="text-[10px] font-extrabold uppercase text-orange-500 tracking-widest block mb-0.5">FOUNDER & CEO</span>
                <span className="font-sans font-black text-base text-white uppercase tracking-wider block">Ir. Hendra Wijaya</span>
                <span className="text-[10px] text-zinc-500 font-mono block">Lulusan Teknik Sipil Senior (IPKIN)</span>
              </div>
            </div>
          </div>

          {/* Inspirational Quote and details */}
          <div className="w-full lg:w-7/12 space-y-6">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">PESAN PEMIMPIN</span>
            <h2 className="font-sans font-black text-xl md:text-3xl text-white uppercase tracking-tight leading-snug">
              “KAMI TIDAK SEKEDAR MENYUSUN BATA, KAMI MEMBANGUN WARISAN KELUARGA.”
            </h2>
            <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
            
            <p className="text-zinc-405 text-xs md:text-sm leading-relaxed text-zinc-350">
              Membangun rumah adalah pencapaian terbesar dalam hidup seseorang atau sebuah keluarga. Seringkali, tabungan puluhan tahun dipertaruhkan untuk hari esok yang nyaman dan aman. Namun, banyak kepedihan akibat ketidakjujuran pemborong amatir di luar sana.
            </p>

            {/* Custom stylized big italic quote blocks */}
            <div className="bg-zinc-900 border-l-4 border-orange-600 p-5 rounded-r-xl">
              <p className="text-zinc-200 text-xs md:text-sm italic font-medium leading-relaxed">
                “Tujuan saya mendirikan JohnKonstruksi sangat sederhana: Mengembalikan kejujuran mutlak dalam dunia pembangunan. Melalui perhitungan sipil yang akurat, pembacaan gambar teknik yang jeli, dan pengerjaan material tulus tanpa mencuri spesifikasi besi, kami pastikan setiap rupiah investasi Anda terwujud dalam struktur yang kokoh, presisi, dan diwariskan dengan bangga untuk generasi mendatang.”
              </p>
              <div className="flex space-x-1 mt-4 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              Di bawah pimpinan Ir. Hendra Wijaya, JohnKonstruksi berhasil menyelesaikan lebih dari 45 proyek konstruksi tempat tinggal mewah, rumah minimalis, ruko komersial, dan renovasi total di seluruh Jogjakarta dan Klaten dengan tingkat kepuasan sempurna.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Visi & Misi Section (Staggered layout appearing one by one) */}
      <section className="py-20 bg-zinc-900/40 border-t border-zinc-900 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Visi Left Column */}
          <div className="w-full lg:w-5/12 bg-zinc-950 p-8 rounded-2xl border border-zinc-900 space-y-4">
            <div className="p-3 bg-orange-600/15 border border-orange-600/30 rounded-xl inline-block mb-2">
              <Eye className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block font-mono">ARAH MASA DEPAN KAMI</span>
            <h2 className="font-sans font-black text-lg md:text-2xl text-white uppercase tracking-tight">
              VISI PERUSAHAAN
            </h2>
            <p className="text-zinc-350 text-xs md:text-sm italic leading-relaxed font-semibold">
              “Menjadi patokan kejujuran utama (gold standard) di industri jasa konstruksi bangunan Jawa Tengah, dengan menyandingkan detail arsitektur modern yang memikat, keamanan teknik sipil SNI, serta efisiensi anggaran pembiayaan.”
            </p>
          </div>

          {/* Misi Right Column (Staggered Animation) */}
          <div className="w-full lg:w-7/12 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-orange-600/15 border border-orange-600/30 rounded-lg">
                <Target className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">LANGKAH OPERASIONAL</span>
                <h2 className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-tight">
                  MISI PEMBANGUNAN KAMI
                </h2>
              </div>
            </div>

            {/* Misi List (Staggered motion trigger) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {misiItems.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className="bg-zinc-950 p-5 rounded-xl border border-zinc-900 hover:border-zinc-805 transition duration-205 flex items-start space-x-4"
                >
                  <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-1 block">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-normal font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Team Image Backdrop Section */}
      <section className="relative py-28 px-4 w-full overflow-hidden text-center">
        {/* Supporting Team Backdrop Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.about.team}
            alt="Tim lapangan Tukang JohnKonstruksi"
            className="w-full h-full object-cover filter grayscale brightness-[0.25]"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-5">
          <span className="text-[10px] font-bold text-orange-500 tracking-wider uppercase bg-orange-500/10 py-1.5 px-3 rounded-full border border-orange-600/20">
            DIBALIK LAYAR PROYEK
          </span>
          <h2 className="font-sans font-black text-xl md:text-3xl text-white uppercase tracking-tight leading-none">
            TIM KONSTRUKSI YANG SOLID & BERDEDIKASI
          </h2>
          <p className="text-zinc-300 text-xs leading-relaxed max-w-xl mx-auto italic">
            “Dari perancang gambar komputer, mandor lapangan, hingga armada tukang gali pondasi, kami dipersatukan oleh nilai yang sama: Menciptakan maha karya kuat yang awet di setiap jengkalnya.”
          </p>
          <div className="pt-2">
            <span className="text-[11px] font-mono font-bold text-orange-550 border-t border-zinc-800 inline-block pt-2">
              Jasa Pembangunan &bull; Renovasi &bull; Sipil Berstándar Klaten
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
