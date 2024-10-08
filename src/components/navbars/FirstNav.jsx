import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../../images/navbarImg/tipic.png'; // Institute Logo

const FirstNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const dropdownRef = useRef(null);

  // Function to close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <nav className="bg-black sticky top-0 text-white shadow-md w-full z-10">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-4 py-3 md:h-14">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-8" alt="Institute Logo" />
          <span className="text-2xl font-bold">Institute Name</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? 'bg-green-700 rounded px-3 py-2' : 'hover:bg-green-700 rounded px-3 py-2'}>
            Home
          </NavLink>

          {/* About Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-1 hover:bg-green-700 rounded px-3 py-2">
              <span>About</span><FontAwesomeIcon icon={faChevronDown} className="h-3 ms-1" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 top-10 bg-black text-white rounded shadow-lg p-2 mt-1 space-y-1">
                <li>
                  <NavLink to="/about/directors"className="block px-4 py-2 hover:bg-green-700 rounded"onClick={() => setDropdownOpen(false)} >
                    Directors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/company"className="block px-4 py-2 hover:bg-green-700 rounded"onClick={() => setDropdownOpen(false)} >
                    Company
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'bg-green-700 rounded px-3 py-2' : 'hover:bg-green-700 rounded px-3 py-2'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'bg-green-700 rounded px-3 py-2' : 'hover:bg-green-700 rounded px-3 py-2'
            }
          >
            Contact
          </NavLink>
          
          <NavLink to="/shoppingHome" target="_blank" rel="noopener noreferrer" className="hover:bg-green-700 rounded px-3 py-2">Shopping Nav</NavLink>
        </div>
      

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4 bg-black`}>
        <NavLink to="/" className="block px-4 py-2 hover:bg-green-700 rounded"
          onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <div>
          <button
            className="flex justify-between items-center px-4 py-2 w-full hover:bg-green-700"
            // onClick={toggleDropdown}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            About
            <FontAwesomeIcon icon={faChevronDown} className="h-4" />
            
          </button>
          {isDropdownOpen && (
            <ul className="pl-4">
              <li>
                <NavLink
                  to="/about/directors"
                  className="block px-4 py-2 hover:bg-green-700 rounded"
                  onClick={() => setDropdownOpen(false)} 
                >
                  Directors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/company"
                  className="block px-4 py-2 hover:bg-green-700 rounded"
                  onClick={() => setDropdownOpen(false)} 
                >
                  Company
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <NavLink
          to="/services"
          className="block px-4 py-2 hover:bg-green-700 rounded"
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className="block px-4 py-2 hover:bg-green-700 rounded"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default FirstNav;
