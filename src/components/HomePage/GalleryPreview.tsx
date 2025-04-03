
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryImages = [
    {
      url: '/lovable-uploads/61ab68af-9875-4f04-9df7-02cf040fcafe.png',
      alt: 'Modern Kitchen with White Cabinets',
      category: 'Kitchen',
    },
    {
      url: '/lovable-uploads/5bd26de1-4c76-4d1a-b7c4-0ad1dcbac630.png',
      alt: 'Elegant Bathroom Vanity',
      category: 'Bathroom',
    },
    {
      url: '/lovable-uploads/0513e664-0eed-4f8a-82cf-1af659e2572b.png',
      alt: 'Custom Built-in Bookshelves',
      category: 'Custom',
    },
    {
      url: '/lovable-uploads/fa312769-e7b8-4077-b1dc-dbdfd757b340.png',
      alt: 'Kitchen Island with Custom Storage',
      category: 'Kitchen',
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

  return (
    <section className="bg-beige-50 py-20">
      <div className="redwood-section">
        <h2 className="section-title text-center mb-6">Recent Projects</h2>
        <p className="text-center text-charcoal-700 mb-12 max-w-2xl mx-auto">
          Browse our latest work and get inspired for your next home renovation project.
          Our portfolio showcases the quality and versatility of our custom cabinetry.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
              <img
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].alt}
                className="object-cover w-full h-full transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <span className="inline-block bg-redwood-700 text-white px-3 py-1 rounded-full text-sm mb-3">
                  {galleryImages[currentIndex].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {galleryImages[currentIndex].alt}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-md hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-charcoal-900" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-md hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-charcoal-900" />
          </button>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-lg overflow-hidden border-2 ${
                  index === currentIndex ? 'border-redwood-700' : 'border-transparent'
                }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail for ${image.alt}`}
                  className="object-cover w-full h-20"
                />
              </button>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="redwood-btn inline-flex items-center"
            >
              View Full Gallery
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
