// SecondNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const SecondNav = () => {
  return (
    <nav className="bg-black text-white shadow-md w-full p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Second Navbar</div>
        <div className="flex space-x-6">
          <NavLink to="/secondnavhomes" className={({ isActive }) => (isActive ? 'text-blue-400' : 'hover:text-blue-400')}>
            Home
          </NavLink>
          <NavLink to="/secondnavhomes" className={({ isActive }) => (isActive ? 'text-blue-400' : 'hover:text-blue-400')}>
            About
          </NavLink>
          <NavLink to="/secondnavhomes" className={({ isActive }) => (isActive ? 'text-blue-400' : 'hover:text-blue-400')}>
           Services
          </NavLink>
          <NavLink to="/secondnavhomes" className={({ isActive }) => (isActive ? 'text-blue-400' : 'hover:text-blue-400')}>
            Contact
          </NavLink>
          <NavLink to="/shoppingHome" target="_blank" rel="noopener noreferrer" className={({ isActive }) => (isActive ? 'text-blue-400' : 'hover:text-blue-400')}>
            Shoping Nav
          </NavLink>
        </div>
      </div>
    </nav> 

  );
};

export default SecondNav;
