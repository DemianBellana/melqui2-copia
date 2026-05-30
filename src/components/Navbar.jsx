import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Reel', id: 'reels' },
  { name: 'Trabajo', id: 'video-work' },
  { name: 'Fotografía', id: 'fotografia' },
  { name: 'Sobre Mí', id: 'sobre-mi' },
  { name: 'Contacto', id: 'contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 md:px-14 ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:shadow-none' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="text-[14px] tracking-[0.4em] uppercase font-light text-[#161616] z-50">
            M. Quiroga
          </a>

          {/* DESKTOP NAV - APPAREANCE CHANGED FROM md TO lg FOR BETTER TABLET SUPPORT */}
          <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 border transition-all duration-500 px-8 py-3 rounded-full shadow-lg ${
            isScrolled 
              ? 'bg-white/70 backdrop-blur-md border-white/20' 
              : 'bg-white/5 backdrop-blur-md border-white/10'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 group ${
                  activeSection === link.id ? 'text-[#7C8F7A]' : 'text-[#161616]/70 hover:text-[#7C8F7A]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#7C8F7A] transition-all duration-300 group-hover:w-full ${
                  activeSection === link.id ? 'w-full' : 'w-0'
                }`} />
              </a>
            ))}
          </div>

          {/* MOBILE/TABLET BUTTON - APPAREANCE CHANGED FROM md:hidden TO lg:hidden */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-[70] flex flex-col gap-1.5 items-end group"
          >
            <span className={`h-[1.5px] bg-[#161616] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
            <span className={`h-[1.5px] bg-[#161616] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`} />
            <span className={`h-[1.5px] bg-[#161616] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE/TABLET OVERLAY MENU - APPAREANCE CHANGED FROM md:hidden TO lg:hidden */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[65] bg-[#F7F3EF]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-3xl tracking-[0.2em] uppercase font-light text-[#161616] hover:text-[#7C8F7A] transition-colors"
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}