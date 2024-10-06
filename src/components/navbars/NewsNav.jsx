import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NewsNav() {
  return (
<nav className="bg-red-600 text-white px-10 py-3 flex justify-between items-center">
<div className="text-3xl font-bold">DailyNews</div>
<ul className="flex space-x-6">
  <li><NavLink to="#" className="hover:text-gray-200">Home</NavLink></li>
  <li><NavLink to="#" className="hover:text-gray-200">World</NavLink></li>
  <li><NavLink to="#" className="hover:text-gray-200">Politics</NavLink></li>
  <li><NavLink to="#" className="hover:text-gray-200">Business</NavLink></li>
  <li><NavLink to="#" className="hover:text-gray-200">Technology</NavLink></li>
  <li><NavLink to="/portfoliohome" className="hover:text-gray-200">Portfolio Nav</NavLink></li>
</ul>
<button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md">
  Subscribe
</button>
</nav> 
  )
}
