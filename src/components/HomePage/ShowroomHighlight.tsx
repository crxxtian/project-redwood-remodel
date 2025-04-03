
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const ShowroomHighlight = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="redwood-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/fa312769-e7b8-4077-b1dc-dbdfd757b340.png"
              alt="Redwood Cabinets Showroom" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="section-title">Visit Our Westmont Showroom</h2>
            <p className="text-charcoal-700 mb-6">
              Are you struggling to visualize your perfect space? Visit our showroom to 
              explore our extensive range of custom cabinetry options. Discover firsthand 
              the quality and craftsmanship that set us apart.
            </p>
            <p className="text-charcoal-700 mb-8">
              Our experts are on hand to guide you through selecting the ideal cabinetry 
              that complements your home's style and meets your functional needs. Experience 
              the difference that personalized service and superior products make.
            </p>
            <div className="flex">
              <a 
                href="https://maps.google.com/?q=233+W+Ogden+Ave,+Westmont,+IL+60559"
                target="_blank"
                rel="noopener noreferrer"
                className="redwood-btn flex items-center"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
            </div>
            <div className="mt-8 bg-white p-4 rounded-lg shadow border-l-4 border-redwood-700">
              <p className="font-semibold text-charcoal-900">Address:</p>
              <p className="text-charcoal-700">233 W Ogden Ave, Westmont, IL 60559</p>
              <p className="mt-2 font-semibold text-charcoal-900">Hours:</p>
              <p className="text-charcoal-700">Mon-Fri: 9:00 AM - 5:30 PM</p>
              <p className="text-charcoal-700">Saturday: 10:00 AM - 3:00 PM</p>
              <p className="text-charcoal-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomHighlight;
