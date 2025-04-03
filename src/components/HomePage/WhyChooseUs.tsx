
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Craftsmanship',
      description: 'With over 10 years of experience, our skilled craftsmen deliver exceptional quality with attention to every detail.',
      icon: <Check size={16} className="text-white" />
    },
    {
      title: 'Premium Materials',
      description: '100% solid wood construction with high-quality hardware ensures your cabinets will last for years to come.',
      icon: <Check size={16} className="text-white" />
    },
    {
      title: 'Superior Hardware',
      description: 'Soft-close hinges and dovetail drawers come standard with all our cabinet installations.',
      icon: <Check size={16} className="text-white" />
    },
    {
      title: 'Fast Turnaround Times',
      description: 'We respect your timeline and work efficiently to complete your project when promised.',
      icon: <Check size={16} className="text-white" />
    },
    {
      title: 'Chicago-based Team',
      description: 'Our local team is trusted across Chicagoland with countless successful projects and happy clients.',
      icon: <Check size={16} className="text-white" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="redwood-section py-24 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-redwood-700 font-semibold text-lg mb-3 block">Why Choose Redwood</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
            Craftsmanship That Stands Out
          </h2>
          <div className="w-24 h-1 bg-redwood-700 mb-8"></div>
          <p className="text-charcoal-700 mb-10 text-lg leading-relaxed">
            At Redwood Cabinets & Design, we take pride in delivering exceptional quality cabinetry and
            professional service from start to finish. Our commitment to excellence has made us one of
            Chicago's most trusted cabinet providers.
          </p>
          
          <motion.ul 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-start">
                <span className="bg-redwood-700 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="text-charcoal-900 font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-charcoal-700">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/images/gallery-kitchen-1.jpg"
              alt="Redwood Cabinets Craftsmanship" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-redwood-700 text-white py-6 px-8 rounded-lg shadow-2xl max-w-xs">
            <p className="text-xl font-bold mb-2">Superior Craftsmanship</p>
            <p className="text-white/90">Built to last for generations with attention to every detail</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
