import React from 'react';

export default function Hero({ data }) {
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

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white text-xs tracking-[0.3em] uppercase">
            {data.subtitle}
            <span className="w-2 h-2 rounded-full bg-[#7C8F7A] animate-pulse" />
          </div>

          <div>
            <h1 className="text-[4rem] md:text-[7rem] leading-[0.88] font-light tracking-[-0.05em] text-white">
              {data.title.first}
              <br />
              <span className="italic text-[#F7F3EF]">{data.title.last}</span>
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Video Editor & Content Creator crafting emotional visuals,
              cinematic storytelling and modern digital experiences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-7 py-4 rounded-full bg-[#161616] hover:bg-[#161616]/90 transition-all duration-500 text-[#F7F3EF] text-sm tracking-[0.25em] uppercase">
                Explore Work
              </button>

              <button className="px-7 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 text-white text-sm tracking-[0.25em] uppercase">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="relative w-[420px] h-[620px] rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-2xl bg-white/5">
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
                Selected Frames
              </p>
              <h3 className="text-2xl font-light leading-snug">
                Cinematic editing with editorial aesthetics.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/60 text-xs tracking-[0.3em] uppercase animate-bounce">
        Scroll
      </div>
    </section>
  );
}
