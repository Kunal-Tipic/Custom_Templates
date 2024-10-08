import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ShoppingFooter() {
  return (
    <footer className="bg-gray-800 text-white px-4 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase mb-4 font-bold text-lg">About Us</h5>
          <p className="text-gray-400 mb-4">
            We are a leading provider of high-quality products ranging from electronics to fashion. Our mission is to deliver quality and value to our customers.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase mb-4 font-bold text-lg">Quick Links</h5>
          <ul className="text-gray-400">
            <li className="mb-2 hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Categories</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Deals</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h5 className="uppercase mb-4 font-bold text-lg">Contact Info</h5>
          <ul className="text-gray-400">
            <li className="mb-2 hover:text-white">
              <a href="mailto:info@shopwebsite.com">info@shopwebsite.com</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="tel:+11234567890">+1 123 456 7890</a>
            </li>
            <li className="mb-2 hover:text-white">
              123 Main St, Anytown, USA 12345
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} ShopWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}
