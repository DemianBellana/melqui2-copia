import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ data, images }) {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-14 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#F7F3EF] z-10" />
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      >
        <source src={data.mainVideo} type="video/mp4" />
      </video>

      {/* FLOATING BACKGROUND CARDS */}
      {images && (
        <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none opacity-100">
          {images.slice(0, 8).map((img, i) => {
            // Responsive sizes for floating cards
            const baseSize = typeof window !== 'undefined' 
              ? (window.innerWidth < 768 ? 180 : (window.innerWidth < 1366 ? 240 : 255))
              : 240;
            const size = baseSize + (i % 3) * 60;
            
            const topPos = [8, 28, 48, 15, 68, 38, 58, 12][i % 8];
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const duration = isMobile ? (25 + i * 5) : (35 + i * 4);
            const delay = isMobile ? (i * -12) : (i * -16);

            return (
              <motion.img
                key={i}
                src={img}
                alt=""
                className="absolute rounded-[2rem] object-cover shadow-2xl"
                style={{
                  width: size,
                  height: size * 1.3,
                  top: `${topPos}%`,
                  left: '-30vw'
                }}
                animate={{
                  x: ['0vw', '160vw'],
                  rotate: [0, i % 2 === 0 ? 5 : -5]
                }}
                transition={{
                  duration: duration,
                  ease: 'linear',
                  repeat: Infinity,
                  delay: delay
                }}
              />
            );
          })}
        </div>
      )}

      {/* VIGNETTE FOR TEXT READABILITY - MOVED ABOVE PHOTOS (z-[16]) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.25),transparent_60%)] z-[16] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 xl:gap-16 items-end">
        <div className="space-y-6 xl:space-y-8">
          <div className="inline-flex items-center gap-3 bg-[#D8B7B0] border border-white/20 rounded-full px-5 py-2 text-[#161616] text-xs tracking-[0.3em] uppercase shadow-lg">
            {data.subtitle}
            <span className="w-2 h-2 rounded-full bg-[#7C8F7A] animate-pulse" />
          </div>

          <div>
            <h1 
              className="text-[3.5rem] lg:text-[5.5rem] xl:text-[7rem] leading-[0.88] font-light tracking-[-0.05em] text-black drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]"
            >
              {data.title.first}
              <br />
              <span className="italic">{data.title.last}</span>
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p 
              className="text-base lg:text-lg xl:text-xl text-[#161616] leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(255,255,255,0.45)]"
            >
              Editor de Video y Creador de Contenido creando piezas visuales emocionales, narrativa cinemática y experiencias digitales modernas.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3.5 xl:px-7 xl:py-4 rounded-full bg-[#161616] hover:bg-[#161616]/90 hover:scale-105 transition-all duration-500 text-[#F7F3EF] text-xs xl:text-sm tracking-[0.25em] uppercase shadow-xl">
                Explorar Trabajo
              </button>

              <button className="px-6 py-3.5 xl:px-7 xl:py-4 rounded-full bg-[#7C8F7A] hover:bg-[#6B7A69] hover:scale-105 transition-all duration-500 text-white text-xs xl:text-sm tracking-[0.25em] uppercase shadow-xl">
                Contacto
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="relative w-[280px] h-[420px] xl:w-[380px] xl:h-[560px] rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-2xl bg-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={data.sideVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-xs tracking-[0.35em] uppercase text-white/60 mb-3">
                Fotogramas Seleccionados
              </p>
              <h3 className="text-2xl font-light leading-snug">
                Edición cinemática con estética editorial.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/60 text-xs tracking-[0.3em] uppercase animate-bounce">
        Deslizar
      </div>
    </section>
  );
}
