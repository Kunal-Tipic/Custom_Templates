import { faBars, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ShoppingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
  // Function to close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <nav className="sticky top-0  bg-gray-800 text-white px-4 py-2 ">
      <div className="flex w-full justify-between items-center px-4 py-3 md:h-14">
        {/* logo section       */}
        <div className="text-xl font-bold">
          ShopLogo
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
      
          <NavLink to="#" className="block px-4 py-2 hover:text-gray-400">
            Home
          </NavLink>
        
          <div className="relative group" ref={dropdownRef}>
            {/* Parent link for "Categories" */}
              <button onClick={() => setDropdownOpen(!isDropdownOpen)} to="#" className="block px-4 py-2 hover:text-gray-400">
              Categories
              <FontAwesomeIcon icon={faChevronDown} className="h-3 ms-1" />
              </button>
            {/* Dropdown Menu */}
            {isDropdownOpen &&
            ( <div className="absolute  group-hover:flex flex-col bg-gray-700 mt-2 rounded-md z-10">
          
              <NavLink to="#" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setDropdownOpen(false)}>
                Electronics
              </NavLink>
          
              <NavLink to="#" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setDropdownOpen(false)}>
                Clothing
              </NavLink>

              <NavLink to="#" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setDropdownOpen(false)}>
                Accessories
              </NavLink>
            </div>
            )}
          </div>

          <NavLink to="#" className="block px-4 py-2 hover:text-gray-400">
            Deals
          </NavLink>
          <NavLink to="#" className="block px-4 py-2 hover:text-gray-400">
            Contact Us
          </NavLink>
            
          <NavLink to="/educationhome"target="_blank" rel="noopener noreferrer"className="block px-4 py-2 hover:text-gray-400">
            Education Nav
          </NavLink>
        </div>
        {/* Cart Icon */}
        <div className="hidden md:block">
          <NavLink to="#" className="hover:text-gray-400">
            <span className="text-2xl">🛒</span> Cart
          </NavLink>
        </div>
      
        {/* Mobile menu button  */}
        <button className={`md:hidden`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6"/>
        </button>
      </div>
      {/* Nav in mobile menu */}
      <div  className={`md:hidden ${isMenuOpen?'block':'hidden'} pb-4`}>
        <NavLink to="#" className="block px-4"onClick={()=>{setIsMenuOpen(false)}}>
          Home
        </NavLink>
        <div>
          <button onClick={() => {setDropdownOpen(!isDropdownOpen)}}>
          Categories
          <FontAwesomeIcon icon={faChevronDown} className="h-4" />
          </button>
          {isDropdownOpen && (
            <ul className="pl-4">
              <li>
                <NavLink to="#"className="block px-4 py-2 hover:bg-green-700 rounded"
                onClick={() => {setIsMenuOpen(false)}} >
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink to="#"className="block px-4 py-2 hover:bg-green-700 rounded"
                  onClick={() => {setIsMenuOpen(false)}} >
                  Clothing
                </NavLink>
              </li>
              <li>
                <NavLink to="#"className="block px-4 py-2 hover:bg-green-700 rounded"
                  onClick={() => {setIsMenuOpen(false)}} >
                  Accessories
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        
        <NavLink to="#" className="block px-4"onClick={()=>{setIsMenuOpen(false)}}>
          Deals
        </NavLink>
        <NavLink to="#" className="block px-4"onClick={()=>{setIsMenuOpen(false)}}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
