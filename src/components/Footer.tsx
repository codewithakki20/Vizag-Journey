import { Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-sand-300 mr-3" />
            <span className="text-2xl font-bold">Vizag Journey</span>
          </div>
          
          <div className="border-t border-ocean-800 pt-6">
            <p className="text-ocean-500 text-xs mt-2">
              © 2024 Vizag Journey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
