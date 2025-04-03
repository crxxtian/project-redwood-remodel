
import { CheckCircle } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="py-12 bg-redwood-700">
      <div className="redwood-section">
        <div className="bg-white rounded-lg shadow-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="transform -rotate-1">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 lg:mr-6">
                <h3 className="text-3xl font-bold text-redwood-700 mb-2 flex items-center">
                  <span className="text-4xl mr-2">🔥</span> 
                  HUGE SPRING SALE
                </h3>
                <h4 className="text-2xl font-semibold text-charcoal-900 mb-4">
                  10x10 Kitchen Cabinet Set for $9,499
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle size={18} className="text-redwood-700 mr-2 mt-0.5" />
                    <span className="text-charcoal-700">36" tall wall cabinets</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="text-redwood-700 mr-2 mt-0.5" />
                    <span className="text-charcoal-700">Granite countertop</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="text-redwood-700 mr-2 mt-0.5" />
                    <span className="text-charcoal-700">Undermount sink</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="text-redwood-700 mr-2 mt-0.5" />
                    <span className="text-charcoal-700">Soft-close drawers</span>
                  </div>
                </div>
                <p className="text-sm text-charcoal-500">*Limited time offer. Terms and conditions apply.</p>
              </div>
              <div className="shrink-0">
                <img 
                  src="/lovable-uploads/5bd26de1-4c76-4d1a-b7c4-0ad1dcbac630.png"
                  alt="Kitchen Cabinet Sale" 
                  className="rounded-lg h-48 w-48 object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
