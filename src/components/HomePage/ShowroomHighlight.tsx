
import {  } from 'react-router-dom';
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.090203988198!2d-87.9740097!3d41.7942947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e499959a5459f%3A0x4c1e9f399a9e4a7a!2s233%20W%20Ogden%20Ave%2C%20Westmont%2C%20IL%2060559!5e0!3m2!1sen!2sus!4v1712193249924!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
