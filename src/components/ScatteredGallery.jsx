import React from 'react';
import { motion } from 'framer-motion';

export default function ScatteredGallery({ images }) {
  // Configuración de posiciones, tamaños y rotaciones para imitar el collage esparcido
  const config = [
    { top: '5%', left: '2%', rotate: -6, width: '16vw', zIndex: 10 },
    { top: '8%', left: '22%', rotate: 4, width: '14vw', zIndex: 20 },
    { top: '2%', left: '40%', rotate: -2, width: '18vw', zIndex: 15 },
    { top: '10%', left: '60%', rotate: 8, width: '15vw', zIndex: 12 },
    { top: '5%', left: '80%', rotate: -5, width: '13vw', zIndex: 25 },
    
    { top: '55%', left: '8%', rotate: 5, width: '15vw', zIndex: 30 },
    { top: '65%', left: '28%', rotate: -4, width: '17vw', zIndex: 22 },
    { top: '50%', left: '50%', rotate: 3, width: '19vw', zIndex: 28 },
    { top: '60%', left: '72%', rotate: -7, width: '14vw', zIndex: 18 },
    { top: '45%', left: '85%', rotate: 6, width: '12vw', zIndex: 35 },
  ];

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] bg-[#EAE5DB] overflow-hidden flex items-center justify-center">
      {/* Container de imágenes esparcidas */}
      <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
        {images.slice(0, 10).map((img, i) => {
          const c = config[i] || config[0];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: c.rotate - 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-[#F7F3EF] p-1 pb-6 md:p-2 md:pb-10"
              style={{
                top: c.top,
                left: c.left,
                width: c.width,
                minWidth: '120px',
                zIndex: c.zIndex,
              }}
            >
              <img src={img} alt="Gallery frame" className="w-full h-auto object-cover pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Texto superpuesto */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-40 pointer-events-none text-center"
      >
        <h2 
          className="text-[16vw] md:text-[11rem] font-serif italic leading-[0.8] tracking-[-0.02em] text-[#4A4238]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Every frame<br />tells the truth.
        </h2>
      </motion.div>
    </section>
  );
}
