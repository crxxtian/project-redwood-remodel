
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-lg mx-auto py-16 px-4">
          <h1 className="text-6xl font-bold mb-4 text-redwood-700">404</h1>
          <p className="text-xl text-charcoal-700 mb-6">Oops! Page not found</p>
          <p className="text-charcoal-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link to="/" className="redwood-btn">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
