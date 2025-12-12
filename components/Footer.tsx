import React from 'react';
import { Gamepad2, Twitter, Youtube, Twitch, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nexus-darker pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-orbitron font-bold text-white">
              <Gamepad2 className="text-nexus-blue" />
              <span>NEXUS</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The ultimate destination for next-gen gaming experiences. Connect, compete, and conquer.
            </p>
            <div className="flex gap-4">
              {[Twitter, Youtube, Twitch, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-nexus-blue hover:text-nexus-dark transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Browse Games', 'Tournaments', 'Live Streams', 'Community Hub', 'Premium Pass'].map(item => (
                <li key={item}><a href="#" className="hover:text-nexus-blue transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Help Center', 'Status Page', 'Developer API', 'Contact Us', 'Report Issue'].map(item => (
                <li key={item}><a href="#" className="hover:text-nexus-blue transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Licenses'].map(item => (
                <li key={item}><a href="#" className="hover:text-nexus-blue transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 Nexus Gaming Hub. All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
             Mohamed Aboelnaga
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
