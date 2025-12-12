import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Gamepad2, Server } from 'lucide-react';
import { fetchLiveStats } from '../services/mockApi';
import { Stat } from '../types';

const LiveStats: React.FC = () => {
  const [activePlayers, setActivePlayers] = useState(14502);

  useEffect(() => {
    const interval = setInterval(async () => {
      const { activePlayers: newCount } = await fetchLiveStats();
      setActivePlayers(prev => {
        // Smooth interpolation could be done here, but simple jump for mock
        const diff = newCount - prev;
        return prev + Math.ceil(diff * 0.1); 
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats: Stat[] = [
    { id: '1', label: 'Active Players', value: activePlayers, icon: 'users' },
    { id: '2', label: 'Tournaments Won', value: 842, suffix: 'K', icon: 'trophy' },
    { id: '3', label: 'Games Hosted', value: 120, suffix: '+', icon: 'gamepad' },
    { id: '4', label: 'Server Uptime', value: 99.9, suffix: '%', icon: 'server' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return <Users className="w-8 h-8 text-nexus-blue" />;
      case 'trophy': return <Trophy className="w-8 h-8 text-nexus-yellow" />;
      case 'gamepad': return <Gamepad2 className="w-8 h-8 text-nexus-purple" />;
      case 'server': return <Server className="w-8 h-8 text-green-400" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 relative border-y border-white/5 bg-[#080b1e]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-6 rounded-lg text-center relative overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
                {getIcon(stat.icon)}
              </div>
              
              <div className="flex justify-center mb-4 p-3 bg-white/5 rounded-full w-fit mx-auto backdrop-blur-sm shadow-inner">
                {getIcon(stat.icon)}
              </div>
              
              <h3 className="text-4xl font-orbitron font-bold text-white mb-1">
                {stat.value.toLocaleString()}
                <span className="text-nexus-blue text-2xl">{stat.suffix}</span>
              </h3>
              <p className="text-gray-400 font-inter uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
