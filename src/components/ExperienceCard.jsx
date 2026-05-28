import React from 'react';

export default function ExperienceCard({ experience }) {
  return (
    <div className="relative pl-8 border-l border-[#161616]/10 py-6 group">
      <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-[#161616] border-4 border-[#F7F3EF] group-hover:scale-125 transition-transform duration-300" />
      
      <span className="text-sm tracking-[0.2em] uppercase text-[#7C8F7A] mb-2 block">
        {experience.year}
      </span>
      
      <h3 className="text-2xl font-light mb-1 text-[#161616]">
        {experience.role}
      </h3>
      
      <p className="text-xs tracking-[0.3em] uppercase text-[#161616]/40 mb-4">
        {experience.company}
      </p>
      
      <p className="text-[#161616]/60 leading-relaxed font-light max-w-md">
        {experience.description}
      </p>
    </div>
  );
}
