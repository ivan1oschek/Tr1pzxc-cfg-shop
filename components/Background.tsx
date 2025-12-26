
import React from 'react';
import { motion } from 'framer-motion';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050505]"></div>
      
      {/* Dynamic Energy Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-purple-600/20 blur-[200px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.5, 1, 1.5],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -bottom-[30%] -left-[20%] w-[1200px] h-[1200px] bg-pink-900/10 blur-[250px] rounded-full"
      />

      {/* Extreme Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Grain/Noise Layer */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay"></div>
      
      {/* Side Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80"></div>
    </div>
  );
};
