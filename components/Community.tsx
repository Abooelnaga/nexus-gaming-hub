import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  const avatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026302d",
    "https://i.pravatar.cc/150?u=a042581f4e29026703d",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-nexus-purple/20 text-nexus-purple border border-nexus-purple/30 rounded text-xs font-bold tracking-widest uppercase">
            Community Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            JOIN THE <span className="text-nexus-purple">SQUAD</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Connect with elite gamers, participate in weekly tournaments, and share your greatest moments. The Nexus community is waiting for you.
          </p>
          
          <div className="flex items-center gap-4 py-4">
            <div className="flex -space-x-4">
              {avatars.map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-2 border-nexus-dark" 
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-white block">12,000+ Online</span>
              <span className="text-nexus-blue">Ready to queue</span>
            </div>
          </div>

          <Button variant="secondary" icon={<MessageCircle />}>
            Join Discord Server
          </Button>
        </motion.div>

        {/* Right Content - Mock Discord Widget */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <div className="bg-[#2f3136] rounded-xl overflow-hidden shadow-2xl border border-[#202225]">
            <div className="bg-[#202225] p-4 flex items-center justify-between border-b border-black/20">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-nexus-blue rounded-full flex items-center justify-center text-nexus-dark font-bold">N</div>
                 <span className="font-bold text-white">Nexus Official</span>
              </div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                4,291 Online
              </div>
            </div>
            <div className="p-4 space-y-4 max-h-[300px] overflow-hidden relative">
               {/* Mock Messages */}
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="flex gap-3 animate-pulse-fast" style={{ animationDelay: `${i * 1.5}s`, animationDuration: '3s', animationFillMode: 'forwards' }}>
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0" />
                    <div className="space-y-2 w-full">
                       <div className="h-3 w-24 bg-gray-600 rounded"></div>
                       <div className="h-3 w-full bg-gray-700 rounded opacity-60"></div>
                    </div>
                 </div>
               ))}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2f3136] to-transparent pointer-events-none"></div>
            </div>
            <div className="p-4 bg-[#292b2f]">
               <button className="w-full py-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium rounded transition-colors">
                  Connect Account
               </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Community;
