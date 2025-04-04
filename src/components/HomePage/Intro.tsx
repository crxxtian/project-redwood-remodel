
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="redwood-section pt-24 pb-16">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
          Custom Cabinetry Solutions<br className="hidden md:block" /> for Every Space
        </h2>
        
        <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
        
        <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
          At Redwood Cabinets Chicago, we create functional, beautiful cabinetry 
          tailored to your lifestyle and space. From complete kitchen remodels to 
          elegant bathroom vanities and custom storage solutions, our expert team 
          delivers craftsmanship that transforms your home.
        </p>
        
        <p className="text-lg text-charcoal-700 leading-relaxed">
          With over a decade of experience, we pride ourselves 
          on exceptional quality, personalized service, and attention to detail that 
          ensures each project exceeds expectations.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
