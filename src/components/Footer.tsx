import { Hammer, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { LiveMap } from './InteractiveMap';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleQuickLink = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 w-full pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive google Map directly at the bottom of every page (Footer integration) */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-3">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">PETA LOKASI INTERAKTIF</span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-white uppercase leading-none">
                LOKASI KANTOR KAMI
              </h3>
            </div>
            <p className="text-zinc-400 text-xs md:text-sm max-w-md">
              Kunjungi workshop kami di Gantiwarno, Klaten atau jadwalkan janji temu konsultasi langsung dengan tim insinyur.
            </p>
          </div>
          <LiveMap />
        </div>

        {/* 4 columns content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brief */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-1 rounded-md">
                <Hammer className="w-4 h-4 text-white" />
              </div>
              <span className="font-sans font-black tracking-wider text-base text-white uppercase">
                JOHN<span className="text-orange-600">KONSTRUKSI</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Penyedia layanan jasa konstruksi bangunan baru, renovasi total, rancang arsitektur dan interior berstandar teknis sipil tinggi di daerah Klaten dan sekitarnya. Kokoh, Presisi, dan Dibangun untuk Generasi.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-widest">
              LINK NAVIGASI
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {[
                { key: 'home', label: 'Halaman Utama' },
                { key: 'projects', label: 'Portofolio Proyek' },
                { key: 'services', label: 'Layanan Konstruksi' },
                { key: 'about', label: 'Tentang Kami' },
                { key: 'faq', label: 'FAQ (Tanya Jawab)' },
                { key: 'contact', label: 'Hubungi Kontak' }
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleQuickLink(link.key)}
                  className="flex items-center text-zinc-400 hover:text-orange-500 text-left transition duration-200 group"
                >
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-orange-600 mr-1.5 transition duration-150" />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contacts info */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-widest">
              INFORMASI HUBUNG
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  GG. Gamelan, RT.01/RW.07, Dusun I, Ceporan, Kec. Gantiwarno, Kabupaten Klaten, Jawa Tengah 57455
                </span>
              </div>
              <a 
                href="https://wa.me/6287734891477" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-2 hover:text-orange-500 transition"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>+62 877-3489-1477 (WhatsApp)</span>
              </a>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-600" />
                <span>info@johnkonstruksi.com</span>
              </div>
            </div>
          </div>

          {/* Operational hours */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-widest">
              WAKTU OPERASIONAL
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Senin - Sabtu: 08:00 - 17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full ml-1"></span>
                <span>Minggu & Hari Besar: Libur</span>
              </div>
              <p className="text-[10px] text-zinc-500 italic leading-normal mt-1">
                Layanan konsultasi Whatsapp aktif 24 jam responsif.
              </p>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-500 font-mono gap-3">
          <div>
            &copy; {currentYear} JohnKonstruksi. Hak Cipta Dilindungi.
          </div>
          <div>
            Dibuat Kokoh &bull; Presisi &bull; Berstandar Sipil SNI
          </div>
        </div>

      </div>
    </footer>
  );
}
