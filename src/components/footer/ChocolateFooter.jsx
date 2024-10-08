import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

export default function ChocolateFooter() {
  return (
    <footer className="relative bg-[#5a3d1e] text-white px-6 py-12 md:px-20">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="block w-full h-12 md:h-20">
          <path d="M0,40 C150,100 350,0 500,50 L500,00 L0,0 Z" fill="#fcd34d"></path>
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left pt-12">
        {/* About Us Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-[#fcd34d] mb-4 text-lg">About ChocoDelight</h5>
          <p className="text-gray-200">
            ChocoDelight is a premier provider of high-quality chocolates. Our mission is to delight taste buds with rich, handcrafted treats using the finest ingredients.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-[#fcd34d] mb-4 text-lg">Useful Links</h5>
          <ul className="space-y-2">
            <li><NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">Home</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">Products</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">Recipes</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-[#fcd34d] mb-4 text-lg">Contact Us</h5>
          <ul className="space-y-2">
            <li className="text-gray-300">info@chocodelight.com</li>
            <li className="text-gray-300">+1 123 456 7890</li>
            <li className="text-gray-300">123 Chocolate St, CandyLand, SweetWorld 12345</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h5 className="uppercase font-bold text-[#fcd34d] mb-4 text-lg">Follow Us</h5>
          <div className="flex justify-center md:justify-start space-x-4">
            <NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </NavLink>
            <NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </NavLink>
            <NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </NavLink>
            <NavLink to="#" className="text-gray-300 hover:text-[#fcd34d] transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#4b2e12] pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} ChocoDelight. All Rights Reserved.
      </div>
    </footer>
  );
}
