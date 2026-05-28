import React from 'react';
import { portfolioData } from './data/portfolio';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ExperienceCard from './components/ExperienceCard';

export default function MelisaQuirogaPortfolio() {
  const { personal, hero, reels, videoWork, photography, experience, socials } = portfolioData;

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
      <Hero data={hero} />

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

            <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col lg:flex-row justify-between gap-8 items-end text-white">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-white/50 mb-4">
                  {reels.label}
                </p>
                <h3 className="text-4xl font-light max-w-2xl leading-tight">
                  Fast-paced edits with luxury editorial aesthetics.
                </h3>
              </div>

              <button className="px-7 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 text-sm tracking-[0.25em] uppercase">
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
              Experience
            </p>
            <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.92] max-w-4xl">
              Professional journey in cinematic editing.
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
              <div
                key={i}
                className="relative overflow-hidden rounded-[2rem] group break-inside-avoid"
              >
                <img
                  src={img}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
              About Me
            </p>

            <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.95] mb-10">
              Visual storytelling with emotion and cinematic sensitivity.
            </h2>

            <div className="space-y-6 text-lg text-[#161616]/70 leading-relaxed">
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="px-7 py-4 rounded-full bg-[#161616] text-white hover:bg-black transition-all duration-500 text-sm tracking-[0.25em] uppercase">
                Download Portfolio
              </button>

              <button className="px-7 py-4 rounded-full border border-black/10 bg-white hover:bg-[#EFE7E2] transition-all duration-500 text-sm tracking-[0.25em] uppercase">
                Let’s Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-32 px-6 md:px-14 bg-[#161616] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,183,176,0.2),transparent_40%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.35em] uppercase text-[#7C8F7A] mb-6">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-light tracking-[-0.05em] leading-[0.92] mb-10">
            Let’s create something visually unforgettable.
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
            Available for creative collaborations, brand content, cinematic
            editing and visual storytelling projects worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {socials.map(
              (item) => (
                <button
                  key={item}
                  className="px-7 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 text-sm tracking-[0.25em] uppercase"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-left">
            <input
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none backdrop-blur-xl"
            />

            <input
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none backdrop-blur-xl"
            />

            <textarea
              placeholder="Tell me about your project"
              rows={6}
              className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2rem] px-6 py-5 outline-none backdrop-blur-xl"
            />

            <button className="md:col-span-2 px-8 py-5 rounded-full bg-[#D8B7B0] hover:bg-[#CFA8A1] transition-all duration-500 text-[#161616] text-sm tracking-[0.25em] uppercase">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-14 py-10 bg-[#161616] border-t border-white/5 text-white/40 text-sm tracking-[0.2em] uppercase flex flex-col md:flex-row justify-between gap-4">
        <div>© {personal.name}</div>
        <div>by CodeNoFrontier</div>
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
      `}</style>
    </div>
  )
}
