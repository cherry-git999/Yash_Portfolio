import { useState } from 'react';
import { Menu, X, Camera, Video, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
              <img src="https://res.cloudinary.com/dhquji6xv/image/upload/YL_m2geb5.png" alt="Logo" className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Yash Creations
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <span>Home</span>
            </a>
            <a href="#photography" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>Photography</span>
            </a>
            <a href="#video" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Video Editing</span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>About</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <span>Home</span>
              </a>
              <a href="#photography" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Photography</span>
              </a>
              <a href="#video" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <Video className="w-4 h-4" />
                <span>Video Editing</span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>About</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;