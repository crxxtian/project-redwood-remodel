import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/redwoodlogo.png"
              alt="Redwood Cabinets Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="text-gray-800 font-medium hover:text-red-700 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:872-312-7007"
              className="flex items-center text-red-700 font-medium"
            >
              <Phone size={16} className="mr-1" />
              872-312-7007
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
              Quick Estimate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-red-700 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-lg z-50 overflow-y-auto pt-20 px-6"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="space-y-6">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-800 hover:text-red-700 transition-colors border-b border-gray-100 pb-2"
                >
                  {item}
                </Link>
              ))}

              <a
                href="tel:872-312-7007"
                onClick={() => setIsOpen(false)}
                className="flex items-center text-red-700 font-medium text-lg pt-4 border-t border-gray-200"
              >
                <Phone size={18} className="mr-2" />
                872-312-7007
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-6 px-4 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
              >
                Request a Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
