import React from 'react';

export default function ProjectCard({ project, index }) {
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1200&auto=format&fit=crop'; // Cinematic placeholder
  };

  return (
    <div className="group relative rounded-[2.5rem] overflow-hidden min-h-[420px] border border-white/10 bg-white/5 backdrop-blur-xl">
      <img
        src={project.image}
        loading="lazy"
        onError={handleImageError}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      <div className="relative h-full flex flex-col justify-between p-10">
        <div className="flex justify-between items-start">
          <span className="text-xs tracking-[0.3em] uppercase text-[#F7F3EF]/50">
            0{index + 1}
          </span>

          <div className="w-14 h-14 rounded-full border border-[#F7F3EF]/20 bg-[#F7F3EF]/10 backdrop-blur-xl flex items-center justify-center text-[#F7F3EF] text-sm group-hover:scale-110 transition-all duration-500">
            ↗
          </div>
        </div>

        <div className="text-[#F7F3EF]">
          <h3 className="text-4xl font-light mb-4">{project.title}</h3>
          <p className="text-[#F7F3EF]/70 leading-relaxed max-w-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
