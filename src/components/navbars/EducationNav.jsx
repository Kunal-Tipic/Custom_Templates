import React from 'react';
import { NavLink } from 'react-router-dom';

export default function EducationNav() {
  return (
    <nav className="sticky top-0 bg-blue-900 text-white px-10 py-3 flex justify-between items-center">
    <div className="text-2xl font-bold text-yellow-300">EduLearn</div>
    <ul className="flex space-x-6">
      <li><NavLink to="#" className="hover:text-yellow-200">Courses</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200">Tutors</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200">Blog</NavLink></li>
      <li><NavLink to="#" className="hover:text-yellow-200">About Us</NavLink></li>
      <li><NavLink to="/chocolatehome" target='_blank' className="hover:text-yellow-200">Chocolate nav</NavLink></li>
    </ul>
    <button className="bg-yellow-300 text-blue-900 hover:bg-yellow-400 px-4 py-2 rounded-md">
      Get Started
    </button>
    </nav>  
  )
}
