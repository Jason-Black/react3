import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(heroRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to(titleRef.current, {
      duration: 2,
      text: "Web Designer & Developer",
      ease: "power1.in"
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.5")
    .from(ctaRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, "-=0.5");
  }, []);

  return (
    <section ref={heroRef} className="bg-gray-100 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome
        </h2>
        <p ref={subtitleRef} className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Creating beautiful and functional websites
        </p>
        <a ref={ctaRef} href="#" className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;