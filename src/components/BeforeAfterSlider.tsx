import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import OptimizedImage from './OptimizedImage';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeAlt?: string;
  afterAlt?: string;
  heightClass?: string;
}

export default function BeforeAfterSlider({
  beforeImg,
  afterImg,
  beforeAlt = "Sebelum Konstruksi",
  afterAlt = "Sesudah Konstruksi",
  heightClass = "h-[300px] md:h-[450px]"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) { // Left click held down
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-xl border border-zinc-800 cursor-ew-resize ${heightClass} w-full`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* After image is on bottom */}
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src={afterImg}
          alt={afterAlt}
          className="w-full h-full object-cover"
          aspectRatio="aspect-auto h-full w-full"
        />
        <div className="absolute right-4 top-4 bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase rounded-md tracking-wider shadow-lg z-10">
          SESUDAH
        </div>
      </div>

      {/* Before image is on top, clipped */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '500px' }}>
          <OptimizedImage
            src={beforeImg}
            alt={beforeAlt}
            className="w-full h-full object-cover pointer-events-none"
            aspectRatio="aspect-auto h-full w-full"
          />
        </div>
        <div className="absolute left-4 top-4 bg-zinc-900/95 backdrop-blur-sm text-zinc-300 px-3 py-1 text-xs font-bold uppercase rounded-md tracking-wider shadow-lg z-10 whitespace-nowrap">
          SEBELUM
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-600 border-4 border-white shadow-xl flex items-center justify-center z-30">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8 18 2 12 8 6"></polyline>
            <polyline points="16 6 22 12 16 18"></polyline>
          </svg>
        </div>
      </div>

      {/* Mobile drag helper tooltip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-[10px] md:text-xs text-white uppercase tracking-widest font-medium text-center pointer-events-none">
        Geser garis tengah untuk komparasi
      </div>
    </div>
  );
}
