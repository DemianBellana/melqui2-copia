import React, { useState } from 'react';
import { portfolioData } from './data/portfolio';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ExperienceCard from './components/ExperienceCard';
import ScatteredGallery from './components/ScatteredGallery';
import { motion, AnimatePresence } from 'framer-motion';

export default function MelisaQuirogaPortfolio() {
  const { personal, hero, reels, videoWork, photography, experience, socials } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#F7F3EF] text-[#161616] overflow-x-hidden selection:bg-[#CFA8A1]/30">
      {/* GLOBAL CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

      {/* LOADER */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#161616] animate-[fadeout_1.6s_ease_2.2s_forwards]">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl tracking-[0.4em] uppercase text-[#F7F3EF] font-light mb-6">
            {personal.name}
          </h1>
          <div className="w-48 h-[1px] bg-white/20 overflow-hidden mx-auto">
            <div className="h-full w-full bg-[#D8B7B0] animate-[loader_2s_ease-in-out_forwards]" />
          </div>
        </div>
      </div>

      {/* CUSTOM CURSOR */}
      <div className="hidden lg:block fixed top-6 right-6 z-40 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full bg-white/10 text-xs tracking-[0.3em] uppercase text-[#161616]">
        {personal.role}
      </div>

      {/* HERO */}
      <Hero data={hero} images={photography.images} />

      {/* REELS SECTION */}
      <section className="relative py-32 px-6 md:px-14 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col lg:flex-row justify-between gap-10 items-end">
            <div>
              <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] mb-6">
                {reels.tag}
              </p>

              <h2 className="text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em] font-light max-w-4xl">
                {reels.title}
              </h2>
            </div>

            <p className="max-w-md text-[#161616]/60 leading-relaxed text-lg">
              {reels.description}
            </p>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden bg-[#161616] shadow-[0_40px_120px_rgba(0,0,0,0.15)] group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-all duration-[2000ms]"
            >
              <source src={reels.showcaseVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-6 md:gap-8 items-start lg:items-end text-white">
              <div>
                <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/50 mb-2 md:mb-4">
                  {reels.label}
                </p>
                <h3 className="text-2xl md:text-4xl font-light max-w-2xl leading-tight">
                  Ediciones dinámicas con estética editorial de lujo.
                </h3>
              </div>

              <button className="px-5 py-3 md:px-7 md:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 text-xs md:text-sm tracking-[0.25em] uppercase w-full lg:w-auto mt-2 lg:mt-0 text-center">
                {reels.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO WORK (PROJECT GRID) */}
      <section className="relative py-32 px-6 md:px-14 bg-[#161616] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,183,176,0.15),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] mb-6">
              {videoWork.tag}
            </p>

            <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] max-w-5xl leading-[0.95]">
              {videoWork.title}
            </h2>
          </div>

          <ProjectGrid projects={videoWork.items} />
        </div>
      </section>

      {/* TIMELINE / EXPERIENCE */}
      <section className="py-32 px-6 md:px-14 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] mb-6">
              Experiencia
            </p>
            <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.92] max-w-4xl">
              Trayectoria profesional en edición cinemática.
            </h2>
          </div>

          <div className="max-w-3xl">
            {experience.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className="py-32 px-6 md:px-14 bg-[#EFE7E2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col lg:flex-row justify-between gap-8 items-end">
            <div>
              <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] mb-6">
                {photography.tag}
              </p>

              <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.92] max-w-4xl">
                {photography.title}
              </h2>
            </div>

            <div className="flex gap-3 flex-wrap text-sm uppercase tracking-[0.25em]">
              {photography.categories.map((cat) => (
                <div
                  key={cat}
                  className="px-5 py-3 rounded-full border border-black/10 bg-white/50 backdrop-blur-xl"
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {photography.images.map((img, i) => (
              <motion.div
                key={i}
                layoutId={`img-${i}`}
                onClick={() => setSelectedImage({ url: img, id: i })}
                className="relative overflow-hidden rounded-[2rem] group break-inside-avoid cursor-pointer"
              >
                <img
                  src={img}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX / IMAGE EXPANSION */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto"
          >
            {/* Backdrop with blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-[#F7F3EF]/60 backdrop-blur-2xl"
            />

            {/* Expanded Image Container */}
            <motion.div
              layoutId={`img-${selectedImage.id}`}
              className="relative z-10 w-full max-w-6xl aspect-[4/5] md:aspect-auto md:h-[85vh] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]"
            >
              <img 
                src={selectedImage.url} 
                className="w-full h-full object-cover md:object-contain bg-[#161616]/5"
                alt=""
              />
              
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-[#161616] hover:bg-white/20 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ABOUT */}
      <section className="py-32 px-6 md:px-14 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-[#D8B7B0]/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop"
              loading="lazy"
              className="relative rounded-[3rem] w-full object-cover shadow-2xl"
            />
          </div>

          <div>
            <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] mb-6">
              Sobre Mí
            </p>

            <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.95] mb-10">
              Narrativa visual con emoción y sensibilidad cinemática.
            </h2>

            <div className="space-y-6 text-lg text-[#161616]/70 leading-relaxed">
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="px-7 py-4 rounded-full bg-[#161616] text-white hover:bg-black transition-all duration-500 text-sm tracking-[0.25em] uppercase">
                Descargar Portafolio
              </button>

              <button className="px-7 py-4 rounded-full border border-black/10 bg-white hover:bg-[#EFE7E2] transition-all duration-500 text-sm tracking-[0.25em] uppercase">
                Hablemos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-32 px-6 md:px-14 bg-[#D8B7B0] text-[#161616] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,243,239,0.4),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] font-bold mb-6">
            Contacto
          </p>

          <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.92] mb-10 text-[#161616]">
            Creemos algo visualmente inolvidable.
          </h2>

          <p className="text-[#161616]/70 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
            Disponible para colaboraciones creativas, contenido de marca, edición cinemática y proyectos de narrativa visual a nivel mundial.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-20 social-list">
            {socials.map((item) => {
              let iconClass = '';
              let hoverColor = '';
              let displayItem = item;
              
              // Map Behance to Facebook as requested
              if (item.toLowerCase() === 'behance') {
                displayItem = 'Facebook';
              }

              switch(displayItem.toLowerCase()) {
                case 'instagram': 
                  iconClass = 'fa-brands fa-instagram'; 
                  hoverColor = '#e1306c';
                  break;
                case 'tiktok': 
                  iconClass = 'fa-brands fa-tiktok'; 
                  hoverColor = '#000000'; // Black background on hover
                  break;
                case 'whatsapp': 
                  iconClass = 'fa-brands fa-whatsapp'; 
                  hoverColor = '#25d366';
                  break;
                case 'facebook':
                  iconClass = 'fa-brands fa-facebook-f';
                  hoverColor = '#3b5999';
                  break;
                case 'email': 
                  iconClass = 'fa-solid fa-envelope'; 
                  hoverColor = '#dd4b39';
                  break;
                default:
                  iconClass = 'fa-solid fa-share-nodes';
                  hoverColor = '#f00';
              }

              return (
                <div key={item} className="social-item">
                  <a href="#" style={{ "--hover-bg": hoverColor }}>
                    <i className={`${iconClass} icon`}></i>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-left">
            <input
              placeholder="Tu Nombre"
              className="bg-[#F7F3EF] border border-[#7C8F7A]/20 rounded-2xl px-6 py-5 outline-none placeholder:text-[#161616]/40 text-[#161616] focus:border-[#7C8F7A] transition-colors"
            />

            <input
              placeholder="Tu Correo"
              className="bg-[#F7F3EF] border border-[#7C8F7A]/20 rounded-2xl px-6 py-5 outline-none placeholder:text-[#161616]/40 text-[#161616] focus:border-[#7C8F7A] transition-colors"
            />

            <textarea
              placeholder="Contame sobre tu proyecto"
              rows={6}
              className="md:col-span-2 bg-[#F7F3EF] border border-[#7C8F7A]/20 rounded-[2rem] px-6 py-5 outline-none placeholder:text-[#161616]/40 text-[#161616] focus:border-[#7C8F7A] transition-colors"
            />

            <button className="md:col-span-2 px-8 py-5 rounded-full bg-[#7C8F7A] hover:bg-[#6B7A69] transition-all duration-500 text-[#F7F3EF] text-sm tracking-[0.25em] uppercase font-medium">
              Enviar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-14 py-10 bg-[#1A1817] border-t border-white/5 text-[#F7F3EF]/40 text-sm tracking-[0.2em] uppercase flex flex-col md:flex-row justify-between gap-4">
        <div>© {personal.name}</div>
        <div>por CodeNoFrontier</div>
      </footer>

      <style>{`
        @keyframes loader {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        @keyframes fadeout {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #F7F3EF;
          overflow-x: hidden;
        }

        .social-item a {
          width: 70px;
          height: 70px;
          background-color: #F7F3EF;
          text-align: center;
          line-height: 70px;
          font-size: 28px;
          display: block;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          border: 3px solid #F7F3EF;
          z-index: 1;
          transition: .5s;
        }

        .social-item a .icon {
          position: relative;
          color: #7C8F7A;
          transition: .5s;
          z-index: 3;
        }

        .social-item a:hover .icon {
          color: #fff;
          transform: rotateY(360deg);
        }

        .social-item a:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--hover-bg);
          transition: .5s;
          z-index: 2;
        }

        .social-item a:hover:before {
          top: 0;
        }
      `}</style>
    </div>
  )
}