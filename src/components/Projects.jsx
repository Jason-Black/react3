import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projects = projectsRef.current.children;
    
    gsap.from(projects, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      }
    });

    // Hover effect
    projects.forEach(project => {
      project.addEventListener('mouseenter', () => {
        gsap.to(project, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
      });
      project.addEventListener('mouseleave', () => {
        gsap.to(project, { scale: 1, duration: 0.3, ease: 'power1.out' });
      });
    });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Projects</h2>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition duration-300">
              <img src={`https://picsum.photos/seed/${item}/400/300`} alt={`Project ${item}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project {item}</h3>
                <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;