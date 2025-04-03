
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/fa312769-e7b8-4077-b1dc-dbdfd757b340.png" 
                alt="Redwood Cabinets Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-charcoal-800 hover:text-redwood-700 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-charcoal-800 hover:text-redwood-700 font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-charcoal-800 hover:text-redwood-700 font-medium transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="text-charcoal-800 hover:text-redwood-700 font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-charcoal-800 hover:text-redwood-700 font-medium transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-charcoal-800 hover:text-redwood-700 font-medium transition-colors">
              Blog
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a 
              href="tel:872-312-7007" 
              className="flex items-center text-redwood-700 font-semibold mr-6"
            >
              <Phone size={16} className="mr-1" />
              <span>872-312-7007</span>
            </a>
            <Link to="/contact" className="redwood-btn">
              Quick Estimate
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal-800 hover:text-redwood-700 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed top-[60px] right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-lg z-50 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-6 pt-6 pb-8 space-y-4">
              <Link 
                to="/" 
                className="block py-3 text-lg font-medium text-charcoal-800 hover:text-redwood-700 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block py-3 text-lg font-medium text-charcoal-800 hover:text-redwood-700 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block py-3 text-lg font-medium text-charcoal-800 hover:text-redwood-700 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className="block py-3 text-lg font-medium text-charcoal-800 hover:text-redwood-700 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="block py-3 text-lg font-medium text-charcoal-800 hover:text-redwood-700 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className="block py-3 text-lg font-medium text-charcoal-800 hover:text-redwood-700 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="tel:872-312-7007" 
                className="block py-3 text-lg font-medium text-redwood-700 flex items-center border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                872-312-7007
              </a>
              <Link 
                to="/contact" 
                className="block mt-4 py-3 text-center redwood-btn"
                onClick={() => setIsOpen(false)}
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
