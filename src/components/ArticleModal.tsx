import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Clock, FileText, CheckCircle } from 'lucide-react';
import { Article } from '../types';
import OptimizedImage from './OptimizedImage';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
          >
            {/* Header top row absolute close button */}
            <div className="sticky top-0 z-30 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2 text-[10px] text-orange-500 font-mono font-bold uppercase tracking-widest">
                <FileText className="w-4 h-4 text-orange-600" />
                <span>ARTIKEL ENSIKLOPEDIA SIPIL</span>
              </div>
              <button
                onClick={onClose}
                className="bg-zinc-805 hover:bg-orange-600/10 text-zinc-400 hover:text-orange-500 p-1.5 rounded-lg border border-zinc-800 transition focus:outline-none focus:ring-1 focus:ring-orange-600"
                aria-label="Tutup jendela"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main content body */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Cover visual banner */}
              <div className="rounded-xl overflow-hidden border border-zinc-800 relative aspect-video w-full max-h-[300px]">
                <OptimizedImage
                  src={article.bgImg}
                  alt={article.title}
                  aspectRatio="aspect-auto h-full w-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 items-center">
                  <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded shadow-md">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Title heading */}
              <h1 className="font-sans font-black text-xl md:text-2xl text-white uppercase tracking-tight leading-snug">
                {article.title}
              </h1>

              {/* Metadata tags */}
              <div className="flex flex-wrap text-zinc-500 font-mono text-[10px] uppercase gap-x-6 gap-y-2 border-y border-zinc-800/80 py-3.5">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-500" />
                  <span>Penulis: <strong>{article.author}</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-500" />
                  <span>Diterbitkan: <strong>{article.date}</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  <span>Estimasi Baca: <strong>{article.readTime}</strong></span>
                </span>
              </div>

              {/* Text content details paragraph with beautiful readability */}
              <div className="text-zinc-300 text-xs md:text-sm leading-relaxed space-y-4 font-medium whitespace-pre-line select-text">
                {article.content}
              </div>

              {/* Article endorsement footnote */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 flex items-start space-x-3 mt-6">
                <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5 animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block font-mono">Tinjauan Sipil Terverifikasi</span>
                  <p className="text-zinc-400 text-[11px] leading-relaxed italic">
                    Artikel ini disusun secara ilmiah berdasarkan standar komparasi SNI beton bertulang dan revisi regulasi IMB terbaru di Kabupaten Klaten.
                  </p>
                </div>
              </div>

            </div>

            {/* Footer action button */}
            <div className="sticky bottom-0 bg-zinc-900 border-t border-zinc-800 p-4 flex justify-end gap-3 rounded-b-2xl">
              <button
                onClick={onClose}
                className="py-2 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-350 hover:text-white text-xs font-bold uppercase tracking-wider transition"
              >
                Kembali
              </button>
              <a
                href={`https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2C%20saya%20membaca%20artikel%20Anda%20"${encodeURIComponent(article.title)}"%20dan%20ingin%25konsultasi.`}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                Konsultasikan Topik Ini &rarr;
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
