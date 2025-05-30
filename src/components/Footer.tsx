import { Camera, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Photos', to: '/photos' },
    { name: 'About', to: '/about' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/_.ankit_020?igsh=ZjI5d3FzdjJkczh0', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/AnkitPa28322894?s=09', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1ASxtdhqYE', label: 'Facebook' },
  ];

  return (
    <footer className="bg-ocean-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-sand-300" />
              <span className="text-xl font-bold">Vizag Journey</span>
            </div>
            <p className="text-ocean-200 text-sm leading-relaxed">
              A digital memoir capturing the beauty and stories of our journey from Bilaspur to Visakhapatnam.
            </p>
          </div>

          {/* Navigation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-sand-300 mb-4">Explore</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-ocean-200 hover:text-sand-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold text-sand-300 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean-200 hover:text-sand-300 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ocean-800 text-center text-ocean-300 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p>© 2025 Vizag Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;