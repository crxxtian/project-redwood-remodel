import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[700px] h-[90vh] overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/cabinet1.png')` }} // Placeholder image
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            {/* Tagline Badge */}
            <div className="inline-block px-4 py-1 mb-4 bg-white/20 rounded-full text-white text-sm font-medium tracking-wide backdrop-blur-md">
              Custom Cabinetry in Chicagoland
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 drop-shadow-lg">
              Elevate Your Home with Handcrafted Cabinets
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-10 drop-shadow">
              Chicagoland's Best for Kitchen Renovations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white bg-red-600 rounded-md shadow-lg hover:bg-red-700 transition"
                >
                  Request a Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white border border-white rounded-md hover:bg-white hover:text-red-600 transition"
                >
                  Visit Our Westmont Showroom
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
