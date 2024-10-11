import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function EducationNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () =>{
  setIsMenuOpen(!isMenuOpen);
}

const dropdownRef = useRef(null);

  // Function to close dropdown if clicked outside in case of mobile view
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [dropdownRef]);


  return (
    <nav className="sticky top-0 bg-blue-900 text-white px-6 py-3 z-10">
      <div className='flex  justify-between items-center'>
    <div className="text-2xl font-bold text-yellow-300">EduLearn</div>
    <ul className="hidden md:flex space-x-6">
      <li><NavLink to="/educationhome" className="hover:text-yellow-200">Home</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200">Courses</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200">Tutors</NavLink></li>
      <li><NavLink to="/abouttutors" className="hover:text-yellow-200">About Us</NavLink></li>
      <li><NavLink to="/educationcontact" className="hover:text-yellow-200">Contact Us</NavLink></li>
      <li><NavLink to="/chocolatehome" target='_blank' className="hover:text-yellow-200">Chocolate nav</NavLink></li>
    </ul>
    
    <button className="hidden md:flex bg-yellow-300 text-blue-900 hover:bg-yellow-400 px-4 py-2 rounded-md">
      Get Started
    </button>
     {/* mobile Menu button*/}
     <button className="md:hidden " onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
    </div>

   {/* mobile view menu  */}
     <div className={`${isMenuOpen ? "block": "hidden"} md:hidden`}>
      <ul >
      <li><NavLink to="/educationhome" className="hover:text-yellow-200" onClick={toggleMenu}>Home</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200"onClick={toggleMenu}>Courses</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200"onClick={toggleMenu}>Tutors</NavLink></li>
      <li><NavLink to="/abouttutors" className="hover:text-yellow-200"onClick={toggleMenu}>About Us</NavLink></li>
      <li><NavLink to="/chocolatehome" target='_blank' className="hover:text-yellow-200">Chocolate nav</NavLink></li>
      <li><button className="bg-yellow-300 text-blue-900 hover:bg-yellow-400 px-4 ms-[30%] py-2 rounded-md"onClick={toggleMenu}>
       Get Started
      </button></li>
      </ul>
     </div>
    </nav>  
  )
}
