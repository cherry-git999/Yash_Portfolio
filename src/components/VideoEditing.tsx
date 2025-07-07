import { useState } from 'react';
import { Video, Play} from 'lucide-react';

const VideoEditing = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Spider-Verse",
      category: "Spidey",
      duration: "0:19",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/spy_blozjk.jpg",
      description: "Every Teenager Dream",
     // stats: { views: "250K", likes: "12K", duration: "3:24" },
      videoFile: "https://res.cloudinary.com/dhquji6xv/video/upload/spy_wlkeab.mp4"
    },
    {
      id: 2,
      title: "Devaratha Raisaar",
      category: "Salaar",
      duration: "0:28",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/pro_odi11c.jpg",
      description: "The guy who also known as Dinosaur",
     // stats: { views: "180K", likes: "8.5K", duration: "2:15" },
      videoFile: "https://res.cloudinary.com/dhquji6xv/video/upload/pro_xegm9q.mp4"
    },
    {
      id: 3,
      title: "AICTE Event",
      category: "Andhra University",
      duration: "1:06",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/au_pbryxt.jpg",
      description: "Paradise of Students",
    //  stats: { views: "420K", likes: "25K", duration: "4:02" },
      videoFile: "https://res.cloudinary.com/dhquji6xv/video/upload/au_x1zog2.mp4"
    },
    {
      id: 4,
      title: "Terra",
      category: "Earth",
      duration: "0:13",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/earth_enpbam.jpg",
      description: "The place that is well known as Home",
     // stats: { views: "95K", likes: "4.2K", duration: "1:45" },
      videoFile: "https://res.cloudinary.com/dhquji6xv/video/upload/earth_lzrk4f.mp4"
    },
    {
      id: 5,
      title: "Mumbai",
      category: "Maharashtra",
      duration: "0:31",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/mum_hakilk.jpg",
      description: "City of Dreams",
     // stats: { views: "1.2M", likes: "67K", duration: "8:30" },
      videoFile: "https://res.cloudinary.com/dhquji6xv/video/upload/mum_d2pgbp.mp4"
    },
    {
      id: 6,
      title: "Bharat Mata",
      category: "India",
      duration: "1:16",
      thumbnail: "https://res.cloudinary.com/dhquji6xv/image/upload/ind_bxlf9y.jpg",
      description: "Unity in Diversity - A Celebration of India's Rich Heritage",
     // stats: { views: "340K", likes: "18K", duration: "2:48" },
      videoFile: "https://res.cloudinary.com/dhquji6xv/video/upload/ind_kvlnby.mp4"
    }
  ];

  const skills = [
    { name: "Adobe Premiere Pro", level: 98 },
    { name: "After Effects", level: 95 },
    { name: "DaVinci Resolve", level: 92 },
    { name: "Cap Cut Pro", level: 88 },
    { name: "Graphics Deginer", level: 90 },
    { name: "Color Grading", level: 94 }
  ];

  const handleVideoPlay = (project: any) => {
    setSelectedVideo(project.videoFile);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="video" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Video className="w-8 h-8 text-white mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Video Editing</h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting compelling stories through the art of editing. Every cut, transition, and effect 
            serves the narrative - bringing ideas to life through visual storytelling.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-white/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-gray-400 to-white h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-white/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleVideoPlay(project)}
                    className="w-16 h-16 bg-gradient-to-r from-gray-300 to-white rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-200"
                  >
                    <Play className="w-6 h-6 text-black ml-1" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {project.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-gradient-to-r from-gray-300 to-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  {/* <div className="flex items-center space-x-2 text-gray-500">
                  {<Award className="w-4 h-4" /> }
                    <Clock className="w-4 h-4" />
                    <Users className="w-4 h-4" />
                  </div> */}
                </div>
                
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.stats.views} views</span>
                  <span>{project.stats.likes} likes</span>
                  <span>{project.stats.duration}</span>
                </div> */}

                {/* Action Button */}
                <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-700">
                  <button
                    onClick={() => handleVideoPlay(project)}
                    className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <video
                src={selectedVideo}
                className="w-full h-full"
                controls
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoEditing;