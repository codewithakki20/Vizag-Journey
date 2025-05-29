import { useState } from 'react';
import { Video, Film } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  date: string;
  duration: string;
  videoUrl: string;
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 1,
      title: 'Vizag Beach Walk',
      description: 'A peaceful morning walk along the pristine beaches of Vizag',
      thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'RK Beach, Vizag',
      date: 'December 2024',
      duration: '3:45',
      videoUrl: '/VizagVid/WhatsApp Video 2025-05-29 at 17.28.34_b7a58555.mp4',
    },
    {
      id: 2,
      title: 'Araku Valley Journey',
      description: 'Train journey through the scenic Araku Valley with breathtaking views',
      thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Araku Valley',
      date: 'December 2024',
      duration: '5:20',
      videoUrl: '/VizagVid/WhatsApp Video 2025-05-29 at 17.29.02_7c69eb12.mp4',
    },
    {
      id: 3,
      title: 'Borra Caves Exploration',
      description: 'Exploring the mysterious limestone caves and their natural formations',
      thumbnail: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Borra Caves',
      date: 'December 2024',
      duration: '4:15',
      videoUrl: '/VizagVid/WhatsApp Video 2025-05-29 at 17.29.05_474b69ec.mp4',
    },
    {
      id: 4,
      title: 'Local Culture & Traditions',
      description: 'Experiencing the rich tribal culture and traditions of the region',
      thumbnail: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Tribal Village',
      date: 'December 2024',
      duration: '6:30',
      videoUrl: '/VizagVid/WhatsApp Video 2025-05-29 at 17.29.10_12bb491e.mp4',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-ocean-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Film className="h-8 w-8 text-sunset-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-900">Video Gallery</h2>
          </div>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Relive the journey through these immersive video experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                    <Video className="h-8 w-8 text-ocean-600" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ocean-900 mb-2">{video.title}</h3>
                <p className="text-ocean-700 mb-4">{video.description}</p>
                <div className="flex justify-between text-sm text-ocean-600">
                  <span>📍 {video.location}</span>
                  <span>📅 {video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="relative">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[70vh] bg-black"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(null);
                  }}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-ocean-900 mb-2">{selectedVideo.title}</h3>
                <p className="text-ocean-700 mb-4">{selectedVideo.description}</p>
                <div className="flex justify-between text-sm text-ocean-600">
                  <span>📍 {selectedVideo.location}</span>
                  <span>📅 {selectedVideo.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Temporary Video Note */}
        <div className="mt-12 text-center">
          <p className="text-lg text-ocean-700 font-medium animate-pulse">
            📢 These are temporary videos — real video ads coming very soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
