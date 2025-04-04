
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Bath, Hammer, ChevronDown, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickEstimateForm from '@/components/QuickEstimateForm';

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('kitchens');
  
  // Set active tab based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'bathrooms' || hash === 'custom') {
      setActiveTab(hash);
    } else {
      setActiveTab('kitchens');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll to section when tab changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(activeTab);
      if (element) {
        const yOffset = -100; // Offset for sticky header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  }, [activeTab, location.hash]);

  const services = [
    {
      id: 'kitchens',
      title: 'Kitchen Cabinetry',
      icon: <UtensilsCrossed size={30} className="text-redwood-700" />,
      description: `Our custom kitchen cabinets are the centerpiece of your home's most important room. We design and build cabinetry that perfectly balances functionality and aesthetics, giving you storage solutions that meet your specific needs while creating a beautiful space for cooking and gathering.`,
      features: [
        'Custom layouts designed for your space',
        'Premium solid wood construction',
        'Soft-close doors and drawers standard',
        'Full-extension drawer slides',
        'Wide range of finishes and styles',
        'Custom organization solutions',
        'Islands and specialty cabinets',
        'Integrated appliance panels',
      ],
      images: [
        {
          url: '/kitchen-cabinetry2.jpg',
          alt: 'Custom kitchen cabinets with island'
        },
        {
          url: '/gallery-kitchen-1.jpg',
          alt: 'Modern kitchen with custom storage'
        }
      ]
    },
    {
      id: 'bathrooms',
      title: 'Bathroom Vanities',
      icon: <Bath size={30} className="text-redwood-700" />,
      description: `Transform your bathroom with custom vanities and storage solutions that combine beauty and practicality. Whether you're renovating a small powder room or creating a luxury master bathroom retreat, our custom cabinetry adds value and elegance to your space.`,
      features: [
        'Custom vanities in any size',
        'Moisture-resistant construction',
        'Undermount or vessel sink options',
        'Space-maximizing storage solutions',
        'Matching mirrors and medicine cabinets',
        'Linen towers and cabinets',
        'Premium hardware options',
        'Variety of countertop materials',
      ],
      images: [
        {
          url: '/bathroom-vanity2.jpg',
          alt: 'Double vanity with custom storage'
        },
        {
          url: '/gallery-1.jpg',
          alt: 'Modern bathroom with custom cabinetry'
        }
      ]
    },
    {
      id: 'custom',
      title: 'Custom Projects',
      icon: <Hammer size={30} className="text-redwood-700" />,
      description: `Beyond kitchens and bathrooms, we create custom cabinetry for every room in your home. From built-in entertainment centers to home offices, mudrooms to wine cellars, our team can design and build custom solutions that maximize your space and reflect your personal style.`,
      features: [
        'Home office built-ins and desks',
        'Entertainment centers and media walls',
        'Custom closet systems',
        'Wet bars and wine storage',
        'Laundry room cabinetry',
        'Mudroom organization',
        'Bookshelves and display cases',
        'Specialty storage solutions',
      ],
      images: [
        {
          url: '/home-office2.jpg',
          alt: 'Custom built-in home office'
        },
        {
          url: '/gallery-bath-1.jpg',
          alt: 'Custom entertainment center'
        }
      ]
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-beige-50">
          <div className="redwood-section">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-redwood-700 font-semibold text-lg mb-3 block">Our Services</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Custom Cabinetry Solutions
              </h1>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                At Redwood Cabinets & Design, we specialize in creating premium custom cabinetry
                for every room in your home. Each project is crafted to your exact specifications,
                combining exceptional craftsmanship with designs that perfectly match your style and needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Navigation Tabs */}
        <section className="sticky top-[60px] z-30 bg-white shadow-md">
          <div className="redwood-section py-0">
            <div className="flex overflow-x-auto no-scrollbar">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`#${service.id}`}
                  className={`flex items-center whitespace-nowrap px-6 py-4 border-b-2 font-medium transition-all ${
                    activeTab === service.id
                      ? 'border-redwood-700 text-redwood-700'
                      : 'border-transparent text-charcoal-600 hover:text-redwood-700 hover:border-redwood-200'
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Sections */}
        <section className="py-20 bg-white">
          <div className="redwood-section">
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="mb-32 last:mb-0 scroll-mt-32"
                variants={tabVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className={service.id === 'bathrooms' ? 'order-2 lg:order-1' : ''}>
                    <div className="flex items-center mb-6">
                      <span className="mr-3">{service.icon}</span>
                      <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900">
                        {service.title}
                      </h2>
                    </div>
                    <div className="w-24 h-1 bg-redwood-700 mb-8"></div>
                    <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4 text-charcoal-900">Features & Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <Check size={18} className="text-redwood-700 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-charcoal-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="redwood-btn inline-flex items-center">
                      Request a Consultation
                      <ChevronDown size={18} className="ml-2" />
                    </Link>
                  </div>
                  
                  <div className={service.id === 'bathrooms' ? 'order-1 lg:order-2' : ''}>
                    <div className="grid grid-cols-1 gap-4">
                      {service.images.map((image, index) => (
                        <div 
                          key={index} 
                          className={`overflow-hidden rounded-xl shadow-xl ${
                            index === 0 ? 'md:ml-12' : 'md:mr-12 md:-mt-6'
                          }`}
                        >
                          <img 
                            src={image.url}
                            alt={image.alt} 
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-beige-50">
          <div className="redwood-section">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Our Process
              </h2>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                From initial consultation to final installation, we guide you through every step
                of creating your custom cabinetry with attention to detail and commitment to quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Design & Planning",
                  description: "We start with a consultation to understand your vision, needs, and budget. Our designers create detailed plans and 3D renderings to bring your ideas to life.",
                },
                {
                  number: "02",
                  title: "Materials & Crafting",
                  description: "Once designs are approved, we select premium materials and our skilled craftsmen begin building your custom cabinetry with precision and attention to detail.",
                },
                {
                  number: "03",
                  title: "Installation & Completion",
                  description: "Our professional installation team ensures your cabinetry is perfectly installed, and we conduct a thorough walkthrough to ensure your complete satisfaction.",
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="text-6xl font-bold text-redwood-100 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-4 text-charcoal-900 relative z-10">{step.title}</h3>
                  <p className="text-charcoal-700 relative z-10">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Estimate Form */}
        <section className="py-20 bg-white">
          <div className="redwood-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-900">
                    Ready to Get Started?
                  </h2>
                  <div className="w-24 h-1 bg-redwood-700 mb-8"></div>
                  <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                    Take the first step toward your custom cabinetry project by requesting a consultation and estimate.
                    Our team is ready to help bring your vision to life.
                  </p>
                  <p className="text-charcoal-700 mb-8">
                    Fill out the form to get started, and one of our design consultants will contact you
                    to discuss your project needs and schedule a consultation.
                  </p>
                </motion.div>
              </div>
              <div>
                <QuickEstimateForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
