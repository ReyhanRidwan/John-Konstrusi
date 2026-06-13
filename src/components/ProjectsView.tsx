import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/constructionData';
import { ShieldCheck, MessageSquare, Calendar, Compass, Construction } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProjectCarousel from './ProjectCarousel';

export default function ProjectsView() {
  return (
    <div className="flex flex-col w-full bg-zinc-950 text-white font-sans">
      
      {/* Page Header (Full orange background with dynamic blurred decorations) */}
      <section className="relative bg-orange-600 py-16 md:py-24 px-4 overflow-hidden">
        {/* Blurred circles as decorative abstract overlay */}
        <div className="absolute top-1/2 -left-16 w-48 h-48 rounded-full bg-amber-500/30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-orange-500/40 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
              BUKTI KARYA NYATA
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-black text-2xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4"
          >
            PORTOFOLIO PROYEK PILIHAN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/95 max-w-2xl mx-auto text-xs md:text-sm font-medium italic leading-relaxed"
          >
            “Setiap struktur menggambarkan sebuah dedikasi pengerjaan sipil, presisi geometri, kekuatan material, dan kepuasan pemilik rumah.”
          </motion.p>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-28">
          {PROJECTS_DATA.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-10 items-stretch ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Left/Right depending on even vs odd index (Desktop) and stacked (Mobile) */}
                
                {/* 1. INFO PROYEK (Kiri/Desktop - or depending on alternate row) */}
                <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-6 bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-850">
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                      <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block font-mono">
                        PROYEK KE-0{idx + 1}
                      </span>
                      <span className="bg-orange-500/10 text-orange-600 font-bold font-mono text-[10px] uppercase py-1 px-2.5 rounded-md">
                        {proj.category}
                      </span>
                    </div>

                    <h2 className="font-sans font-black text-xl md:text-2xl text-white uppercase tracking-tight">
                      {proj.title}
                    </h2>

                    {/* Highly descriptive solved challenges/solutions in italics as requested */}
                    <div className="space-y-4 pt-1">
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Tantangan Proyek:</span>
                        <p className="text-zinc-350 text-xs md:text-sm italic leading-relaxed font-semibold">
                          “{proj.challenge}”
                        </p>
                      </div>

                      <div className="bg-orange-600/5 p-4 rounded-xl border border-orange-600/10">
                        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider block mb-1">Solusi Teknik JohnKonstruksi:</span>
                        <p className="text-zinc-350 text-xs md:text-sm italic leading-relaxed font-semibold">
                          “{proj.solution}”
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technical details of the project */}
                  <div className="border-t border-zinc-800/80 pt-4 grid grid-cols-2 gap-3.5 text-xs text-zinc-400">
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Luas Bangunan</span>
                      <span className="text-white font-extrabold">{proj.specs.luas}</span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Tipe Bangunan</span>
                      <span className="text-white font-extrabold">{proj.specs.tipe}</span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Durasi Kerja</span>
                      <span className="text-white font-extrabold">{proj.specs.durasi}</span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Lokasi Proyek</span>
                      <span className="text-white font-extrabold">{proj.specs.lokasi}</span>
                    </div>
                  </div>
                </div>

                {/* 2. VISUAL PANEL (Kanan/Desktop - Before-After Slider + Auto-Slide Carousel of 3 images below) */}
                <div className="w-full lg:w-7/12 flex flex-col space-y-5">
                  
                  {/* Before & After Comparison Slider */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1">
                      <Compass className="w-4 h-4 text-orange-600" />
                      KOMPARASI SEBELUM & SESUDAH CONSTRUCTIONS
                    </span>
                    <BeforeAfterSlider
                      beforeImg={proj.beforeImg}
                      afterImg={proj.afterImg}
                      beforeAlt={`Foto Sebelum - ${proj.title}`}
                      afterAlt={`Foto Sesudah - ${proj.title}`}
                      heightClass="h-[280px] md:h-[380px]"
                    />
                  </div>

                  {/* Progressive images carousel showing 3 detail shots */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1">
                      <Construction className="w-4 h-4 text-orange-600" />
                      GALERI GALERIFOTOGRAPHY DETAIL PEKERJAAN
                    </span>
                    <ProjectCarousel
                      images={proj.gallery}
                      projectTitle={proj.title}
                    />
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section at bottom */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-orange-600/10 rounded-full border border-orange-600/20 text-[10px] text-orange-500 font-extrabold uppercase font-mono">
            GARANSI STRUKTUR BERTULIS
          </div>
          <h2 className="font-sans font-black text-xl md:text-3xl text-white uppercase tracking-tight">
            INGIN MEWUJUDKAN REKAYASA KOKOH PADA HUNIAN ANDA?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm italic leading-relaxed max-w-2xl mx-auto">
            “Kekhawatiran akan struktur yang bocor, retak, atau miring hilang bersama sistem kontrol kualitas Sipil JohnKonstruksi. Hubungi tim kami sekarang juga.”
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2C%20saya%20sudah%20melihat%20detail%20semua%20portofolio%20proyek%20pilihan%20Anda.%20Saya%20tertarik%20konsultasi."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 py-3 px-8 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-full uppercase tracking-wider transition duration-300 shadow-md transform hover:scale-102"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>KONSULTASI TELEPON WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
