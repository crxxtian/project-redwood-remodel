
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Choosing the Right Cabinets for a Chicago Kitchen',
      excerpt: 'Navigate the options for kitchen cabinets in Chicago homes, from materials to styles that work with local architecture and climate considerations.',
      image: '/images/kitchen-cabinetry.jpg',
      date: 'March 15, 2025',
      readTime: '5 min read',
      slug: 'choosing-right-cabinets-chicago-kitchen'
    },
    {
      id: 2,
      title: 'Quartz vs Granite: What\'s Best for Your Countertops?',
      excerpt: 'A detailed comparison of quartz and granite countertops, examining durability, maintenance, appearance, and value to help you make the right choice.',
      image: '/images/gallery-kitchen-1.jpg',
      date: 'February 28, 2025',
      readTime: '7 min read',
      slug: 'quartz-vs-granite-countertops'
    },
    {
      id: 3,
      title: 'Maximizing Storage in Small Bathroom Spaces',
      excerpt: 'Creative solutions for bathroom storage challenges in compact city apartments and homes, from custom vanities to wall-mounted options.',
      image: '/images/gallery-bath-1.jpg',
      date: 'February 10, 2025',
      readTime: '6 min read',
      slug: 'maximizing-bathroom-storage-small-spaces'
    },
    {
      id: 4,
      title: 'Trends in Kitchen Design for 2025',
      excerpt: 'Explore the latest kitchen design trends for the year, from color palettes to innovative storage solutions and tech integration.',
      image: '/images/gallery-1.jpg',
      date: 'January 22, 2025',
      readTime: '8 min read',
      slug: 'kitchen-design-trends-2025'
    },
    {
      id: 5,
      title: 'Custom Home Office Solutions for Remote Workers',
      excerpt: 'Design ideas for productive and beautiful home office spaces with custom cabinetry that blends functionality and style.',
      image: '/images/home-office.jpg',
      date: 'January 5, 2025',
      readTime: '6 min read',
      slug: 'custom-home-office-solutions-remote-workers'
    },
    {
      id: 6,
      title: 'The Value of Custom Cabinetry for Home Resale',
      excerpt: 'How investing in quality custom cabinetry can increase your home\'s value and appeal to potential buyers in the competitive Chicago market.',
      image: '/images/gallery-2.jpg',
      date: 'December 15, 2024',
      readTime: '7 min read',
      slug: 'custom-cabinetry-home-resale-value'
    }
  ];

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
              <span className="text-redwood-700 font-semibold text-lg mb-3 block">Our Blog</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-900">
                Insights & Inspiration
              </h1>
              <div className="w-24 h-1 bg-redwood-700 mx-auto mb-8"></div>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Explore our collection of articles featuring design tips, trends, and expert advice
                to help you make informed decisions about your custom cabinetry projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="redwood-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-beige-50">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-charcoal-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <CalendarDays size={16} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold mb-3 text-charcoal-900 hover:text-redwood-700 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-charcoal-700 mb-6">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="mt-auto inline-flex items-center font-medium text-redwood-700 hover:text-redwood-600"
                    >
                      Read Article
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-beige-50">
          <div className="redwood-section">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-charcoal-900">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-charcoal-700 mb-6">
                    Stay updated with our latest articles, design tips, and special offers.
                    Join our community of homeowners and design enthusiasts.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-redwood-500 focus:border-redwood-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-redwood-500 focus:border-redwood-500"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full redwood-btn py-3"
                    >
                      Subscribe
                    </button>
                    <p className="text-xs text-center text-charcoal-500">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
