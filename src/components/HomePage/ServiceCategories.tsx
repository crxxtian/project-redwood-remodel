
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Bath, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCategories = () => {
  const services = [
    {
      title: 'Kitchens',
      icon: <UtensilsCrossed size={40} className="text-redwood-700" />,
      description: 'Custom layouts, soft-close drawers, luxury finishes.',
      link: '/services#kitchens',
      image: '/images/kitchen-cabinetry.jpg'
    },
    {
      title: 'Bathrooms',
      icon: <Bath size={40} className="text-redwood-700" />,
      description: 'Vanities, linen towers, space-maximizing storage.',
      link: '/services#bathrooms',
      image: '/images/bathroom-vanity.jpg'
    },
    {
      title: 'Custom Projects',
      icon: <Hammer size={40} className="text-redwood-700" />,
      description: 'Offices, pantries, bars, built-ins.',
      link: '/services#custom',
      image: '/images/home-office.jpg'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-900 font-poppins">
            What We Do
          </h2>
          <p className="text-lg text-charcoal-700 leading-relaxed font-opensans">
            We specialize in creating custom cabinetry solutions for every room in your home,
            combining exceptional craftsmanship with designs that perfectly match your style and needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-3 font-poppins">{service.title}</h3>
                    <p className="text-charcoal-700 mb-5 font-opensans">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="inline-block w-full py-3 px-6 bg-redwood-700 text-white font-medium rounded-lg hover:bg-white hover:text-redwood-700 border border-redwood-700 transition-colors duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
