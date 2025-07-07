import { Camera, Video, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
                 <img src="https://res.cloudinary.com/dhquji6xv/image/upload/YL_m2geb5.png" alt="Logo" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Yash Creations</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Professional photography and video editing services. Creating compelling visual stories 
              that connect with audiences and achieve your goals.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-500">
                <Camera className="w-4 h-4" />
                <span className="text-sm">Photography</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Video className="w-4 h-4" />
                <span className="text-sm">Video Editing</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#photography" className="text-gray-400 hover:text-white transition-colors duration-300">Photography</a></li>
              <li><a href="#video" className="text-gray-400 hover:text-white transition-colors duration-300">Video Editing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Yash Creations. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-white fill-current" />
              <span>for Yash Creations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;