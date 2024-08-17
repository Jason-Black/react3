import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div className="mt-4 md:mt-0">
          <a href="#" className="mx-2 hover:text-primary transition duration-300">Twitter</a>
          <a href="#" className="mx-2 hover:text-primary transition duration-300">LinkedIn</a>
          <a href="#" className="mx-2 hover:text-primary transition duration-300">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;