import { User, Download } from 'lucide-react';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Creative_Studio_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <User className="w-8 h-8 text-white mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">About</h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-300 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dhquji6xv/image/upload/hero_qphjbf.jpg" 
                  alt="Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-black" />
            </div> */}
            {/* <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-white rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div> */}
          </div>

          {/* Content Section */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-white mb-6">Yashwanth Kiran</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
             I’m an aspiring visual storyteller with a strong interest in photography and video editing. Over the past 2 years, I’ve been learning and experimenting with different styles, developing both my creative eye and technical skills along the way.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
             I enjoy creating clean, visually appealing content that still feels personal and meaningful. My goal is to capture genuine moments and build narratives that connect with people, whether it’s for a brand, an event, or a personal project.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              As a student, I’m constantly growing and exploring new ways to tell stories through visuals, and I approach every project with curiosity, dedication, and a drive to improve.
            </p>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:from-gray-200 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;