import { useState } from 'react';
import { Menu, X, Phone, MapPin, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { key: 'home', label: 'Home' },
    { key: 'projects', label: 'Projects' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About Us' },
    { key: 'faq', label: 'FAQ' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (key: string) => {
    setCurrentPage(key);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 w-full">
      {/* Top mini-header for address and quick contact - very premium */}
      <div className="hidden md:flex bg-zinc-950 border-b border-zinc-900 py-2 px-6 justify-between items-center text-[10px] md:text-xs text-zinc-400 font-mono">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            GG. Gamelan, Ceporan, Gantiwarno, Klaten
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://wa.me/6287734891477" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1 hover:text-orange-500 transition duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-orange-600" />
            +62 877-3489-1477
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Lockup */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 focus:outline-none text-left"
        >
          <div className="bg-orange-600 p-1.5 rounded-lg flex items-center justify-center">
            <Hammer className="w-5 h-5 text-white" />
          </div>
          <span className="font-sans font-black tracking-tighter text-lg md:text-xl text-white uppercase">
            JOHN<span className="text-orange-600">KONSTRUKSI</span>
          </span>
        </button>

        {/* Desktop Navbar Option */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.key;
            return (
              <button
                key={link.key}
                onClick={() => handleLinkClick(link.key)}
                className={`relative py-1.5 text-xs font-bold uppercase transition duration-200 tracking-wider focus:outline-none ${
                  isActive ? 'text-orange-500' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Call to action on header (Desktop) */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6287734891477?text=Halo%20JohnKonstruksi%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi."
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-full text-xs font-bold text-white uppercase tracking-wider transition duration-300 active:scale-95 shadow-md flex items-center space-x-1.5"
          >
            <span>KONSULTASI GRATIS →</span>
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Framer Motion entry) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-zinc-900 bg-zinc-950 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.key;
                return (
                  <button
                    key={link.key}
                    onClick={() => handleLinkClick(link.key)}
                    className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition duration-200 ${
                      isActive 
                        ? 'bg-orange-600 text-white' 
                        : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-zinc-900 flex flex-col space-y-3">
                <a
                  href="https://wa.me/6287734891477"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 bg-orange-600 hover:bg-orange-700 font-bold text-sm text-white rounded-xl tracking-wider transition uppercase"
                >
                  Hubungi Via WhatsApp
                </a>
                <div className="text-[10px] text-zinc-500 font-mono text-center">
                  GG. Gamelan, Ceporan, Gantiwarno, Klaten
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
