
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Red Gradient Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/0513e664-0eed-4f8a-82cf-1af659e2572b.png')",
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-redwood-700/80 to-redwood-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
              Top-Quality Custom Cabinets in Chicago
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8">
              Kitchen • Bath • Built-ins — Designed to Fit Your Space & Style
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="redwood-btn bg-white text-redwood-700 hover:bg-redwood-700 hover:text-white flex items-center justify-center"
              >
                Request a Free Estimate
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="redwood-btn-outline bg-transparent text-white border-white hover:bg-white hover:text-redwood-700 flex items-center justify-center"
              >
                Visit Our Westmont Showroom
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
