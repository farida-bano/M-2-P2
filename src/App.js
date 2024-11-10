// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-6">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-lg font-semibold hover:text-yellow-400 transition-all">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-lg font-semibold hover:text-yellow-400 transition-all">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-semibold hover:text-yellow-400 transition-all">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
