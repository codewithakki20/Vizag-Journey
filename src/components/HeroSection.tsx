import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/VizagHero/IMG_6993.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/40 to-ocean-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Vizag
          <span className="block text-sand-300">Journey</span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          A journey from Bilaspur to the pearl city of Andhra Pradesh, capturing moments of beauty, culture, and coastal charm
        </p>
        
        <div
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#photos"
            className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Photos
          </a>
          <a
            href="#videos"
            className="border-2 border-white text-white hover:bg-white hover:text-ocean-900 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Watch Videos
          </a>
          {/* <a
            href="#join"
            className="bg-sand-300 text-ocean-900 font-semibold px-8 py-3 rounded-full hover:bg-sand-200 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Join Now
          </a> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
