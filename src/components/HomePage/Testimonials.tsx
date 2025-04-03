
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Chicago, IL",
      rating: 5,
      text: "Redwood Cabinets transformed our outdated kitchen into a modern, functional space. The team was professional from design to installation. Their attention to detail and quality craftsmanship exceeded our expectations!"
    },
    {
      name: "Michael L.",
      location: "Oak Park, IL",
      rating: 5,
      text: "We hired Redwood for our bathroom vanities and couldn't be happier. The cabinets are beautiful, solid wood, and the soft-close drawers are a game-changer. Their team was punctual, clean, and respectful of our home."
    },
    {
      name: "Sarah K.",
      location: "Naperville, IL",
      rating: 5,
      text: "From the showroom experience to the final installation, Redwood Cabinets provided exceptional service. Our custom kitchen island is stunning and exactly what we wanted. I highly recommend their craftsmanship."
    },
    {
      name: "Robert T.",
      location: "Evanston, IL",
      rating: 4,
      text: "Great value for the quality. We got quotes from several companies, and Redwood offered the best combination of price and quality. Our kitchen cabinets look high-end but didn't break the bank."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="redwood-section">
      <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i + testimonials[currentIndex].rating} size={24} className="text-gray-200" />
            ))}
          </div>
          
          <blockquote className="text-center">
            <p className="text-lg md:text-xl text-charcoal-700 italic mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <footer className="text-charcoal-900 font-semibold">
              {testimonials[currentIndex].name}
              <span className="block text-charcoal-500 font-normal text-sm mt-1">
                {testimonials[currentIndex].location}
              </span>
            </footer>
          </blockquote>
          
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-redwood-700 text-white py-1 px-4 rounded-full text-sm">
            Google Review
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className="text-charcoal-700" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} className="text-charcoal-700" />
        </button>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-redwood-700' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/search?q=redwood+cabinets+chicago+reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="redwood-btn-outline inline-flex items-center"
          >
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
