import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function TechCompanyNav() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="sticky top-0 bg-gray-800 text-white px-8 py-3 z-10">
    <div className='flex justify-between items-center'>
    <div className="text-2xl font-bold text-blue-400">TechCorp</div>
    <ul className="hidden md:flex space-x-6">
      <li><NavLink to="/techcompanyahome" className="hover:text-gray-300">Home</NavLink></li>
      <li><NavLink to="/techcompanyabout" className="hover:text-gray-300">About Us</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-300">Services</NavLink></li>
      <li><NavLink to="/techcompanycontact" className="hover:text-gray-300">Contact Us</NavLink></li>
      <li><NavLink to="/fitnesshome" target='_blank' rel="noopener noreferrer" className="hover:text-gray-300">Fitness</NavLink></li>
    </ul>
    <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
      Contact Us
    </button>

    {/* Mobile Menu Button */}
    <button className='md:hidden' onClick={toggle}>
    <FontAwesomeIcon icon={ isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
    </button>
    </div>
    <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
    <li><NavLink to="/techcompanyhome" className="hover:text-gray-300" onClick={toggle}>Home</NavLink></li>
      <li><NavLink to="/techcompanyabout" className="hover:text-gray-300" onClick={toggle}>About Us</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-300" onClick={toggle}>Services</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-300" onClick={toggle}>Careers</NavLink></li>
      <li><NavLink to="/fitnesshome" target='_blank' rel="noopener noreferrer" className="hover:text-gray-300">Fitness</NavLink></li>
    </ul>
  </nav>
  )
}
