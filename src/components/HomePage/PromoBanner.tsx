
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <section className="py-16 bg-redwood-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>
      
      <motion.div 
        className="redwood-section relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-10">
              <div className="inline-block bg-redwood-50 text-redwood-700 px-4 py-1 rounded-full font-semibold text-sm mb-6">
                LIMITED TIME OFFER
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                SPRING KITCHEN CABINET SALE
              </h3>
              
              <h4 className="text-2xl font-semibold text-redwood-700 mb-6">
                10x10 Kitchen Cabinet Set for $9,499
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-redwood-700 mr-3 mt-0.5" />
                  <span className="text-charcoal-700 text-lg">36" tall wall cabinets</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-redwood-700 mr-3 mt-0.5" />
                  <span className="text-charcoal-700 text-lg">Premium granite countertop</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-redwood-700 mr-3 mt-0.5" />
                  <span className="text-charcoal-700 text-lg">Undermount sink included</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-redwood-700 mr-3 mt-0.5" />
                  <span className="text-charcoal-700 text-lg">Soft-close drawers & doors</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="redwood-btn bg-redwood-700 text-white hover:bg-redwood-800"
                >
                  Claim This Offer
                </Link>
                <Link 
                  to="/services" 
                  className="redwood-btn-outline"
                >
                  View All Specials
                </Link>
              </div>
              
              <p className="text-sm text-charcoal-500 mt-6">*Offer valid through April 30, 2025. Some restrictions apply. Contact us for details.</p>
            </div>
            
            <div className="lg:col-span-2 bg-beige-50 hidden lg:block">
              <div className="h-full w-full relative overflow-hidden">
                <img 
                  src="/images/kitchen-cabinetry.jpg"
                  alt="Kitchen Cabinet Sale" 
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-beige-50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PromoBanner;
