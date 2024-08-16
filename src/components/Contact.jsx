import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    gsap.from('.contact-form', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section id="contact" className="py-16 bg-gray-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">Contact Us</h2>
        <form className="contact-form max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
