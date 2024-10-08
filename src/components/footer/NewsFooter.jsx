import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function NewsFooter() {
  return (
    <footer className="bg-red-700 text-white px-8 py-12 md:px-16">
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* DailyNews About */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">About DailyNews</h5>
          <p className="text-gray-300">
            DailyNews brings you the latest headlines from around the world. Stay updated with breaking news, political analysis, business updates, and more.
          </p>
        </div>

        {/* News Categories */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">Categories</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">World News</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Politics</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Business</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Technology</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Sports</a></li>
          </ul>
        </div>

        {/* Latest Articles */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">Latest Articles</h5>
          <ul className="space-y-2">
            <li className="text-gray-300">• Breaking: Market sees huge gains.</li>
            <li className="text-gray-300">• New tech innovations in 2024.</li>
            <li className="text-gray-300">• Political unrest in South America.</li>
            <li className="text-gray-300">• Sports: Football finals preview.</li>
          </ul>
        </div>

        {/* Contact Us & Social Media */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">Contact Us</h5>
          <p className="text-gray-300">Email: contact@dailynews.com</p>
          <p className="text-gray-300">Phone: +1 555 123 456</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-red-600 pt-6 text-center text-gray-300">
        &copy; {new Date().getFullYear()} DailyNews. All Rights Reserved.
      </div>
    </footer>
  );
}
