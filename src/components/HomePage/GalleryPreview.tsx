
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GalleryPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);
  
  const galleryImages = [
    {
      url: '/images/gallery-1.jpg',
      alt: 'Modern Kitchen with White Cabinets',
      category: 'Kitchen',
      description: 'Custom-built white kitchen cabinets with quartz countertops and modern hardware',
    },
    {
      url: '/images/gallery-2.jpg',
      alt: 'Elegant Bathroom Vanity',
      category: 'Bathroom',
      description: 'Double vanity with custom mirrors and built-in storage solutions',
    },
    {
      url: '/images/gallery-kitchen-1.jpg',
      alt: 'Open Concept Kitchen',
      category: 'Kitchen',
      description: 'Open concept kitchen with island and specialized storage solutions',
    },
    {
      url: '/images/gallery-bath-1.jpg',
      alt: 'Custom Built-in Storage',
      category: 'Custom',
      description: 'Wall-to-wall built-in cabinetry with integrated media center',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };
  
  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) { // Only auto-advance if not hovering
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <section className="py-24 bg-white">
      <div className="redwood-section">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-redwood-700 font-semibold text-lg mb-3 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
          <p className="text-lg text-charcoal-700 leading-relaxed">
            Browse our latest work and get inspired for your next home renovation project.
            Our portfolio showcases the quality and versatility of our custom cabinetry.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative max-w-6xl mx-auto overflow-hidden"
          ref={sliderRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-w-16 aspect-h-9 mb-10">
            <div className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 10 : 0
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <span className="inline-block bg-redwood-700 text-white px-4 py-1 rounded-full text-sm mb-4 max-w-max">
                      {image.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                      {image.alt}
                    </h3>
                    <p className="text-white/90 text-lg max-w-2xl">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-md hover:bg-white transition-all duration-300 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-charcoal-900" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-md hover:bg-white transition-all duration-300 z-20"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-charcoal-900" />
          </button>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {galleryImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                  index === currentIndex ? 'ring-4 ring-redwood-700' : ''
                }`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.url}
                    alt={`Thumbnail for ${image.alt}`}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    index === currentIndex ? 'opacity-0' : 'opacity-100'
                  }`}></div>
                </div>
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/gallery"
              className="redwood-btn inline-flex items-center bg-redwood-700 text-white shadow-md"
            >
              View Full Gallery
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
