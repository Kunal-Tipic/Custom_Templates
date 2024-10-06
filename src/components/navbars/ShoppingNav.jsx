import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ShoppingNav() {
  return (
   <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
    <div className="text-xl font-bold">ShopLogo</div>
    <ul className="flex space-x-6">
      <li><NavLink to="#" className="hover:text-gray-400">Home</NavLink></li>
      <li className="relative group">
        <NavLink to="#" className="hover:text-gray-400">Categories</NavLink>
        <ul className="absolute hidden group-hover:block bg-gray-700 mt-2 rounded-md">
          <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-600">Electronics</NavLink></li>
          <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-600">Clothing</NavLink></li>
          <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-600">Accessories</NavLink></li>
        </ul>
      </li>
      <li><NavLink to="#" className="hover:text-gray-400">Deals</NavLink></li>
      <li><NavLink to="#" className="hover:text-gray-400">Contact Us</NavLink></li>
      <li><NavLink to="/educationhome"  target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Education Nav</NavLink></li>
    </ul>
    <div>
      <NavLink to="#" className="hover:text-gray-400"><span className="text-2xl">🛒</span> Cart</NavLink>
    </div>
  </nav>
  )
}
