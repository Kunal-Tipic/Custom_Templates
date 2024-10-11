import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioNav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-600 text-yellow-400 px-6 py-3 z-10">

      <div className='flex justify-between items-center'>
      <div className="text-xl font-bold">My Portfolio</div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/allnav" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> All Nav
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button  */}
      <button onClick={toggleMenu} className='md:hidden'>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className='w-6 h-6'/>
      </button>
      </div>

      {/* Mobile Navigation links  */}
      <ul className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
      <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} className="mr-2" /> About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors"onClick={toggleMenu}>
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors"onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/allnav" className="flex items-center hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> All Nav
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
