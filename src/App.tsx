import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Photography from './components/Photography';
import VideoEditing from './components/VideoEditing';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      {showGallery ? (
        <Gallery onClose={() => setShowGallery(false)} />
      ) : (
        <>
          <Hero />
          <Photography onViewGallery={() => setShowGallery(true)} />
          <VideoEditing />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;