import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function TechCompanyFooter() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 md:px-20 relative">
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Company Overview */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-blue-400 mb-4 text-lg">About TechCorp</h5>
          <p className="text-gray-400">
            TechCorp is a leading technology company providing innovative solutions across various industries. Our mission is to transform businesses with cutting-edge technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-blue-400 mb-4 text-lg">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-blue-400 mb-4 text-lg">Contact Us</h5>
          <ul className="space-y-2">
            <li className="text-gray-300">info@techcorp.com</li>
            <li className="text-gray-300">+1 800 123 4567</li>
            <li className="text-gray-300">456 Tech Street, Silicon Valley, CA 94043</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h5 className="uppercase font-bold text-blue-400 mb-4 text-lg">Follow Us</h5>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} TechCorp. All Rights Reserved.
      </div>
    </footer>
  );
}
