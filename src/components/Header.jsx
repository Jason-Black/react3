import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // New state to handle initial load

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const header = document.querySelector('.header');

      if (isInitialLoad) {
        setIsInitialLoad(false); // Disable initial load check after the first scroll event
      } else {
        if (prevScrollPos > currentScrollPos) {
          // User is scrolling up
          gsap.to(header, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        } else {
          // User is scrolling down
          gsap.to(header, { opacity: 0, y: -100, duration: 0.5, ease: 'power2.out' });
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isInitialLoad]);

  useEffect(() => {
    // Ensure header is visible on page load
    const header = document.querySelector('.header');
    gsap.set(header, { opacity: 1, y: 0 }); // Set initial state to visible

    // Animate header in on page load
    gsap.from('.header', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleExplodeLettersClick = (e) => {
    const letters = e.target.querySelectorAll('.letter');
    gsap.to(letters, {
      x: (index) => (index % 2 === 0 ? -100 : 100),
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.05,
    });
  };

  return (
    <header className="header fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Sci-Fi Web Design</div>
        <nav>
          <ul className="flex space-x-6 hidden md:flex">
            <li className="hover:text-warhammerRed transition-colors duration-300">
              Home
            </li>
            <li
              className="hover:text-warhammerRed transition-colors duration-300 cursor-pointer"
              onClick={handleExplodeLettersClick}
            >
              {Array.from('Services').map((letter, index) => (
                <span key={index} className="letter inline-block">
                  {letter}
                </span>
              ))}
            </li>
            <li className="hover:text-warhammerRed transition-colors duration-300">
              Portfolio
            </li>
            <li className="hover:text-warhammerRed transition-colors duration-300">
              Contact
            </li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li className="hover:text-warhammerRed transition-colors duration-300">
            Home
          </li>
          <li
            className="hover:text-warhammerRed transition-colors duration-300 cursor-pointer"
            onClick={handleExplodeLettersClick}
          >
            {Array.from('Services').map((letter, index) => (
              <span key={index} className="letter inline-block">
                {letter}
              </span>
            ))}
          </li>
          <li className="hover:text-warhammerRed transition-colors duration-300">
            Portfolio
          </li>
          <li className="hover:text-warhammerRed transition-colors duration-300">
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
