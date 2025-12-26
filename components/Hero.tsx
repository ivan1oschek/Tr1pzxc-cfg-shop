
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Target, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Glow only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-purple-600/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="text-center max-w-7xl z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: y1 }}
        >
          <h1 className="font-['Orbitron'] text-[6rem] md:text-[14rem] font-[900] mb-0 tracking-[0.15em] leading-none neon-text bg-gradient-to-b from-white via-purple-300 to-purple-600 bg-clip-text text-transparent italic select-none">
            TR1PZXC
          </h1>
        </motion.div>
        
        <div className="relative mt-12 mb-16">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative z-10 inline-block px-12 py-3 bg-black border-x-4 border-purple-500 text-purple-400 font-black text-xl md:text-3xl uppercase tracking-[0.6em] skew-x-[-15deg]"
          >
            TT блогер по софтам
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 text-2xl md:text-4xl mb-20 max-w-5xl mx-auto font-black uppercase tracking-tighter italic"
        >
          TR1PZXC — БЛОГЕР У КОТОРОГО <br/>
          <span className="text-white bg-purple-900/40 px-4 italic">САМЫЕ ЛУЧШИЕ И ДЕШЕВЫЕ КФГ</span>
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="flex items-center gap-4 px-10 py-6 bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 group-hover:w-full group-hover:opacity-10 transition-all duration-300"></div>
            <Zap className="text-purple-500 w-8 h-8" />
            <span className="text-sm font-black text-gray-200 uppercase tracking-[0.2em]">Профессиональные конфиги под Funtime</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="flex items-center gap-4 px-10 py-6 bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-pink-600 group-hover:w-full group-hover:opacity-10 transition-all duration-300"></div>
            <Target className="text-pink-500 w-8 h-8" />
            <span className="text-sm font-black text-gray-200 uppercase tracking-[0.2em]">Максимальный буст PvP</span>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1, letterSpacing: "0.4em" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-24 py-10 bg-purple-600 text-white font-black text-4xl uppercase tracking-widest overflow-hidden transition-all duration-500 shadow-[0_0_60px_rgba(168,85,247,0.5)] border-2 border-white/10"
        >
          <span className="relative z-10 flex items-center gap-5">
            <MousePointer2 size={40} />
            КУПИТЬ КОНФИГ
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-40"></div>
        </motion.button>
      </div>
    </section>
  );
};
