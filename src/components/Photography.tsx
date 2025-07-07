import React, { useState } from 'react';
import { Camera, Eye, Heart, Star, Download, X, ArrowLeft, ArrowRight } from 'lucide-react';

interface PhotographyProps {
  onViewGallery: () => void;
}

const Photography: React.FC<PhotographyProps> = ({ }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const photos = [
    {
      id: 1,
      title: "Aesthetic Yellow Light",
      category: "Lab",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/1_cfoysm.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/1_cfoysm.jpg",
      description: "Capturing the experimental essence of modern photography with a focus on light and composition",
      stats: { views: "45K", likes: "2.1K", downloads: "340" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/1_cfoysm.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/1_cfoysm.jpg",
      camera: "Canon EOS R5",
      lens: "24-70mm f/2.8",
      settings: "f/8, 1/125s, ISO 200"
    },
    {
      id: 2,
      title: "Beatiful butterfly",
      category: "Macro",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/2_nnaktj.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/2_nnaktj.jpg",
      description: "A close-up exploration of nature's beauty - macro photography at its finest",
      stats: { views: "62K", likes: "3.8K", downloads: "520" },
     highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/2_nnaktj.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/2_nnaktj.jpg",
      camera: "Sony A7R IV",
      lens: "85mm f/1.4",
      settings: "f/2.8, 1/160s, ISO 100"
    },
    {
      id: 3,
      title: "Random Bicycle",
      category: "Street",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/3_cauylm.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/3_cauylm.jpg",
      description: "A glimpse into urban life - capturing the essence of everyday moments through street photography",
      stats: { views: "38K", likes: "1.9K", downloads: "280" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/3_cauylm.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/3_cauylm.jpg",
      camera: "Nikon D850",
      lens: "14-24mm f/2.8",
      settings: "f/11, 1/60s, ISO 64"
    },
    {
      id: 4,
      title: "Moon",
      category: "Space",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/4_nd2ji1.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/4_nd2ji1.jpg",
      description: "A stunning capture of the moon's surface, showcasing the intricate details and textures",
      stats: { views: "71K", likes: "4.2K", downloads: "650" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/4_nd2ji1.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/4_nd2ji1.jpg",
      camera: "Fujifilm X-T4",
      lens: "35mm f/1.4",
      settings: "f/5.6, 1/250s, ISO 400"
    },
    {
      id: 5,
      title: "A Good FRIEND",
      category: "Animal",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/5_dtse3c.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/5_dtse3c.jpg",
      description: "A heartwarming moment captured with a loyal companion - pet photography that tells a story",
      stats: { views: "89K", likes: "5.7K", downloads: "890" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/5_dtse3c.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/5_dtse3c.jpg",
      camera: "Canon EOS R6",
      lens: "70-200mm f/2.8",
      settings: "f/4, 1/200s, ISO 160"
    },
    {
      id: 6,
      title: "Nature Through the Lens",
      category: "Street",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/6_fnycus.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/6_fnycus.jpg",
      description: "Exploring the beauty of nature through the lens - a collection of serene landscapes and vibrant colors",
      stats: { views: "54K", likes: "2.8K", downloads: "420" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/6_fnycus.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/6_fnycus.jpg",
      camera: "Leica Q2",
      lens: "28mm f/1.7",
      settings: "f/8, 1/125s, ISO 320"
    },
    {
      id: 7,
      title: "Fram Landscape",
      category: "Natuere",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/7_giidf1.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/7_giidf1.jpg",
      description: "Capturing the essence of a serene landscape - a blend of natural beauty and artistic vision",
      stats: { views: "45K", likes: "2.1K", downloads: "340" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/7_giidf1.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/7_giidf1.jpg",
      camera: "Canon EOS R5",
      lens: "24-70mm f/2.8",
      settings: "f/8, 1/125s, ISO 200"
    }
    ,
    {
      id: 8,
      title: "Sunsent at the Beach",
      category: "Beach",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/8_larcrz.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/8_larcrz.jpg",
      description: "A breathtaking sunset captured at the beach - a moment of tranquility and natural beauty",
      stats: { views: "45K", likes: "2.1K", downloads: "340" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/8_larcrz.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/8_larcrz.jpg",
      camera: "Canon EOS R5",
      lens: "24-70mm f/2.8",
      settings: "f/8, 1/125s, ISO 200"
    }
    ,
    {
      id: 9,
      title: "Trees in the Forest",
      category: "Forest",
      image: "https://res.cloudinary.com/dhquji6xv/image/upload/9_v7ooub.jpg",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/9_v7ooub.jpg",
      description: "A serene capture of trees in the forest - showcasing the beauty of nature and the tranquility it brings",
      stats: { views: "45K", likes: "2.1K", downloads: "340" },
      highResUrl: "https://res.cloudinary.com/dhquji6xv/image/upload/9_v7ooub.jpg",
      localFile: "https://res.cloudinary.com/dhquji6xv/image/upload/9_v7ooub.jpg",
      camera: "Canon EOS R5",
      lens: "24-70mm f/2.8",
      settings: "f/8, 1/125s, ISO 200"
    }
  ];

  const handlePhotoView = (photo: any) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIndex]);
  };

  const handleDownload = (photo: any) => {
    const link = document.createElement('a');
    link.href = photo.highResUrl;
    link.download = `${photo.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="photography" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 text-white mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Photography</h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Through careful composition and lighting, I capture moments that tell compelling stories. 
            Each photograph is crafted with attention to detail and artistic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-white/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* View Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handlePhotoView(photo)}
                    className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-200"
                  >
                    <Eye className="w-6 h-6 text-black" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-300 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {photo.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Eye className="w-4 h-4" />
                    <Heart className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-2">{photo.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{photo.description}</p>
                
                {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{photo.stats.views} views</span>
                  <span>{photo.stats.likes} likes</span>
                  <span>{photo.stats.downloads} downloads</span>
                </div> */}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <button
                    onClick={() => handlePhotoView(photo)}
                    className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">View Photo</span>
                  </button>
                  <button
                    onClick={() => handleDownload(photo)}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                  <span className="text-sm">Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          {/* <button 
            onClick={onViewGallery}
            className="bg-gradient-to-r from-white to-gray-300 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Gallery
          </button> */}
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closePhotoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedPhoto.highResUrl}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-300 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedPhoto.category}
                  </span>
                  <button 
                    onClick={() => handleDownload(selectedPhoto)}
                    className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download</span>
                  </button>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                <p className="text-gray-300 mb-3">{selectedPhoto.description}</p>
                
                {/* Camera Info */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                  <div>
                    <span className="text-gray-500">Camera:</span> {selectedPhoto.camera}
                  </div>
                  <div>
                    <span className="text-gray-500">Lens:</span> {selectedPhoto.lens}
                  </div>
                  <div>
                    <span className="text-gray-500">Settings:</span> {selectedPhoto.settings}
                  </div>
                </div>
                 */}
                {/* Stats */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  {/* <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span>{selectedPhoto.stats.views} views</span>
                    <span>{selectedPhoto.stats.likes} likes</span>
                    <span>{selectedPhoto.stats.downloads} downloads</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;