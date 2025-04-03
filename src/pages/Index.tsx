
import { useEffect } from 'react';
import Hero from '@/components/HomePage/Hero';
import Intro from '@/components/HomePage/Intro';
import ServiceCategories from '@/components/HomePage/ServiceCategories';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import ShowroomHighlight from '@/components/HomePage/ShowroomHighlight';
import PromoBanner from '@/components/HomePage/PromoBanner';
import Testimonials from '@/components/HomePage/Testimonials';
import GalleryPreview from '@/components/HomePage/GalleryPreview';
import QuickEstimateForm from '@/components/QuickEstimateForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section with Full-Height Display */}
        <Hero />
        
        {/* Main Page Content */}
        <Intro />
        <ServiceCategories />
        <WhyChooseUs />
        <ShowroomHighlight />
        <PromoBanner />
        <Testimonials />
        <GalleryPreview />
        
        {/* Quick Estimate Form Section */}
        <section className="py-24 bg-beige-50">
          <div className="redwood-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-redwood-700 font-semibold text-lg mb-3 block">Start Your Project</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Get a Free Estimate Today
              </h2>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Whether you're renovating your kitchen, updating your bathroom, or adding custom built-ins,
                we're here to help turn your vision into reality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-charcoal-700 mb-6 text-lg">
                  Fill out the form to get started with a free estimate. Our design consultants will contact
                  you promptly to discuss your project needs and budget.
                </p>
                <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-charcoal-900">
                    Our Process
                  </h3>
                  <ol className="list-decimal pl-5 space-y-4 text-charcoal-700">
                    <li className="pl-2">
                      <span className="font-semibold">Submit your estimate request</span>
                      <p>Tell us about your project and what you're looking to achieve.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Schedule a consultation</span>
                      <p>Choose between an in-person or virtual meeting with our design experts.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Receive a detailed quote</span>
                      <p>We'll provide a comprehensive quote tailored to your specific needs.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Finalize design and materials</span>
                      <p>Work with our team to select the perfect materials and finalize the design.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Professional installation</span>
                      <p>Our skilled craftsmen will install your custom cabinetry with precision.</p>
                    </li>
                  </ol>
                </div>
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

export default Index;
