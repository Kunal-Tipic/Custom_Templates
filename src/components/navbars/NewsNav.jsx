import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NewsNav() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}

return (

<nav className="bg-red-600 text-white px-6 py-3 z-10">

<div className='flex justify-between items-center'>
  <div className="text-3xl font-bold">DailyNews
  </div>
  <ul className="hidden md:flex space-x-6">
    <li><NavLink to="/newshome" className="hover:text-gray-200">Home</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200">World</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200">Politics</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200">Business</NavLink></li>
    <li><NavLink to="/newscontact" className="hover:text-gray-200">Contact Us</NavLink></li>
    <li><NavLink to="/portfoliohome" target="_blank"className="hover:text-gray-200">Portfolio Nav</NavLink></li>
  </ul>
  <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md">
    Subscribe
  </button>
  
  {/* Mobile Menu Button */}
  <button onClick={toggleMenu}>
    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6"/>
  </button>
</div>

{/* Mobile Navigation Menu  */}
  <ul className={`${isMenuOpen? "block" : "hidden"} md:hidden mt-2`}>
    <li><NavLink to="#" className="hover:text-gray-200" onClick={toggleMenu}>Home</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200" onClick={toggleMenu}>World</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200" onClick={toggleMenu}>Politics</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200" onClick={toggleMenu}>Business</NavLink></li>
    <li><NavLink to="#" className="hover:text-gray-200" onClick={toggleMenu}>Technology</NavLink></li>
    <li><NavLink to="/portfoliohome" target="_blank"className="hover:text-gray-200" onClick={toggleMenu}>Portfolio Nav</NavLink></li>
  </ul>
</nav> 
  )
}
