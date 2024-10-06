import React from 'react';
// import './ChocolateNav.css'
export default function ChocolateNav() {
  return (
    <nav className="relative overflow-hidden bg-[#5a3d1e] text-white px-12 py-5 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#fcd34d]">ChocoDelight</div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li><a href="#" className="hover:text-[#fbbf24] transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-[#fbbf24] transition-colors">Products</a></li>
        <li><a href="#" className="hover:text-[#fbbf24] transition-colors">Recipes</a></li>
        <li><a href="#" className="hover:text-[#fbbf24] transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-[#fbbf24] transition-colors">Tech Company</a></li>
      </ul>

      {/* Shop Now Button */}
      <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2 rounded-md transition-colors">
        Shop Now
      </button>

      {/* Chocolate Drip Effect */}
      <div className="absolute bottom-[-20px] left-0 w-full h-16 bg-repeat-x" 
           style={{ backgroundImage: `radial-gradient(circle at 50px 0, transparent 20px, #5a3d1e 20px) 0 0,
           radial-gradient(circle at 150px 0, transparent 30px, #5a3d1e 30px) 150px 0,
           radial-gradient(circle at 300px 0, transparent 25px, #5a3d1e 25px) 300px 0,
           radial-gradient(circle at 500px 0, transparent 40px, #5a3d1e 40px) 500px 0`,
           backgroundSize: '600px 40px' }}>
      </div>
    </nav>
  );
}
