
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Chicago, IL",
      rating: 5,
      text: "Redwood Cabinets transformed our outdated kitchen into a modern, functional space. The team was professional from design to installation. Their attention to detail and quality craftsmanship exceeded our expectations!",
      image: "/images/testimonial-headshot.jpg",
      project: "Kitchen Remodel"
    },
    {
      name: "Michael L.",
      location: "Oak Park, IL",
      rating: 5,
      text: "We hired Redwood for our bathroom vanities and couldn't be happier. The cabinets are beautiful, solid wood, and the soft-close drawers are a game-changer. Their team was punctual, clean, and respectful of our home.",
      image: "/images/testimonial-headshot.jpg",
      project: "Bathroom Renovation"
    },
    {
      name: "Sarah K.",
      location: "Naperville, IL",
      rating: 5,
      text: "From the showroom experience to the final installation, Redwood Cabinets provided exceptional service. Our custom kitchen island is stunning and exactly what we wanted. I highly recommend their craftsmanship.",
      image: "/images/testimonial-headshot.jpg",
      project: "Custom Island"
    },
    {
      name: "Robert T.",
      location: "Evanston, IL",
      rating: 4,
      text: "Great value for the quality. We got quotes from several companies, and Redwood offered the best combination of price and quality. Our kitchen cabinets look high-end but didn't break the bank.",
      image: "/images/testimonial-headshot.jpg",
      project: "Full Kitchen"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const stopAutoPlay = () => setIsAutoPlaying(false);
  
  const nextSlide = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    stopAutoPlay();
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  // Track slide direction
  const [direction, setDirection] = useState(0);

  const setSlideWithDirection = (newIndex) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="redwood-section">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-redwood-700 font-semibold text-lg mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
          <p className="text-lg text-charcoal-700 leading-relaxed">
            Don't just take our word for it. Hear what our clients have to say about their experience working with Redwood Cabinets & Design.
          </p>
        </motion.div>
      
        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[400px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div 
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white rounded-xl overflow-hidden shadow-xl">
                  <div className="md:col-span-2 bg-redwood-50">
                    <div className="h-full relative">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={`${testimonials[currentIndex].name} headshot`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</p>
                        <p className="text-white/90">{testimonials[currentIndex].location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i + testimonials[currentIndex].rating} size={22} className="text-gray-200" />
                        ))}
                      </div>
                      <div className="text-redwood-700">
                        <Quote size={36} />
                      </div>
                    </div>
                    
                    <blockquote className="flex-grow">
                      <p className="text-lg text-charcoal-700 italic leading-relaxed mb-8">
                        {testimonials[currentIndex].text}
                      </p>
                    </blockquote>
                    
                    <div className="mt-auto">
                      <span className="inline-block bg-redwood-50 text-redwood-700 px-3 py-1 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].project}
                      </span>
                      <p className="mt-4 text-sm text-charcoal-500">
                        Verified Google Review
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-charcoal-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-charcoal-700" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-redwood-700 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?q=redwood+cabinets+chicago+reviews" 
              target="_blank"
              rel="noopener noreferrer"
              className="redwood-btn-outline inline-flex items-center"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
