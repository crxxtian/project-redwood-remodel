
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Bath, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCategories = () => {
  const serviceCategoriesData = [
    {
      title: 'Kitchen Cabinets',
      icon: <UtensilsCrossed size={40} className="text-redwood-700" />,
      description: 'Custom layouts, soft-close drawers, high-end finishes. Transform your culinary space with premium cabinetry that combines beauty and functionality.',
      link: '/services#kitchens',
      image: '/kitchen-cabinetry.jpg'
    },
    {
      title: 'Bathroom Vanities',
      icon: <Bath size={40} className="text-redwood-700" />,
      description: 'Elegant vanities, linen towers, space-maximizing storage. Create a luxurious bathroom retreat with customized cabinetry solutions.',
      link: '/services#bathrooms',
      image: '/bathroom-vanity.jpg'
    },
    {
      title: 'Custom Projects',
      icon: <Hammer size={40} className="text-redwood-700" />,
      description: 'Home offices, entertainment centers, built-ins, and more. Maximize your living space with bespoke cabinetry designed for your specific needs.',
      link: '/services#custom',
      image: '/home-office.jpg'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-redwood-700 font-semibold text-lg mb-3 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900 font-poppins">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
          <p className="text-lg text-charcoal-700 leading-relaxed font-opensans">
            We specialize in creating custom cabinetry solutions for every room in your home,
            combining exceptional craftsmanship with designs that perfectly match your style and needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {serviceCategoriesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-900/80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-beige-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-redwood-50 transition-colors duration-300">
                  {service.icon}
                </div>
                <p className="text-charcoal-700 mb-6 font-opensans leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-block py-3 px-6 bg-white text-redwood-700 font-medium rounded-lg hover:bg-redwood-700 hover:text-white border border-redwood-700 transition-colors duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
