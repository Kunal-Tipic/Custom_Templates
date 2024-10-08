import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Single import for FontAwesomeIcon
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import necessary icons
import { NavLink } from 'react-router-dom';

const FirstFooter = () => {
  return (
    <footer className="bg-black text-white p-4 mt-2">
      <div className="container mx-auto p-4 pt-6 md:flex justify-between">
        <div className="text-center md:text-left md:me-2 mb-4 md:mb-0">
          <h5 className="uppercase mb-2 font-bold">About Us</h5>
          <p className="mb-4">
            Institute Name is a leading provider of educational services.<br/> Our mission is to provide high-quality education to students of all ages.
          </p>
                    {/* All icons */}
          <ul className="list-none mb-0">
            <li className="inline-block mr-5">
              <NavLink to="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" /> 
              </NavLink>
            </li>
            <li className="inline-block mr-5">
              <NavLink to="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </NavLink>
            </li>
            <li className="inline-block mr-5">
              <NavLink to="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </NavLink>
            </li>
            <li className="inline-block mr-5">
              <NavLink to="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </NavLink>
            </li>
          </ul>
        </div>
                    {/* Quick Links */} 
         {/* Here gives links/ routes for the different pages of same website */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h5 className="uppercase mb-2 font-bold">Quick Links</h5>
          <ul className="list-none mb-0">
            <li className="mb-2">
              <NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/about" className="text-gray-400 hover:text-white">About Us</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/services" className="text-gray-400 hover:text-white">Services</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/contact" className="text-gray-400 hover:text-white">Contact Us</NavLink>
            </li>
          </ul>
        </div>
                    {/* Footer contact us Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h5 className="uppercase mb-2 font-bold">Contact Us</h5>
          <ul className="list-none mb-0">
            <li className="mb-2">
              <NavLink to="#" className="text-gray-400 hover:text-white">info@institutename.com</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-gray-400 hover:text-white">+1 123 456 7890</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-gray-400 hover:text-white">123 Main St, Anytown, USA 12345</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FirstFooter;
