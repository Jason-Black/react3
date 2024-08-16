import { useEffect } from "react";
import { gsap } from "gsap";

function TechIcons() {
  useEffect(() => {
    // Animate the icons with a simple continuous motion
    gsap.to(".tech-icon svg", {
      y: -10,  // Move up by 10px
      duration: 1,
      yoyo: true,  // Make the animation go back and forth
      repeat: -1,  // Infinite loop
      ease: "power1.inOut",  // Smooth easing
    });
  }, []);

  return (
    <section className="tech-icons p-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 drop-shadow-lg">
          Cutting-Edge Technologies We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="tech-icon flex justify-center items-center bg-gray-700 p-4 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 fill-current text-warhammerRed"
            >
              <path d="M32 0L0 64h64L32 0z" />
            </svg>
          </div>
          <div className="tech-icon flex justify-center items-center bg-gray-700 p-4 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 fill-current text-sciFiBlue"
            >
              <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" />
              <circle cx="32" cy="32" r="10" />
            </svg>
          </div>
          <div className="tech-icon flex justify-center items-center bg-gray-700 p-4 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 fill-current text-warhammerRed"
            >
              <rect x="14" y="14" width="36" height="36" />
            </svg>
          </div>
          <div className="tech-icon flex justify-center items-center bg-gray-700 p-4 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 fill-current text-sciFiBlue"
            >
              <polygon points="32 4 60 60 4 60" />
            </svg>
          </div>
          <div className="tech-icon flex justify-center items-center bg-gray-700 p-4 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 fill-current text-warhammerRed"
            >
              <path d="M32 2a30 30 0 1 1-30 30A30 30 0 0 1 32 2m0-2a32 32 0 1 0 32 32A32 32 0 0 0 32 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechIcons;
