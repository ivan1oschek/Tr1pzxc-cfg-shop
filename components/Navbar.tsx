
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-lg border-b border-white/5"
    >
      <div className="font-['Orbitron'] text-2xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-fuchsia-600 bg-clip-text text-transparent">
        TR1PZXC
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
        <a href="#hero" className="hover:text-purple-400 transition-colors">Главная</a>
        <a href="#about" className="hover:text-purple-400 transition-colors">Обо мне</a>
        <a href="#shop" className="hover:text-purple-400 transition-colors">Конфиги</a>
      </div>
      <a 
        href="#shop"
        className="px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500/50 text-purple-300 text-xs font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all duration-300"
      >
        Магазин
      </a>
    </motion.nav>
  );
};
