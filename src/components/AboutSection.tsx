import { Camera, Image as ImageIcon } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Camera, label: 'Photos Captured', value: '150+' },
    { icon: ImageIcon, label: 'Locations Visited', value: '30+' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-50 to-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-900 mb-6">
              About This Journey
            </h2>
            <p className="text-xl text-ocean-700 mb-6 leading-relaxed">
              A memorable trip from <strong>Bilaspur to Vizag</strong> with college friends—this journey was more 
              than just travel; it was a celebration of friendship, youth, and shared discovery.
            </p>
            <p className="text-lg text-ocean-600 mb-6 leading-relaxed">
              From golden sunrises at <strong>RK Beach</strong> to the spiritual serenity of <strong>Simhachalam Temple</strong>, and the lush 
              landscapes of <strong>Araku Valley</strong>, Vizag offered breathtaking experiences. We explored the depths of 
              <strong>Borra Caves</strong>, strolled the <strong>Kailasagiri Hill Park</strong>, and felt awe at the Submarine Museum.
            </p>
            <p className="text-lg text-ocean-600 mb-8 leading-relaxed">
              This digital memoir captures the laughter, scenic wonders, and unforgettable stories from this journey. 
              Come, relive the moments with us!
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-sand-300" />
                  <div className="text-2xl font-bold text-ocean-900">{stat.value}</div>
                  <div className="text-sm text-ocean-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img
                src="/VizagAbout/VizagAbout .jpg"
                alt="Vizag Landscape"
                className="rounded-lg shadow-2xl"
                onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/30 to-transparent rounded-lg"></div>
            </div>

            <div className="absolute -top-4 -right-4 bg-sand-400 text-ocean-900 p-4 rounded-lg shadow-lg animate-wave">
              <Camera className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;