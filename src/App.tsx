import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="min-h-screen bg-ocean-50">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Gallery />
              <AboutSection />
            </>
          }
        />
        <Route path="/photos" element={<Gallery />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;