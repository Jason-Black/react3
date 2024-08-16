import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-500">&copy; 2024 Positron Sun. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-500 hover:text-yellow-500 mx-2">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500 mx-2">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500 mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
