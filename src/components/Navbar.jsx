import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  { name: 'Recent Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 perspective-1000 transform-style-3d bg-white border-b border-black ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <motion.h1
            className="text-2xl font-extrabold md:h-12 mt-4 w-auto text-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            KARTAR CONSTRUCTION
            </motion.h1>
        </Link>
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `uppercase text-md font-bold tracking-wide transition-colors ${
                  isActive ? 'text-blue' : 'text-black hover:text-blue'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-blue font-bold text-md">(587) 355-7483</span>
          <Link
            to="/contact"
            className="bg-white text-blue border  border-blue py-2 px-4 rounded-md uppercase text-sm font-medium hover:bg-blue hover:text-white transition-colors"
          >
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden text-black z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white bg-opacity-100 shadow-lg z-40 absolute w-full"
        >
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `uppercase text-sm font-medium tracking-wide ${
                      isActive ? 'text-blue' : 'text-black hover:text-blue'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <span className="text-blue font-medium text-sm">(587) 355-7483</span>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-white text-blue border border-blue py-2 px-4 rounded-md uppercase text-sm font-medium hover:bg-blue hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Navbar;