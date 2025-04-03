
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Address */}
          <div>
            <Link to="/" className="block mb-4">
              <img 
                src="/lovable-uploads/fa312769-e7b8-4077-b1dc-dbdfd757b340.png" 
                alt="Redwood Cabinets Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <div className="text-charcoal-700 mb-4">
              <div className="flex items-start mb-3">
                <MapPin size={18} className="mr-2 mt-0.5 text-redwood-700" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>233 W Ogden Ave.</p>
                  <p>Westmont, IL 60559</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Contact</h3>
            <div className="text-charcoal-700">
              <div className="flex items-center mb-3">
                <Phone size={18} className="mr-2 text-redwood-700" />
                <a href="tel:872-312-7007" className="hover:text-redwood-700">
                  872-312-7007
                </a>
              </div>
              <div className="flex items-center mb-3">
                <Mail size={18} className="mr-2 text-redwood-700" />
                <a href="mailto:info@redwoodcabinetschicago.com" className="hover:text-redwood-700">
                  info@redwoodcabinetschicago.com
                </a>
              </div>
              <div className="flex items-start mb-3">
                <Clock size={18} className="mr-2 mt-0.5 text-redwood-700" />
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p>MON - FRI: 9:00 AM – 5:30 PM</p>
                  <p>SATURDAY: 10:00 AM – 3:00 PM</p>
                  <p>SUNDAY: CLOSED</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Quick Links</h3>
            <ul className="space-y-2 text-charcoal-700">
              <li><Link to="/" className="hover:text-redwood-700">Home</Link></li>
              <li><Link to="/about" className="hover:text-redwood-700">About</Link></li>
              <li><Link to="/services" className="hover:text-redwood-700">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-redwood-700">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-redwood-700">Contact</Link></li>
              <li><Link to="/financing" className="hover:text-redwood-700">Financing</Link></li>
              <li><Link to="/blog" className="hover:text-redwood-700">Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Get a Quick Estimate */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Get Started</h3>
            <p className="text-charcoal-700 mb-4">
              Ready to transform your space? Get a free estimate today and take the first step toward your dream kitchen or bathroom.
            </p>
            <Link to="/contact" className="redwood-btn inline-block">
              Request a Free Estimate
            </Link>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-charcoal-700 hover:text-redwood-700" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-charcoal-700 hover:text-redwood-700" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and Terms */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-charcoal-600 mb-4 md:mb-0">
              © 2025 Redwood Cabinets & Design. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-charcoal-600 hover:text-redwood-700">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-charcoal-600 hover:text-redwood-700">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-center text-charcoal-500">
            Digital Marketing by Progressive Digital
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
