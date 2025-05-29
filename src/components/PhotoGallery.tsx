import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const photos: Photo[] = [
    {
      id: 1,
      src: '/VizagImg1/Ramanaidu Film Studios.JPG',
      title: 'Ramanaidu Film Studios',
      description: 'Ramanaidu Film Studios in Visakhapatnam (Vizag) is a film city and production facility located on top of Rishikonda hills, offering views of the Bay of Bengal.',
      location: 'Survey No 336/P, Beemli Beach Road, Timmapuram, Visakhapatnam - 531083',
      date: '24/05/2025',
    },
    {
      id: 2,
      src: '/VizagImg1/Bheemili Beach.JPG',
      title: 'Bheemili Beach',
      description: 'Bheemili Beach is a tranquil beach located 24 km from Visakhapatnam, known for its calm waters and scenic surroundings.',
      location: 'Bhimunipatnam, 24 km from Visakhapatnam',
      date: '24/05/2025',
    },
    {
      id: 3,
      src: '/VizagImg1/Natural rock arch.jpg',
      title: 'Natural Rock Arch',
      description: 'A naturally formed rock arch located at Mangamaripeta Beach, a geological wonder in Vizag.',
      location: 'Mangamaripeta Beach, Visakhapatnam',
      date: '24/05/2025',
    },
    {
      id: 4,
      src: '/VizagImg1/Rushikonda Beach.jpg',
      title: 'Rushikonda Beach',
      description: 'A popular beach in Vizag known for pristine beauty and water sports.',
      location: '8 km from Visakhapatnam city center',
      date: '24/05/2025',
    },
    {
      id: 5,
      src: '/VizagImg1/kailasagiri.jpg',
      title: 'Kailasagiri',
      description: 'A hill-top park offering panoramic views of Vizag and the Bay of Bengal.',
      location: 'Kailasagiri, Visakhapatnam',
      date: '25/05/2025',
    },
    {
      id: 6,
      src: '/VizagImg1/Vizag Zoo Park.jpg',
      title: 'Vizag Zoo Park',
      description: 'Indira Gandhi Zoological Park spans 625 acres in the Seethakonda Reserve Forest.',
      location: 'NH5 Road, Near Old Dairy Farm, Visakhapatnam',
      date: '25/05/2025',
    },
    {
      id: 7,
      src: '/VizagImg1/Tenneti Park.jpg',
      title: 'Tenneti Park',
      description: 'A scenic coastal park with ocean views, ideal for leisure.',
      location: 'Beach Road, Jodugullapalem, Visakhapatnam',
      date: '25/05/2025',
    },
    {
      id: 8,
      src: '/VizagImg1/Sea Harrier Museum.jpg',
      title: 'Sea Harrier Museum',
      description: 'Showcasing the Indian Navy’s Sea Harrier aircraft, inaugurated in 2025.',
      location: 'Beach Road, Pandurangapuram, Visakhapatnam',
      date: '25/05/2025',
    },
    {
      id: 9,
      src: '/VizagImg1/VMRDA Visakha Aircraft Museum.jpg',
      title: 'Visakha Aircraft Museum',
      description: 'Features the decommissioned TU-142 Naval Aircraft, part of Indian naval history.',
      location: 'Dr NTR Beach Rd, Pandurangapuram, Visakhapatnam',
      date: '25/05/2025',
    },
    {
      id: 10,
      src: '/VizagImg1/Ramakrishna Beach.jpg',
      title: 'Ramakrishna Beach (RK)',
      description: 'Popular beach along the Bay of Bengal, great for walks and sunsets.',
      location: 'Pandurangapuram, Visakhapatnam',
      date: '25/05/2025',
    },
    {
      id: 11,
      src: '/VizagImg1/Simhachalam Temple.jpg',
      title: 'Simhachalam Temple',
      description: 'Hindu temple dedicated to Lord Narasimha Swamy, 16 km from Vizag.',
      location: 'Simhachalam Hill, Visakhapatnam',
      date: '26/05/2025',
    },
    {
      id: 12,
      src: '/VizagImg1/Yarada Beach.jpg',
      title: 'Yarada Beach',
      description: 'A secluded beach known for golden sand and peaceful environment.',
      location: '15 km from Visakhapatnam city',
      date: '26/05/2025',
    },
  ];

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedPhoto) return;

    if (e.key === 'Escape') setSelectedPhoto(null);
    if (e.key === 'ArrowRight') {
      const next = (currentIndex + 1) % photos.length;
      setSelectedPhoto(photos[next]);
      setCurrentIndex(next);
    }
    if (e.key === 'ArrowLeft') {
      const prev = (currentIndex - 1 + photos.length) % photos.length;
      setSelectedPhoto(photos[prev]);
      setCurrentIndex(prev);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section id="photos" className="py-20 bg-gradient-to-b from-white to-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-ocean-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-900">Photo Gallery</h2>
          </div>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Capturing the essence of Vizag through these unforgettable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handlePhotoClick(photo, index)}
              onClick={() => handlePhotoClick(photo, index)}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square">
                <img
                  loading="lazy"
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{photo.title}</h3>
                    <p className="text-sm opacity-90">{photo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-ocean-900 mb-2">{selectedPhoto.title}</h3>
                <p className="text-ocean-700 mb-4">{selectedPhoto.description}</p>
                <div className="flex justify-between text-sm text-ocean-600">
                  <span>📍 {selectedPhoto.location}</span>
                  <span>📅 {selectedPhoto.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
