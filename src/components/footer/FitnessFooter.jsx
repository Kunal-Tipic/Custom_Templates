import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

export default function FitnessFooter() {
  return (
    <footer className="bg-green-800 text-white px-8 py-12 md:px-16 relative">
      {/* Wavy Top Border */}
      <div className="absolute -top-5 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2f855a"
            fillOpacity="1"
            d="M0,64L40,74.7C80,85,160,107,240,128C320,149,400,171,480,176C560,181,640,171,720,138.7C800,107,880,53,960,37.3C1040,21,1120,43,1200,74.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left relative z-10">
        {/* About FitLife */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-green-400 mb-4 text-lg">About FitLife</h5>
          <p className="text-gray-300">
            FitLife is dedicated to helping individuals achieve their fitness goals through personalized workout plans, nutrition tips, and a supportive community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-green-400 mb-4 text-lg">Quick Links</h5>
          <ul className="space-y-2">
            <li><NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">Workouts</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">Nutrition</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">Community</NavLink></li>
            <li><NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">Blog</NavLink></li>
          </ul>
        </div>

        {/* Workout Tips */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-green-400 mb-4 text-lg">Fitness Tips</h5>
          <ul className="space-y-2">
            <li className="text-gray-300">• Stay hydrated during workouts.</li>
            <li className="text-gray-300">• Mix cardio with strength training.</li>
            <li className="text-gray-300">• Maintain a balanced diet.</li>
            <li className="text-gray-300">• Take rest days to recover.</li>
          </ul>
        </div>

        {/* Contact Us & Social Media */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-green-400 mb-4 text-lg">Contact Us</h5>
          <p className="text-gray-300">Email: info@fitlife.com</p>
          <p className="text-gray-300">Phone: +1 234 567 890</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </NavLink>
            <NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </NavLink>
            <NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </NavLink>
            <NavLink to="#" className="text-gray-300 hover:text-green-400 transition-colors">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-600 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} FitLife. All Rights Reserved.
      </div>
    </footer>
  );
}
