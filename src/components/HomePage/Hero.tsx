
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] overflow-hidden pt-20">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/images/hero-kitchen.jpg')",
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Premium Custom Cabinets for Your Chicago Home
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
              Elevate your space with hand-crafted cabinetry designed for the way you live
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/contact" 
                  className="redwood-btn bg-redwood-700 text-white hover:bg-white hover:text-redwood-700 flex items-center justify-center shadow-lg"
                >
                  Request a Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/contact" 
                  className="redwood-btn-outline bg-transparent text-white border-white hover:bg-white hover:text-redwood-700 flex items-center justify-center"
                >
                  Visit Our Westmont Showroom
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <p className="text-white font-medium">Trusted by Chicago homeowners since 2013</p>
            <div className="flex items-center gap-6">
              <div className="bg-white/90 rounded-full p-2">
                <img src="/placeholder.svg" alt="Trust Badge 1" className="h-10 w-auto" />
              </div>
              <div className="bg-white/90 rounded-full p-2">
                <img src="/placeholder.svg" alt="Trust Badge 2" className="h-10 w-auto" />
              </div>
              <div className="bg-white/90 rounded-full p-2">
                <img src="/placeholder.svg" alt="Trust Badge 3" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
