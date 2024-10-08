import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-600  text-yellow-400 pt-10">
      <div className="w-full h-20 bg-gradient-to-r from-purple-500 to-blue-600  transform -skew-y-3 relative">
        <div className="absolute inset-0 bg-yellow-400 "></div>
        <div className="relative flex justify-center items-center h-full">
          <h5 className="font-bold text-blue-600 text-xl">Connect with Me</h5>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h6 className="uppercase mb-2 font-bold">About Me</h6>
            <p className="text-gray-200">I am a passionate web developer dedicated to building efficient and user-friendly websites.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h6 className="uppercase mb-2 font-bold">Quick Links</h6>
            <ul className="list-none">
              <li><a href="#" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300">Projects</a></li>
              <li><a href="#" className="hover:text-yellow-300">About Me</a></li>
              <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h6 className="uppercase mb-2 font-bold">Contact Me</h6>
            <p className="text-gray-200">Email: <a href="mailto:youremail@example.com" className="hover:text-yellow-300">youremail@example.com</a></p>
            <p className="text-gray-200">Phone: <a href="tel:+1234567890" className="hover:text-yellow-300">+1 234 567 890</a></p>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-white">
        <p className="text-gray-200">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
