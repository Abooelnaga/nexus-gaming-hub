import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Compass, MessageCircle } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Fake Video */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-nexus-dark/30 via-nexus-dark/60 to-nexus-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" 
          alt="Gaming Background" 
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-nexus-blue/10 mix-blend-overlay z-0" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2, duration: 1 }}
             className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-nexus-blue/30 bg-nexus-blue/10 text-nexus-blue text-sm font-orbitron tracking-widest uppercase backdrop-blur-md">
              Welcome to the Nexus
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-nexus-blue to-nexus-purple leading-tight drop-shadow-2xl">
            WHERE WORLDS<br />COLLIDE
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-inter font-light">
            Experience the next generation of gaming. Join millions of players in an immersive universe of endless possibilities.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button size="lg" icon={<Play className="w-5 h-5 fill-current" />}>
              Play Now
            </Button>
            <Button variant="outline" size="lg" icon={<Compass className="w-5 h-5" />}>
              Explore Games
            </Button>
            <Button variant="secondary" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
              Join Discord
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-20 text-nexus-blue"
      >
        <div className="w-6 h-10 border-2 border-nexus-blue rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-nexus-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
