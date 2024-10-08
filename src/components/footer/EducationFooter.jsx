import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function EducationFooter() {
  return (
    <footer className="sticky top-0 bg-blue-900 text-white px-6 py-10 md:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* About Us Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">About Us</h5>
          <p className="text-gray-200">
            EduLearn is a leading online platform providing top-notch courses and resources to enhance learning experiences for students around the world.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">Useful Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-yellow-200">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-200">Courses</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-200">Tutors</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-200">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-yellow-200">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="mb-6 md:mb-0">
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">Contact Info</h5>
          <ul className="space-y-2">
            <li className="text-gray-300">info@edulearn.com</li>
            <li className="text-gray-300">+1 123 456 7890</li>
            <li className="text-gray-300">123 Learning St, EduCity, World 12345</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h5 className="uppercase font-bold text-yellow-300 mb-4 text-lg">Follow Us</h5>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-200">
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-200">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-200">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-200">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} EduLearn. All Rights Reserved.
      </div>
    </footer>
  );
}
