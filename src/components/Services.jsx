import { useEffect } from "react";
import { gsap } from "gsap";

function Services() {
  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0, // Start completely transparent
        y: 50, // Start lower on the y-axis
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Faster animation duration
        ease: "power3.out", // Stronger easing for more impact
        stagger: 0.2, // Faster staggering between cards
      }
    );
  }, []);

  return (
    <section className="services p-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 drop-shadow-lg">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-gray-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Web Design</h3>
            <p>Futuristic and responsive web design tailored to your needs.</p>
          </div>
          <div className="service-card bg-gray-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p>State-of-the-art web development using the latest technologies.</p>
          </div>
          <div className="service-card bg-gray-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
            <p>Improve your visibility with our expert SEO services.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
