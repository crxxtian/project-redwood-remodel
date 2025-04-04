import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${'/cabinet1.png'})`, // Placeholder image
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 leading-tight">
              Elevate Your Home with Handcrafted Cabinets
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-12 leading-relaxed">
              Chicagoland's Best for Kitchen Renovations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  aria-label="Request a Free Estimate"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 active:bg-red-800 transition-colors duration-200"
                >
                  Request a Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  aria-label="Visit Our Westmont Showroom"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white border border-white rounded-md hover:bg-white hover:text-red-600 transition-colors duration-200"
                >
                  Visit Our Westmont Showroom
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Icons Row */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-white font-medium flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Over 10 Years Serving Chicagoland
              </p>
            </div>
            <div>
              <p className="text-white font-medium flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wood"><path d="M19.59 6.41a2 2 0 0 0-2.83 0L5 17.59a2 2 0 0 0 0 2.83 2 2 0 0 0 2.83 0L19.59 9.24a2 2 0 0 0 0-2.83z"/><path d="M12 12l-7 5 2-9 9 2z"/><path d="M12 12l7-5-2 9-9 2z"/></svg>
                100%  Redwood Cabinetry
              </p>
            </div>
            <div>
              <p className="text-white font-medium flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><path d="M12 17.757l-6.172 3.245 1.179-6.873-5-4.867 6.9-1.002L12 5.244l2.094 6.768 6.9.998-5 4.867 1.179 6.873z"/></svg>
                4.9 Stars on Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white">
        Scroll to see more ↓
      </div> */}
    </div>
  );
};

export default Hero;
