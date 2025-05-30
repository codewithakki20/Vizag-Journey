import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-ocean-900 mb-4">404</h1>
        <p className="text-xl text-ocean-600 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-sand-300 hover:text-sand-400 underline transition-colors duration-200">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;