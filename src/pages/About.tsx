
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We take pride in the quality of our work, using the finest materials and techniques to create cabinets that last for generations."
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality down to the smallest detail."
    },
    {
      title: "Integrity & Transparency",
      description: "We believe in honest communication, fair pricing, and delivering exactly what we promise—on time and within budget."
    },
    {
      title: "Innovation",
      description: "We continuously explore new designs, materials, and technologies to bring you the most current and innovative cabinetry solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-beige-50">
          <div className="redwood-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-redwood-700 font-semibold text-lg mb-3 block">About Us</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                  Crafting Custom Cabinetry Since 2013
                </h1>
                <div className="w-24 h-1 bg-redwood-700 mb-8"></div>
                <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                  Founded in Chicago with a passion for fine woodworking and custom design, Redwood Cabinets 
                  has grown to become one of Chicago's most trusted cabinetry providers. Our journey began with 
                  a simple premise: to create beautiful, functional cabinetry tailored to each client's unique needs.
                </p>
                <p className="text-lg text-charcoal-700 leading-relaxed">
                  Today, we continue that mission with a team of skilled craftsmen and designers dedicated to 
                  bringing your vision to life, whether it's a complete kitchen renovation, elegant bathroom 
                  vanities, or custom built-ins for any room in your home.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/images/team-photo.jpg" 
                  alt="Redwood Cabinets Team" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-20 bg-white">
          <div className="redwood-section">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Our Mission & Values
              </h2>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Our mission is to transform living spaces through superior craftsmanship, innovative design, 
                and exceptional service. We believe in creating cabinetry that combines beauty, functionality, 
                and durability to enhance the lives of our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-beige-50 p-8 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-charcoal-900">{value.title}</h3>
                  <p className="text-charcoal-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
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
                Our Story
              </h2>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                From humble beginnings to becoming a leading cabinetry provider in Chicago,
                our journey has been defined by a commitment to excellence and continuous growth.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-redwood-200 hidden md:block"></div>
              
              <div className="space-y-16">
                {/* 2013 - Beginning */}
                <div className="relative">
                  <motion.div 
                    className="md:w-1/2 md:pr-16 md:text-right"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-2 text-redwood-700">2013</h3>
                      <h4 className="text-xl font-semibold mb-4 text-charcoal-900">Humble Beginnings</h4>
                      <p className="text-charcoal-700">
                        Redwood Cabinets was founded with just three employees and a small workshop 
                        in the heart of Chicago, focusing on custom kitchen cabinetry for local homeowners.
                      </p>
                    </div>
                  </motion.div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-redwood-700 border-4 border-white hidden md:block"></div>
                </div>
                
                {/* 2016 - Growth */}
                <div className="relative">
                  <motion.div 
                    className="md:w-1/2 md:pl-16 md:ml-auto"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-2 text-redwood-700">2016</h3>
                      <h4 className="text-xl font-semibold mb-4 text-charcoal-900">Expansion & Growth</h4>
                      <p className="text-charcoal-700">
                        Following growing demand, we expanded our workshop and team, adding custom bathroom 
                        vanities and built-ins to our service offerings.
                      </p>
                    </div>
                  </motion.div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-redwood-700 border-4 border-white hidden md:block"></div>
                </div>
                
                {/* 2019 - Showroom */}
                <div className="relative">
                  <motion.div 
                    className="md:w-1/2 md:pr-16 md:text-right"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-2 text-redwood-700">2019</h3>
                      <h4 className="text-xl font-semibold mb-4 text-charcoal-900">Westmont Showroom Opens</h4>
                      <p className="text-charcoal-700">
                        We opened our flagship showroom in Westmont, showcasing our premium cabinet collections 
                        and providing a space for clients to explore materials and designs.
                      </p>
                    </div>
                  </motion.div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-redwood-700 border-4 border-white hidden md:block"></div>
                </div>
                
                {/* Today */}
                <div className="relative">
                  <motion.div 
                    className="md:w-1/2 md:pl-16 md:ml-auto"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-2 text-redwood-700">Today</h3>
                      <h4 className="text-xl font-semibold mb-4 text-charcoal-900">Chicago's Premier Cabinetry Source</h4>
                      <p className="text-charcoal-700">
                        Now with a team of expert craftsmen and designers, Redwood Cabinets serves clients 
                        across Chicagoland, maintaining our commitment to quality craftsmanship and personalized service.
                      </p>
                    </div>
                  </motion.div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-redwood-700 border-4 border-white hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Our Showroom CTA */}
        <section className="py-20 bg-white">
          <div className="redwood-section">
            <div className="bg-beige-50 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div 
                  className="p-8 md:p-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-900">
                    Visit Our Showroom Today
                  </h2>
                  <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                    Experience our craftsmanship firsthand at our Westmont showroom. Our team is ready to help you 
                    explore options and start planning your custom cabinetry project.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="flex items-start">
                        <MapPin size={20} className="mr-3 mt-1 text-redwood-700 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-charcoal-900">Address:</p>
                          <p className="text-charcoal-700">233 W Ogden Ave</p>
                          <p className="text-charcoal-700">Westmont, IL 60559</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start">
                        <Clock size={20} className="mr-3 mt-1 text-redwood-700 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-charcoal-900">Hours:</p>
                          <p className="text-charcoal-700">Mon-Fri: 9:00 AM - 5:30 PM</p>
                          <p className="text-charcoal-700">Saturday: 10:00 AM - 3:00 PM</p>
                          <p className="text-charcoal-700">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://maps.google.com/?q=233+W+Ogden+Ave,+Westmont,+IL+60559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="redwood-btn flex items-center"
                    >
                      <MapPin size={18} className="mr-2" />
                      Get Directions
                    </a>
                    
                    <a 
                      href="tel:872-312-7007"
                      className="redwood-btn-outline flex items-center"
                    >
                      <Phone size={18} className="mr-2" />
                      Call Us
                    </a>
                  </div>
                </motion.div>
                
                <div className="h-80 lg:h-auto">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.0355421024853!2d-87.9695508!3d41.7967756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4f5c3b538417%3A0xf96670adba999f3c!2s233%20W%20Ogden%20Ave%2C%20Westmont%2C%20IL%2060559!5e0!3m2!1sen!2sus!4v1649890687654!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
