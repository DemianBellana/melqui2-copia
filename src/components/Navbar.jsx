import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Trabajo', href: '#trabajo' },
  { name: 'Fotografía', href: '#fotografia' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 md:px-14 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* LOGO / BRANDING */}
          <a 
            href="#inicio" 
            className="text-lg md:text-xl tracking-[0.3em] uppercase font-light text-[#161616] z-[70]"
          >
            M. <span className="text-[#7C8F7A] font-medium">Quiroga</span>
          </a>

          {/* DESKTOP NAV - CENTERED */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[11px] tracking-[0.2em] uppercase text-[#161616]/70 hover:text-[#7C8F7A] transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#7C8F7A] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-[70] flex flex-col gap-1.5 items-end group"
          >
            <span className={`h-[1.5px] bg-[#161616] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
            <span className={`h-[1.5px] bg-[#161616] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`} />
            <span className={`h-[1.5px] bg-[#161616] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[65] bg-[#F7F3EF]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl tracking-[0.2em] uppercase font-light text-[#161616] hover:text-[#7C8F7A] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
