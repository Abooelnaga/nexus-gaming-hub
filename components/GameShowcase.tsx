import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Game } from '../types';
import { Star, Users, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const games: Game[] = [
  { id: '1', title: 'Cyber Drift', category: 'Racing', rating: 4.8, players: '1.2M', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Aether Chronicles', category: 'RPG', rating: 4.9, players: '2.5M', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Neon Warfare', category: 'Action', rating: 4.7, players: '850K', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Void Strategy', category: 'Strategy', rating: 4.6, players: '500K', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Starborne', category: 'Sci-Fi', rating: 4.9, players: '3M', image: 'https://images.unsplash.com/photo-1614728853913-1e22ba818c8c?q=80&w=800&auto=format&fit=crop' },
];

const GameShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [focusedIndex, setFocusedIndex] = useState(2);

  const categories = ['All', 'Action', 'RPG', 'Strategy', 'Racing', 'Sci-Fi'];
  
  const filteredGames = activeCategory === 'All' 
    ? games 
    : games.filter(g => g.category === activeCategory);

  const handleNext = () => {
    setFocusedIndex((prev) => (prev + 1) % filteredGames.length);
  };

  const handlePrev = () => {
    setFocusedIndex((prev) => (prev - 1 + filteredGames.length) % filteredGames.length);
  };

  return (
    <section className="py-20 bg-nexus-darker relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexus-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-nexus-blue">ELITE</span> GAMES
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setFocusedIndex(0); }}
                className={`px-6 py-2 rounded-full font-orbitron text-sm transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-nexus-blue text-nexus-darker font-bold shadow-[0_0_15px_rgba(0,212,255,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Carousel Simulation */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode='popLayout'>
            {filteredGames.map((game, index) => {
              // Calculate offset relative to focused index
              // We need circular indexing visual logic here, simplified for this demo to just show neighbors
              let offset = index - focusedIndex;
              // Adjust for circular wraparound effect in logic if we wanted infinite scroll, 
              // but for simplicity in this prompt constraints, we stick to simple centered list logic.
              // To make it look "good" without complex circular math, we just render centered index prominently.
              
              const isActive = index === focusedIndex;
              const isPrev = index === focusedIndex - 1;
              const isNext = index === focusedIndex + 1;
              
              // Only render active and immediate neighbors for the mock 3D effect
              if (Math.abs(offset) > 1 && !(focusedIndex === 0 && index === filteredGames.length -1) && !(focusedIndex === filteredGames.length -1 && index === 0)) {
                 // return null; // Or render hidden
              }

              // Simple coverflow math
              const xOffset = offset * 320; 
              const scale = isActive ? 1.1 : 0.8;
              const rotateY = isActive ? 0 : offset > 0 ? -25 : 25;
              const zIndex = isActive ? 10 : 10 - Math.abs(offset);
              const opacity = Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.5;
              const blur = isActive ? '0px' : '4px';

              return (
                <motion.div
                  key={game.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    x: isActive ? 0 : offset > 0 ? '60%' : '-60%',
                    scale: isActive ? 1 : 0.8,
                    zIndex: isActive ? 10 : 5,
                    opacity: isActive ? 1 : 0.4,
                    filter: `blur(${isActive ? 0 : 4}px) brightness(${isActive ? 1 : 0.5})`,
                    rotateY: isActive ? 0 : offset > 0 ? -15 : 15
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[300px] md:w-[350px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl cursor-pointer bg-nexus-dark border border-white/10"
                  onClick={() => setFocusedIndex(index)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative h-full w-full group">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nexus-darker via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-nexus-blue/20 text-nexus-blue text-xs font-bold rounded uppercase border border-nexus-blue/20">{game.category}</span>
                        <div className="flex items-center gap-1 text-nexus-yellow text-xs">
                           <Star size={12} fill="currentColor" /> {game.rating}
                        </div>
                      </div>
                      <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-1 text-gray-400 text-sm">
                           <Users size={14} /> {game.players}
                         </div>
                         <motion.button 
                            whileHover={{ x: 5 }}
                            className="text-nexus-blue hover:text-white transition-colors"
                         >
                            <ArrowRight />
                         </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
            <button onClick={handlePrev} className="p-3 rounded-full bg-white/5 hover:bg-nexus-blue/20 border border-white/10 transition-all">
                <ArrowRight className="rotate-180 w-6 h-6 text-white" />
            </button>
             <button onClick={handleNext} className="p-3 rounded-full bg-white/5 hover:bg-nexus-blue/20 border border-white/10 transition-all">
                <ArrowRight className="w-6 h-6 text-white" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default GameShowcase;
