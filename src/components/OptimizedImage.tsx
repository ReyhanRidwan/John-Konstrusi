import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants/images';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  classNameWrapper?: string;
  aspectRatio?: string; // e.g. "aspect-video", "aspect-square", "aspect-[4/3]"
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "w-full h-full object-cover", 
  classNameWrapper = "w-full h-full", 
  aspectRatio = "aspect-video" 
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src || IMAGES.fallback);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src || IMAGES.fallback);
    setLoaded(false);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(IMAGES.fallback);
    }
  };

  return (
    <div 
      className={`bg-zinc-800 overflow-hidden relative ${aspectRatio} ${classNameWrapper}`}
    >
      <motion.img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
          <div className="w-6 h-6 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
