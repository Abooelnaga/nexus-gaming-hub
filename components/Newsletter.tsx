import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../services/mockApi';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
        setStatus('error');
        setMessage('You must agree to the terms.');
        return;
    }
    
    setStatus('loading');
    
    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(response.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong.');
    }
  };

  return (
    <section className="py-20 relative">
        <div className="absolute inset-0 bg-nexus-blue/5 skew-y-3 transform origin-bottom-right z-0 pointer-events-none" />
        
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-nexus-darker to-[#0F1229] border border-nexus-blue/20 rounded-2xl p-8 md:p-12 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-nexus-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
           
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
               <h2 className="text-3xl font-orbitron font-bold mb-2 text-white">
                 UNLOCK <span className="text-nexus-blue">EXCLUSIVE</span> LOOT
               </h2>
               <p className="text-gray-400">
                 Subscribe to get early access to beta tests, exclusive in-game rewards, and the latest Nexus news.
               </p>
            </div>
            
            <div className="flex-1 w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'success'}
                    className="w-full bg-nexus-dark/50 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-nexus-blue focus:ring-1 focus:ring-nexus-blue transition-all text-white placeholder-gray-500"
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'loading' || status === 'success'}
                    className="absolute right-2 top-2 bottom-2 bg-nexus-blue text-nexus-dark font-bold px-6 rounded hover:bg-white transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-nexus-dark border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <Send size={18} />
                    )}
                  </button>
                </div>
                
                <div className="flex items-start gap-2">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      checked={agreed} 
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 bg-nexus-dark border-white/20 rounded focus:ring-nexus-blue text-nexus-blue"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-500 cursor-pointer select-none">
                        I agree to receive marketing communications from Nexus Gaming Hub. I understand I can unsubscribe at any time.
                    </label>
                </div>

                <AnimatePresence>
                    {status !== 'idle' && status !== 'loading' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`flex items-center gap-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                        >
                            {status === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
