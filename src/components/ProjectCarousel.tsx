import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProjectCarouselProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [images, currentIndex]);

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  const handleSelect = (index: number) => {
    stopAutoSlide();
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="flex flex-col space-y-3 w-full">
      {/* Active Image Drawer */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <OptimizedImage
              src={images[currentIndex]}
              alt={`${projectTitle} galeri gambar ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              aspectRatio="aspect-auto h-full w-full"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-md text-zinc-300 text-xs">
          Progres Galeri {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Control Navigation Bar (Permanently underneath image, as requested) */}
      <div className="flex items-center justify-between bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 max-w-xs mx-auto w-full">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center p-1.5 rounded-md bg-zinc-800 hover:bg-orange-600 active:scale-95 text-zinc-300 hover:text-white transition duration-200 border border-zinc-700/50 shadow-sm"
          title="Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Thumbnail or Dots count */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-600 w-5' 
                  : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Pilih slide ke-${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center p-1.5 rounded-md bg-zinc-800 hover:bg-orange-600 active:scale-95 text-zinc-300 hover:text-white transition duration-200 border border-zinc-700/50 shadow-sm"
          title="Selanjutnya"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
