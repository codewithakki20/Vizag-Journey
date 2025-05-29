import { useState } from 'react';
import { Camera } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Photos', href: '#photos' },
    { name: 'Videos', href: '#videos' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-ocean-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-ocean-600" />
            <span className="text-xl font-bold text-ocean-900">Vizag Journey</span>
          </div>

          {/* Desktop Navigation + Join Now */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-ocean-700 hover:text-ocean-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#join"
              className="bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ocean-700 hover:text-ocean-900 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation + Join Now */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-ocean-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-ocean-700 hover:text-ocean-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#join"
                className="block text-center mt-2 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
