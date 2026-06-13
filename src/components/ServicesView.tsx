import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/constructionData';
import { Home, Hammer, DraftingCompass, Building2, CheckCircle2, MessageSquare } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function ServicesView() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-white" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-white" />;
      case 'DraftingCompass': return <DraftingCompass className="w-6 h-6 text-white" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-white" />;
      default: return <Hammer className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-zinc-950 text-white font-sans">
      
      {/* Page Header (Full subtle orange grid block) */}
      <section className="relative bg-orange-600 py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 mb-3">
            KOMPETENSI TEKNIS SIPIL
          </span>
          <h1 className="font-sans font-black text-2xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            LAYANAN UTAMA KONSTRUKSI
          </h1>
          <p className="text-white/95 max-w-2xl mx-auto text-xs md:text-sm font-medium italic leading-relaxed">
            “Kualitas tanpa kompromi. Kami menggabungkan metodologi teknik sipil SNI terbaru dengan material pilihan berdaya tahan puluhan tahun.”
          </p>
        </div>
      </section>

      {/* Services Grid (2 Columns as requested, with massive shadow on hover) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SERVICES_DATA.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden hover:border-orange-600/30 hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Supporting graphic backdrop */}
                <div className="relative h-[200px] md:h-[240px] w-full">
                  <OptimizedImage
                    src={srv.bgImg}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-700"
                    aspectRatio="aspect-auto h-full w-full"
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-black/20" />
                  
                  {/* Absolute Floating Icon Block */}
                  <div className="absolute bottom-4 left-6 bg-orange-600 p-3 rounded-xl shadow-xl border border-white/10 flex items-center justify-center">
                    {getIcon(srv.iconName)}
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-6">
                  {/* Header title */}
                  <h2 className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-wide mb-3">
                    {srv.title}
                  </h2>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {srv.description}
                  </p>

                  <div className="border-t border-zinc-800/80 my-5"></div>

                  {/* Bullet points list of features as requested */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">
                      Fitur & Keuntungan Utama:
                    </span>
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium text-zinc-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="p-6 md:p-8 pt-0 mt-4 border-t border-zinc-900 bg-zinc-950/20">
                <a
                  href={`https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2C%20saya%20tertarik%20mengenai%20layanan%20jasa%20[${encodeURIComponent(srv.title)}].%20Mohon%20info%20lebih%20lanjut.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 py-2.5 px-5 bg-zinc-900/80 hover:bg-orange-600 hover:text-white text-orange-500 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-200 border border-zinc-800 hover:border-orange-500 w-full"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>KONSULTASI SPESIFIKASI LAYANAN &rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust elements display */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-sans font-black text-lg md:text-2xl text-white uppercase tracking-tight">
            INGIN MENDAPAKAN PENGAWASAN INSINYUR SECARA PROFESIONAL?
          </h2>
          <p className="text-zinc-400 text-xs leading-relaxed max-w-2xl mx-auto">
            Setiap pengerjaan tukang sipil kami di lapangan diawasi secara langsung oleh site manager lulusan teknik sipil terakreditasi, memastikan ketepatan dimensi besi beton dan takaran semen standar deviasi SNI.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2CBagaimana%20skema%20survei%20dan%20pembikinan%20layout%203D%20untuk%20bangun%20rumah%20baru%3F"
              target="_blank"
              rel="noreferrer"
              className="inline-block py-3.5 px-8 rounded-full bg-orange-600 hover:bg-orange-700 font-extrabold text-xs text-white uppercase tracking-wider transition shadow"
            >
              JADWALKAN SURVEY LOKASI GRATIS
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
