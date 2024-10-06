import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FitnessNav() {
  return (
    //Fitness blog
 <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">FitLife</div>
      <ul className="flex space-x-8">
        <li><NavLink to="#" className="hover:text-green-300">Home</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300">Workouts</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300">Nutrition</NavLink></li>
        <li><NavLink to="#" className="hover:text-green-300">Community</NavLink></li>
        <li><NavLink to="/newshome"target='_blanck' className="hover:text-green-300">News Nav</NavLink></li>

      </ul>
      <button className="bg-white text-green-700 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md">
        Join Now
      </button>
    </nav> 
  )
}
