import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function FitnessNav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    //Fitness blog
 <nav className="sticky top-0 bg-green-700 text-white px-6 py-4 z-40">

    <div className='flex justify-between items-center'>
      <div className="text-2xl font-bold">FitLife</div>
      <ul className="hidden md:flex space-x-8">
        <li><NavLink to="/fitnesshome" className="hover:text-green-300">Home</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300">Workouts</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300">Nutrition</NavLink></li>
        <li><NavLink to="/fitnessabout" className="hover:text-green-300">About Us</NavLink></li>
        <li><NavLink to="/fitnesscontact" className="hover:text-green-300">Contact Us</NavLink></li>
        <li><NavLink to="/newshome"target='_blanck' className="hover:text-green-300">News Nav</NavLink></li>

      </ul>
      <button className="hidden md:flex bg-white text-green-700 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md">
        Join Now
      </button>

      {/* mobile Menu button */}
        <button className="md:hidden " onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
    </div>

    {/* Mobile Navigation List */}
      <ul className={`${isMenuOpen? 'block' : 'hidden'} md:hidden`}>
      <li><NavLink to="/fitnesshome" className="hover:text-green-300" onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300" onClick={toggleMenu}>Workouts</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300" onClick={toggleMenu}>Nutrition</NavLink></li>
        <li><NavLink to="/fitnessabout" className="hover:text-green-300" onClick={toggleMenu}>About Us</NavLink></li>
        <li><NavLink to="/newshome"target='_blanck' className="hover:text-green-300" onClick={toggleMenu}>News Nav</NavLink></li>
      </ul>
    </nav> 
  )
}
