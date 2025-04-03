
import { Link } from 'react-router-dom';
import { KitchenPot, ShowerHead, Wrench } from 'lucide-react';

const ServiceCategories = () => {
  const services = [
    {
      title: 'Kitchens',
      icon: <KitchenPot size={40} className="text-redwood-700 mb-4" />,
      description: 'Custom layouts, soft-close drawers, luxury finishes.',
      link: '/services#kitchens',
      image: '/lovable-uploads/61ab68af-9875-4f04-9df7-02cf040fcafe.png'
    },
    {
      title: 'Bathrooms',
      icon: <ShowerHead size={40} className="text-redwood-700 mb-4" />,
      description: 'Vanities, linen towers, space-maximizing storage.',
      link: '/services#bathrooms',
      image: '/lovable-uploads/5bd26de1-4c76-4d1a-b7c4-0ad1dcbac630.png'
    },
    {
      title: 'Custom Projects',
      icon: <Wrench size={40} className="text-redwood-700 mb-4" />,
      description: 'Offices, pantries, bars, built-ins.',
      link: '/services#custom',
      image: '/lovable-uploads/0513e664-0eed-4f8a-82cf-1af659e2572b.png'
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="redwood-section">
        <h2 className="section-title text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-center">
                  {service.icon}
                </div>
                <p className="text-charcoal-700 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-block w-full text-center py-2 px-4 bg-redwood-50 text-redwood-700 font-medium rounded hover:bg-redwood-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
