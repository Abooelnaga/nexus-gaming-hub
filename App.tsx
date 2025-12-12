import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameShowcase from './components/GameShowcase';
import LiveStats from './components/LiveStats';
import Community from './components/Community';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ParticleBackground from './components/ui/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nexus-dark text-white selection:bg-nexus-blue selection:text-nexus-dark">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <div id="games">
          <GameShowcase />
        </div>
        <div id="stats">
          <LiveStats />
        </div>
        <div id="community">
          <Community />
        </div>
        <div id="news">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
