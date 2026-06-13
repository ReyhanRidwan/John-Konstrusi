import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Clock, User, Filter, ArrowRight } from 'lucide-react';
import { FAQ_DATA, ARTICLES_DATA } from '../data/constructionData';
import { Article } from '../types';
import OptimizedImage from './OptimizedImage';

interface FaqViewProps {
  onOpenArticle: (article: Article) => void;
}

export default function FaqView({ onOpenArticle }: FaqViewProps) {
  // Navigation sub-tab state (FAQ vs Articles)
  const [subTab, setSubTab] = useState<'faq' | 'artikel'>('faq');

  // Accordion active element state
  const [openId, setOpenId] = useState<string | null>("faq-1");

  // Filter category state for FAQs
  const [faqFilter, setFaqFilter] = useState<'Semua' | 'Layanan' | 'Biaya' | 'Waktu'>('Semua');

  const filteredFaqs = FAQ_DATA.filter(item => {
    if (faqFilter === 'Semua') return true;
    return item.category === faqFilter;
  });

  const categories: ('Semua' | 'Layanan' | 'Biaya' | 'Waktu')[] = ['Semua', 'Layanan', 'Biaya', 'Waktu'];

  return (
    <div className="flex flex-col w-full bg-zinc-950 text-white font-sans">
      
      {/* Page Header */}
      <section className="relative bg-orange-600 py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 mb-3">
            KONSUL TEKNIS & EDUKASI
          </span>
          <h1 className="font-sans font-black text-2xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            DOKUMENTASI KNOWLEDGE BASE
          </h1>
          <p className="text-white/95 max-w-2xl mx-auto text-xs md:text-sm font-medium italic leading-relaxed">
            “Dapatkan jawaban teknis seputar izin IMB, skema biaya pemborongan, serta artikel edukasi material hasil besutan pakar sipil kami.”
          </p>
        </div>
      </section>

      {/* Sub tabs selector */}
      <div className="bg-zinc-950 border-b border-zinc-900 sticky top-[72px] md:top-[104px] z-30 py-3">
        <div className="max-w-md mx-auto px-4">
          <div className="flex bg-zinc-900 p-1.5 rounded-full border border-zinc-800">
            <button
              onClick={() => setSubTab('faq')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                subTab === 'faq' 
                  ? 'bg-orange-600 text-white shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Tanya Jawab (FAQ)
            </button>
            <button
              onClick={() => setSubTab('artikel')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                subTab === 'artikel' 
                  ? 'bg-orange-600 text-white shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Artikel Edukasi (5)
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[500px]">
        
        <AnimatePresence mode="wait">
          
          {/* FAQ SUB-VIEW */}
          {subTab === 'faq' && (
            <motion.div
              key="faq-sub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-900 pb-6">
                <div className="flex items-center text-xs text-zinc-500 font-bold uppercase font-mono mr-2">
                  <Filter className="w-3.5 h-3.5 text-orange-600 mr-1.5" />
                  KATEGORI:
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFaqFilter(cat);
                      setOpenId(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold uppercase transition duration-200 ${
                      faqFilter === cat 
                        ? 'bg-orange-600/10 border-orange-600 text-orange-500' 
                        : 'bg-zinc-900 border-zinc-850 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Minimalist Accordion List with Orange Accents */}
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className="bg-zinc-900 border border-zinc-850 rounded-xl overflow-hidden hover:border-zinc-800 transition duration-200"
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="w-full text-left p-4 md:p-5 flex justify-between items-center bg-zinc-900 focus:outline-none"
                      >
                        <div className="flex items-center space-x-3 pr-4">
                          <span className="text-[10px] font-bold font-mono tracking-widest uppercase bg-orange-500/10 text-orange-500 px-2.5 py-0.5 rounded-md shrink-0">
                            {faq.category}
                          </span>
                          <span className="font-extrabold text-xs md:text-sm text-zinc-100 uppercase tracking-wide leading-tight group-hover:text-white transition">
                            {faq.question}
                          </span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-orange-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-zinc-950/40 border-t border-zinc-850"
                          >
                            <div className="p-4 md:p-5 text-zinc-450 text-xs md:text-sm leading-relaxed text-zinc-400 font-medium">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12 bg-zinc-900/40 rounded-xl border border-zinc-850">
                  <HelpCircle className="w-10 h-10 text-zinc-600 mx-auto mb-3 animate-pulse" />
                  <p className="text-zinc-400 text-xs font-semibold">Tidak ditemukan pertanyaan untuk kategori dipilih.</p>
                </div>
              )}
            </motion.div>
          )}

          {/* ARTICLES SUB-VIEW (Exactly 5 articles display) */}
          {subTab === 'artikel' && (
            <motion.div
              key="art-sub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ARTICLES_DATA.map((art, idx) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-800 transition shadow-lg group"
                  >
                    <div>
                      {/* Image Frame */}
                      <OptimizedImage
                        src={art.bgImg}
                        alt={art.title}
                        aspectRatio="aspect-video"
                      />
                      <div className="p-5">
                        <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono uppercase mb-2.5">
                          <span className="bg-orange-600/10 text-orange-500 py-0.5 px-2.5 rounded font-bold">{art.category}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-orange-600" />
                            {art.readTime}
                          </span>
                        </div>
                        <h3 className="font-sans font-black text-xs md:text-sm text-white hover:text-orange-500 uppercase tracking-wide leading-snug line-clamp-2 mb-2">
                          {art.title}
                        </h3>
                        <p className="text-zinc-400 text-xs leading-normal line-clamp-2">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 border-t border-zinc-850/50 flex justify-between items-center">
                      <span className="text-[10px] text-zinc-500 font-medium">Oleh {art.author}</span>
                      <button
                        onClick={() => onOpenArticle(art)}
                        className="text-orange-600 hover:text-orange-500 text-[10px] font-black uppercase tracking-wider flex items-center space-x-1"
                      >
                        <BookOpen className="w-3.5 h-3.5 mr-1" />
                        <span>BACA &rarr;</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
