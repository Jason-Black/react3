import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function HeroSection() {
  useGSAP(() => {
    // Animate the text elements with a slight fade-in and upward movement
    gsap.from(".hero-text", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    });

    // Animate the button with a slight delay after the text
    gsap.from(".hero-button", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power1.out",
      delay: 0.5,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-20">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="hero-text text-4xl md:text-5xl font-bold leading-tight mb-6">
          Welcome to the <span className="block">Future of Web Design</span>
        </h2>
        <p className="hero-text text-lg md:text-xl mb-8">
          Experience cutting-edge design and development inspired by science fiction.
        </p>
        <button className="hero-button bg-warhammerRed py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
