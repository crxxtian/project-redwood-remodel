
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo and About */}
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="/lovable-uploads/fa312769-e7b8-4077-b1dc-dbdfd757b340.png" 
                alt="Redwood Cabinets Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Chicago's premier source for custom cabinetry and design solutions, crafting beautiful spaces since 2013.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-charcoal-800 hover:bg-redwood-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-charcoal-800 hover:bg-redwood-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-charcoal-800 hover:bg-redwood-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-charcoal-800 hover:bg-redwood-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-redwood-700">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/" className="hover:text-redwood-500 transition-colors duration-300">Home</Link></li>
                  <li><Link to="/about" className="hover:text-redwood-500 transition-colors duration-300">About Us</Link></li>
                  <li><Link to="/services" className="hover:text-redwood-500 transition-colors duration-300">Services</Link></li>
                  <li><Link to="/gallery" className="hover:text-redwood-500 transition-colors duration-300">Gallery</Link></li>
                  <li><Link to="/blog" className="hover:text-redwood-500 transition-colors duration-300">Blog</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/services#kitchens" className="hover:text-redwood-500 transition-colors duration-300">Kitchens</Link></li>
                  <li><Link to="/services#bathrooms" className="hover:text-redwood-500 transition-colors duration-300">Bathrooms</Link></li>
                  <li><Link to="/services#custom" className="hover:text-redwood-500 transition-colors duration-300">Custom Projects</Link></li>
                  <li><Link to="/financing" className="hover:text-redwood-500 transition-colors duration-300">Financing</Link></li>
                  <li><Link to="/contact" className="hover:text-redwood-500 transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-redwood-700">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex">
                <MapPin size={20} className="mr-3 mt-1 text-redwood-500 flex-shrink-0" />
                <div>
                  <p>233 W Ogden Ave.</p>
                  <p>Westmont, IL 60559</p>
                </div>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 mt-1 text-redwood-500 flex-shrink-0" />
                <div>
                  <a href="tel:872-312-7007" className="hover:text-redwood-500 transition-colors duration-300">
                    872-312-7007
                  </a>
                </div>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 mt-1 text-redwood-500 flex-shrink-0" />
                <div>
                  <a href="mailto:info@redwoodcabinets.com" className="hover:text-redwood-500 transition-colors duration-300">
                    info@redwoodcabinets.com
                  </a>
                </div>
              </li>
              <li className="flex">
                <Clock size={20} className="mr-3 mt-1 text-redwood-500 flex-shrink-0" />
                <div>
                  <p>MON - FRI: 9:00 AM – 5:30 PM</p>
                  <p>SAT: 10:00 AM – 3:00 PM</p>
                  <p>SUN: CLOSED</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-redwood-700">
              Get Inspired
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for design tips, promotions and the latest trends in custom cabinetry.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-charcoal-800 text-white border-0 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-redwood-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-redwood-700 hover:bg-redwood-600 px-4 py-3 rounded-r-lg text-white transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex flex-wrap gap-2">
              <div className="bg-charcoal-800 p-2 rounded">
                <img src="/placeholder.svg" alt="Trust Badge" className="h-10 w-auto" />
              </div>
              <div className="bg-charcoal-800 p-2 rounded">
                <img src="/placeholder.svg" alt="Trust Badge" className="h-10 w-auto" />
              </div>
              <div className="bg-charcoal-800 p-2 rounded">
                <img src="/placeholder.svg" alt="Trust Badge" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright and Terms */}
        <div className="border-t border-charcoal-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {year} Redwood Cabinets & Design. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-redwood-500 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-redwood-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-500 hover:text-redwood-500 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
