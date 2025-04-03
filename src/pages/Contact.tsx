
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickEstimateForm from '@/components/QuickEstimateForm';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <span className="text-redwood-700 font-semibold text-lg mb-3 block">Contact Us</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Get In Touch
              </h1>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Have questions about our custom cabinetry or ready to start your project?
                We're here to help. Contact us today to schedule a consultation or visit our showroom.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Details & Form */}
        <section className="py-20 bg-white">
          <div className="redwood-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-900">
                  Contact Information
                </h2>
                <div className="w-24 h-1 bg-redwood-700 mb-10"></div>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="bg-beige-50 p-3 rounded-full mr-5">
                      <Phone className="text-redwood-700 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-charcoal-900">Phone</h3>
                      <p className="text-lg text-charcoal-700">
                        <a href="tel:872-312-7007" className="hover:text-redwood-700 transition-colors">872-312-7007</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-beige-50 p-3 rounded-full mr-5">
                      <Mail className="text-redwood-700 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-charcoal-900">Email</h3>
                      <p className="text-lg text-charcoal-700">
                        <a href="mailto:info@redwoodcabinets.com" className="hover:text-redwood-700 transition-colors">info@redwoodcabinets.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-beige-50 p-3 rounded-full mr-5">
                      <MapPin className="text-redwood-700 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-charcoal-900">Address</h3>
                      <p className="text-lg text-charcoal-700">
                        233 W Ogden Ave<br />
                        Westmont, IL 60559
                      </p>
                      <a 
                        href="https://maps.google.com/?q=233+W+Ogden+Ave,+Westmont,+IL+60559"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-redwood-700 font-medium hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-beige-50 p-3 rounded-full mr-5">
                      <Clock className="text-redwood-700 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-charcoal-900">Hours</h3>
                      <div className="space-y-1 text-lg text-charcoal-700">
                        <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
                        <p>Saturday: 10:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.0355421024853!2d-87.9695508!3d41.7967756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4f5c3b538417%3A0xf96670adba999f3c!2s233%20W%20Ogden%20Ave%2C%20Westmont%2C%20IL%2060559!5e0!3m2!1sen!2sus!4v1649890687654!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
              
              {/* Quick Estimate Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-900">
                  Request an Estimate
                </h2>
                <div className="w-24 h-1 bg-redwood-700 mb-10"></div>
                <QuickEstimateForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-beige-50">
          <div className="redwood-section">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-900">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Find answers to some of our most commonly asked questions. If you don't see what
                you're looking for, please contact us directly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical cabinetry project take?",
                  answer: "Project timelines vary based on size and complexity, but most kitchen projects take 4-6 weeks from design approval to installation completion. Bathroom and custom projects may take 3-5 weeks."
                },
                {
                  question: "Do you provide free estimates?",
                  answer: "Yes, we provide free consultations and estimates for all cabinetry projects. You can request an estimate through our website or by calling us directly."
                },
                {
                  question: "What types of materials do you use for your cabinets?",
                  answer: "We use high-quality solid wood for all our cabinet frames and doors, with a variety of species available including maple, cherry, oak, and walnut. We also offer a range of finishes and hardware options."
                },
                {
                  question: "Do you offer installation services?",
                  answer: "Yes, we provide professional installation services for all our cabinetry. Our experienced team ensures that your cabinets are installed correctly and to your satisfaction."
                },
                {
                  question: "Can you match existing cabinetry in my home?",
                  answer: "Yes, we can match existing cabinetry to create a seamless look. Our custom approach allows us to replicate styles, finishes, and hardware to integrate new cabinets with your existing ones."
                },
                {
                  question: "Do you offer financing options?",
                  answer: "Yes, we offer several financing options to help make your project affordable. Please contact us for details about our current financing programs."
                },
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-charcoal-900">{faq.question}</h3>
                  <p className="text-charcoal-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
