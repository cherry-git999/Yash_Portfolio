import { Camera, Video, ArrowDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-white/10 to-gray-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-400/5 to-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                  <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Yash</span>
                  <span className="block text-white">Creations</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mb-8"></div>
                <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed">
                   Photography & Video Editing
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  Capturing moments and crafting stories through the lens of creativity. 
                  Where vision meets artistry, every frame tells a compelling story.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-white" />
                  <span>Vizag,India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-white" />
                  <span>yashwanthkiran13@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-white" />
                  <span>+919441807265</span>
                </div>
              </div>

              <div className="flex justify-start">
                <button 
                  onClick={() => scrollToSection('photography')}
                  className="bg-gradient-to-r from-white to-gray-300 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore My Work
                </button>
              </div>
            </div>

            {/* Right Content - Service Cards */}
            <div className="space-y-8">
              {/* Photography Card */}
              <div 
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => scrollToSection('photography')}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-white/50 p-8 rounded-2xl shadow-2xl hover:shadow-white/10 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center">
                      <Camera className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">Photography</h3>
                      <p className="text-gray-400 text-sm">Capturing moments</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Professional photography services including portraits, commercial shoots, 
                    and creative sessions. Every shot is crafted with precision and artistic vision.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>• Portraits</span>
                      <span>• Freelance</span>
                      <span>• Creative</span>
                    </div>
                    <ArrowDown className="w-5 h-5 text-white transform rotate-[-45deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Video Editing Card */}
              <div 
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => scrollToSection('video')}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-white/50 p-8 rounded-2xl shadow-2xl hover:shadow-white/10 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-white rounded-xl flex items-center justify-center">
                      <Video className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">Video Editing</h3>
                      <p className="text-gray-400 text-sm">Crafting stories</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Expert video editing and post-production services. From corporate videos 
                    to creative content, bringing your vision to life through compelling storytelling.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>• Corporate</span>
                      <span>• Creative</span>
                      <span>• Freelance</span>
                    </div>
                    <ArrowDown className="w-5 h-5 text-white transform rotate-[-45deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;