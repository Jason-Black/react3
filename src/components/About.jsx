import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    // Parallax effect on the image
    gsap.to('.about-image', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade-in animation for the content with stagger
    gsap.from('.about-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section id="about" className="py-16 bg-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="about-content md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-500">About Us</h2>
          <p className="mt-4 text-gray-300">
            Positron Sun is a web design company that not only creates stunning websites but also helps small businesses with marketing, automation, and custom applications to support their growth.
          </p>
        </div>
        <div className="about-image md:w-1/2 mt-8 md:mt-0">
          <img src="src/assets/hero.png" alt="About Us" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default About;
