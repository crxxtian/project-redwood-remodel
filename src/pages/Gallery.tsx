
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      category: 'kitchen',
      title: 'Modern White Kitchen',
      description: 'Custom white shaker cabinets with quartz countertops and built-in wine storage.',
      image: '/images/gallery-kitchen-1.jpg',
    },
    {
      id: 2,
      category: 'bathroom',
      title: 'Double Vanity Bathroom',
      description: 'Gray double vanity with undermount sinks and custom mirrors.',
      image: '/images/gallery-bath-1.jpg',
    },
    {
      id: 3,
      category: 'kitchen',
      title: 'Traditional Kitchen',
      description: 'Cherry wood cabinets with granite countertops and center island.',
      image: '/images/kitchen-cabinetry.jpg',
    },
    {
      id: 4,
      category: 'custom',
      title: 'Built-in Office Storage',
      description: 'Custom built-in office with desk and overhead cabinets.',
      image: '/images/home-office.jpg',
    },
    {
      id: 5,
      category: 'bathroom',
      title: 'Modern Floating Vanity',
      description: 'Wall-mounted vanity with vessel sink and hidden storage.',
      image: '/images/bathroom-vanity.jpg',
    },
    {
      id: 6,
      category: 'custom',
      title: 'Entertainment Center',
      description: 'Custom entertainment wall with integrated TV mount and display shelving.',
      image: '/images/gallery-1.jpg',
    },
    {
      id: 7,
      category: 'kitchen',
      title: 'Luxury Kitchen',
      description: 'High-end kitchen with custom island and premium appliances.',
      image: '/images/gallery-2.jpg',
    },
    {
      id: 8,
      category: 'custom',
      title: 'Wine Storage',
      description: 'Temperature-controlled custom wine cabinet with glass doors.',
      image: '/images/gallery-1.jpg',
    },
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
    
  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
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
              <span className="text-redwood-700 font-semibold text-lg mb-3 block">Our Work</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Project Gallery
              </h1>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Browse our portfolio of custom cabinetry projects and get inspired for your own home.
                Each project showcases our commitment to quality craftsmanship and attention to detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="py-8 bg-white border-b">
          <div className="redwood-section">
            <div className="flex justify-center flex-wrap gap-4">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'kitchen', label: 'Kitchens' },
                { id: 'bathroom', label: 'Bathrooms' },
                { id: 'custom', label: 'Custom Projects' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeFilter === filter.id
                      ? 'bg-redwood-700 text-white'
                      : 'bg-gray-100 text-charcoal-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="redwood-section">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <AnimatePresence>
                {filteredGallery.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => handleImageClick(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 text-white">
                          <span className="inline-block bg-redwood-700 px-3 py-1 rounded-full text-xs mb-2">
                            {item.category === 'kitchen' ? 'Kitchen' : 
                             item.category === 'bathroom' ? 'Bathroom' : 'Custom Project'}
                          </span>
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredGallery.length === 0 && (
              <div className="text-center py-12">
                <p className="text-charcoal-700 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-redwood-500 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 md:p-6">
                  <span className="inline-block bg-redwood-700 px-3 py-1 rounded-full text-xs text-white mb-2">
                    {selectedImage.category === 'kitchen' ? 'Kitchen' : 
                     selectedImage.category === 'bathroom' ? 'Bathroom' : 'Custom Project'}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
