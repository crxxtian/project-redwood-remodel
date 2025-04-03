
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ShowroomHighlight = () => {
  return (
    <section className="py-24 bg-white">
      <div className="redwood-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="/images/showroom-photo.jpg"
                alt="Redwood Cabinets Showroom" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white py-4 px-6 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <Clock size={20} className="text-redwood-700 mr-3" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Open Today</p>
                    <p className="text-charcoal-700">9:00 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-redwood-700 font-semibold text-lg mb-3 block">Experience In Person</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
              Visit Our Westmont Showroom
            </h2>
            <div className="w-24 h-1 bg-redwood-700 mb-8"></div>
            
            <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
              Are you struggling to visualize your perfect space? Visit our newly renovated showroom to 
              explore our extensive range of custom cabinetry options. Discover firsthand 
              the quality and craftsmanship that set us apart.
            </p>
            <p className="text-charcoal-700 mb-8 leading-relaxed">
              Our design experts are on hand to guide you through selecting the ideal cabinetry 
              that complements your home's style and meets your functional needs. Experience 
              the difference that personalized service and superior products make.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://maps.google.com/?q=233+W+Ogden+Ave,+Westmont,+IL+60559"
                target="_blank"
                rel="noopener noreferrer"
                className="redwood-btn flex items-center"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
              
              <a 
                href="tel:872-312-7007"
                className="redwood-btn-outline flex items-center"
              >
                <Phone size={18} className="mr-2" />
                Call Us
              </a>
            </div>
            
            <div className="bg-beige-50 p-6 rounded-xl shadow-sm border-l-4 border-redwood-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-charcoal-900 mb-2">Address:</p>
                  <p className="text-charcoal-700">233 W Ogden Ave</p>
                  <p className="text-charcoal-700">Westmont, IL 60559</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900 mb-2">Hours:</p>
                  <p className="text-charcoal-700">Mon-Fri: 9:00 AM - 5:30 PM</p>
                  <p className="text-charcoal-700">Saturday: 10:00 AM - 3:00 PM</p>
                  <p className="text-charcoal-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomHighlight;
