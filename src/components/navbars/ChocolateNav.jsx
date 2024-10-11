import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './ChocolateNav.css'
export default function ChocolateNav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className=" overflow-hidden sticky top-0 bg-[#5a3d1e] text-white px-6 py-5 z-40">
      {/* Logo */}
     <div className='flex justify-between items-center '>
      <div className="text-2xl font-bold text-[#fcd34d]">ChocoDelight</div>
     
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li><NavLink to="/chocolatehome" className="hover:text-[#fbbf24] transition-colors">Home</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors">Products</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors">Recipes</NavLink></li>
        <li><NavLink to="/chocolateabout" className="hover:text-[#fbbf24] transition-colors">About Us</NavLink></li>
        <li><NavLink to="/techcompanyhome" className="hover:text-[#fbbf24] transition-colors">Tech Company</NavLink></li>
      </ul>
     
      {/* Shop Now Button */}
      <button className="hidden md:flex bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2 rounded-md transition-colors">
        Shop Now
      </button>
      

      {/* Mobile Menu button */}
      <button className="md:hidden" onClick={toggle}>
          <FontAwesomeIcon icon={ isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
    </div>

    {/* Mobile Navigation Menu */}
    <div className={`${isMenuOpen?"block" : "hidden"} md:hidden flex`}>
    <ul >
        <li><NavLink to="/chocolatehome" className="hover:text-[#fbbf24] transition-colors" onClick={toggle}>Home</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors" onClick={toggle}>Products</NavLink></li>
        <li><NavLink to="#" className="hover:text-[#fbbf24] transition-colors" onClick={toggle}>Recipes</NavLink></li>
        <li><NavLink to="/chocolateabout" className="hover:text-[#fbbf24] transition-colors" onClick={toggle}>About Us</NavLink></li>
        <li><NavLink to="/techcompanyhome" className="hover:text-[#fbbf24] transition-colors" onClick={toggle}>Tech Company</NavLink></li>
      </ul>
      <div className='ms-[25%] mt-[10%]'>
      <button className=" bg-[#f59e0b] hover:bg-[#d97706] text-white px-3 py-2 rounded-md transition-colors">
       <NavLink to="#"> Shop Now</NavLink>
      </button>
      </div>
      </div>
    </nav>
  );
}
