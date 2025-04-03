
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
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Intro />
        <ServiceCategories />
        <WhyChooseUs />
        <ShowroomHighlight />
        <PromoBanner />
        <Testimonials />
        <GalleryPreview />
        
        {/* Quick Estimate Form Section */}
        <section className="redwood-section bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get a Free Estimate Today</h2>
              <p className="text-charcoal-700 mb-6">
                Whether you're renovating your kitchen, updating your bathroom, or adding custom built-ins,
                we're here to help turn your vision into reality.
              </p>
              <p className="text-charcoal-700 mb-6">
                Fill out the form to get started with a free estimate. Our design consultants will contact
                you promptly to discuss your project needs and budget.
              </p>
              <div className="bg-beige-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2 text-charcoal-900">
                  Our Process
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-charcoal-700">
                  <li>Submit your estimate request</li>
                  <li>Schedule a consultation (in-person or virtual)</li>
                  <li>Receive a detailed quote</li>
                  <li>Finalize design and materials</li>
                  <li>Professional installation</li>
                </ol>
              </div>
            </div>
            <div>
              <QuickEstimateForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
