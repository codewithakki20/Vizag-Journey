
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import VideoGallery from '@/components/VideoGallery';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PhotoGallery />
      <VideoGallery />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
