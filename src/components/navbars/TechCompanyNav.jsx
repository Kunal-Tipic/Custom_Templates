import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TechCompanyNav() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-3 flex justify-between items-center">
    <div className="text-2xl font-bold text-blue-400">TechCorp</div>
    <ul className="flex space-x-6">
      <li><NavLink to="#" className="hover:text-gray-300">Home</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-300">Products</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-300">Services</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-300">Careers</NavLink></li>
      <li><NavLink to="/fitnesshome" target='_blank' rel="noopener noreferrer" className="hover:text-gray-300">Fitness</NavLink></li>
    </ul>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
      Contact Us
    </button>
  </nav>
  )
}
