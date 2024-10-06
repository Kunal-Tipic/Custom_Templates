import React from 'react'

export default function PortfolioNav() {
  return (
<nav className="bg-black text-yellow-400 px-6 py-3 flex justify-between items-center">
<div className="text-xl font-bold">My Portfolio</div>
<ul className="flex space-x-4">
  <li><a href="#" className="hover:text-yellow-300">Home</a></li>
  <li><a href="#" className="hover:text-yellow-300">About Me</a></li>
  <li><a href="#" className="hover:text-yellow-300">Projects</a></li>
  <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
</ul>
</nav>
  )
}
