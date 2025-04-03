
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    'Over 10 Years of Experience',
    '100% Solid Wood Construction',
    'Soft-Close Hinges and Dovetail Drawers',
    'Fast Turnaround',
    'Local Team, Trusted Across Chicagoland',
  ];

  return (
    <section className="redwood-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="text-charcoal-700 mb-8">
            At Redwood Cabinets & Design, we take pride in delivering exceptional quality cabinetry and
            professional service from start to finish. Our commitment to excellence has made us one of
            Chicago's most trusted cabinet providers.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-redwood-700 rounded-full p-1 mr-3">
                  <Check size={16} className="text-white" />
                </span>
                <span className="text-charcoal-800 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/61ab68af-9875-4f04-9df7-02cf040fcafe.png"
            alt="Redwood Cabinets Craftsmanship" 
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-redwood-700 text-white py-3 px-6 rounded-lg shadow-lg">
            <p className="text-xl font-semibold">Superior Craftsmanship</p>
            <p>Built to last for generations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
