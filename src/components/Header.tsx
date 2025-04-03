
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
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
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:text-redwood-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:text-redwood-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:text-redwood-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:text-redwood-700"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:text-redwood-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:872-312-7007" 
              className="block px-3 py-2 text-base font-medium text-redwood-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                872-312-7007
              </div>
            </a>
            <Link 
              to="/contact" 
              className="block px-3 py-2 mt-4 text-center redwood-btn"
              onClick={() => setIsOpen(false)}
            >
              Quick Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
