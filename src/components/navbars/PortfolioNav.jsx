import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioNav() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-600 text-yellow-400 px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex space-x-6">
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/allnav" className="flex items-center hover:text-yellow-300 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> All Nav
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
