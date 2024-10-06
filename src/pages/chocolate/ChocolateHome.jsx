import React from 'react';
import '../../../src/components/navbars/ChocolateNav.css'

export default function ChocolateHome() {
  return (
    <nav className="nav-container">
    <div className="logo">ChocoDelight</div>
    <ul className="nav-links">
      <li><NavLink to="#" className="hover-effect">Home</NavLink></li>
      <li><NavLink to="#" className="hover-effect">Products</NavLink></li>
      <li><NavLink to="#" className="hover-effect">Recipes</NavLink></li>
      <li><NavLink to="#" className="hover-effect">About Us</NavLink></li>
      <li><NavLink to="/techcompanyhome" target='_blank' className="hover-effect">Tech Company</NavLink></li>
    </ul>
    <button className="shop-btn">Shop Now</button>
  </nav>
  )
}
