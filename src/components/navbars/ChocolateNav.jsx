import React from 'react';
import { NavLink } from 'react-router-dom';
// import './ChocolateNav.css'
export default function ChocolateNav() {
  return (
    <nav className="relative overflow-hidden sticky top-0 bg-[#5a3d1e] text-white px-12 py-5 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#fcd34d]">ChocoDelight</div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors">Home</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors">Products</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors">Recipes</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors">About Us</NavLink></li>
        <li><NavLink to="/techcompanyhome" className="hover:text-[#fbbf24] transition-colors">Tech Company</NavLink></li>
      </ul>

      {/* Shop Now Button */}
      <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2 rounded-md transition-colors">
        Shop Now
      </button>
    </nav>
  );
}
