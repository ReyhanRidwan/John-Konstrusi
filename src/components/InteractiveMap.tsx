import { useState } from 'react';
import { MapPin, ZoomIn, Compass, ExternalLink, Map } from 'lucide-react';

// Live Iframe map centered on Ceporan, Gantiwarno, Klaten
export function LiveMap() {
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 shadow-inner relative group">
      <iframe
        src="https://maps.google.com/maps?q=GG.%20Gamelan,%20RT.01/RW.07,%20Ceporan,%20Gantiwarno,%20Klaten&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0 filter grayscale invert contrast-110 opacity-75 hover:opacity-100 transition duration-300"
        allowFullScreen={false}
        loading="lazy"
        title="JohnKonstruksi Location Map"
      />
      <div className="absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-zinc-800 text-xs text-zinc-300 flex items-center space-x-2 pointer-events-none">
        <MapPin className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
        <span className="font-semibold uppercase font-mono tracking-wider">Klaten, Jawa Tengah</span>
      </div>
    </div>
  );
}

// Custom static placeholder map with interactive pulsating location pin for Contact Page requested
export function StaticContactMap() {
  const [isActive, setIsActive] = useState(false);

  const address = "GG. Gamelan, RT.01/RW.07, Dusun I, Ceporan, Kec. Gantiwarno, Kabupaten Klaten, Jawa Tengah 57455";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  if (isActive) {
    return (
      <div className="relative">
        <LiveMap />
        <div className="absolute bottom-3 right-3">
          <button 
            onClick={() => setIsActive(false)}
            className="bg-zinc-900/95 hover:bg-zinc-800 text-xs font-bold text-orange-500 py-1.5 px-3 rounded-lg border border-zinc-800 transition shadow"
          >
            Tampilkan Preview Statis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-[320px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer group"
      onClick={() => setIsActive(true)}
    >
      {/* Visual static abstract map layout using Tailwind grid / lines */}
      <div className="absolute inset-0 bg-zinc-950 overflow-hidden flex flex-col justify-between p-4 opacity-95">
        {/* Dynamic decorative vector lattice representing map streets */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-10 border-y border-zinc-300/30 rotate-3"></div>
          <div className="absolute top-1/2 left-0 right-0 h-16 border-y border-zinc-300/30 -rotate-2"></div>
          <div className="absolute top-2/3 left-0 right-0 h-12 border-y border-zinc-300/30 rotate-6"></div>
          <div className="absolute left-1/4 top-0 bottom-0 w-8 border-x border-zinc-300/30 rotate-12"></div>
          <div className="absolute left-2/3 top-0 bottom-0 w-12 border-x border-zinc-300/30 -rotate-6"></div>
          {/* River shape */}
          <div className="absolute top-1/3 left-0 right-0 h-4 bg-orange-950/40 rounded-full blur-sm rotate-12"></div>
        </div>

        {/* Ambient surrounding blocks representation */}
        <div className="absolute inset-0 pointer-events-none opacity-20 p-8 flex flex-wrap gap-4">
          <div className="w-16 h-12 bg-zinc-800 rounded-md"></div>
          <div className="w-24 h-16 bg-zinc-800 rounded-md"></div>
          <div className="w-14 h-14 bg-zinc-850 rounded-md"></div>
          <div className="w-20 h-10 bg-zinc-800 rounded-md"></div>
          <div className="w-10 h-14 bg-zinc-850 rounded-md"></div>
          <div className="w-28 h-12 bg-zinc-800 rounded-md"></div>
        </div>

        {/* Header indicator */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center space-x-2 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-800">
            <Compass className="w-4 h-4 text-orange-500 animate-spin-slow" />
            <span className="text-[11px] text-zinc-300 font-bold uppercase tracking-wider">KOMPAS LOKASI</span>
          </div>
          <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono">MAP INTERAKTIF</div>
        </div>

        {/* Pulsating center Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="absolute -inset-4 rounded-full bg-orange-600/30 animate-ping duration-1000"></div>
          <div className="absolute -inset-8 rounded-full bg-orange-600/10 animate-pulse"></div>
          
          {/* Pin physical shape */}
          <div className="relative z-20 flex flex-col items-center group-hover:scale-110 transition duration-300">
            <div className="bg-orange-600 p-2.5 rounded-full shadow-xl border border-white/20 flex items-center justify-center animate-bounce">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            {/* Tag */}
            <div className="mt-2.5 bg-orange-600 font-sans text-xs font-black text-white px-3 py-1 rounded-md shadow-lg tracking-wider uppercase whitespace-nowrap">
              JOHNKONSTRUKSI
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-xl">
          <div className="flex flex-col space-y-0.5">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Alamat Resmi</span>
            <span className="text-[11px] text-zinc-350 max-w-xs md:max-w-md line-clamp-1 font-medium">{address}</span>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="ml-3 flex items-center bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition"
            title="Buka di Google Maps"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Active overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <div className="bg-zinc-950/90 border border-orange-600/30 px-4 py-2.5 rounded-xl flex items-center space-x-2 text-white text-sm font-bold tracking-wide shadow-2xl scale-95 group-hover:scale-100 transition duration-300">
          <Map className="w-4 h-4 text-orange-500" />
          <span>KLIK UNTUK MEMBUKA PETA AKTIF</span>
        </div>
      </div>
    </div>
  );
}
