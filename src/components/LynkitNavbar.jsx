import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LynkitNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // State to toggle the dropdown
  const [isProductOpen, setIsProductOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    // Use a button or span for the dropdown trigger
    { name: 'PRODUCTS', path: '#', isDropdown: true }, 
    { name: 'FOR ENTERPRISE', path: '#' },
    { name: 'COMPANY', path: '#' },
    { name: 'KNOWLEDGE BANK', path: '#' },
    { name: 'CONTACT US', path: '#', isButton: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-dark shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-2xl tracking-wider">
              {/* Placeholder for Lynkit Logo if image not available, mimicking text style */}
              <span className="text-white">LYNK</span><span className="text-primary">IT</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                   return (
                     <div 
                        key={link.name} 
                        className="relative group"
                        onMouseEnter={() => setIsProductOpen(true)}
                        onMouseLeave={() => setIsProductOpen(false)}
                     >
                       <button className="text-white hover:text-primary px-3 py-2 rounded-md text-xs font-bold tracking-widest transition-colors flex items-center">
                         {link.name}
                         <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </button>
                       {/* Dropdown Content */}
                       <div className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isProductOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                           <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Analytics Dashboard</Link>
                           <Link to="/trip-view" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trip View</Link>
                       </div>
                     </div>
                   );
                }
                
                if (link.isButton) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded text-xs font-bold tracking-widest transition-colors shadow-lg"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white hover:text-primary px-3 py-2 rounded-md text-xs font-bold tracking-widest transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Mobile menu button (Hamburger) - simplified for now */}
          <div className="-mr-2 flex md:hidden">
             <button className="text-white hover:text-primary p-2">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LynkitNavbar;
