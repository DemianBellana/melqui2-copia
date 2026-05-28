import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-[#7C8F7A] tracking-[0.3em] uppercase text-sm">
          No projects found. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}
