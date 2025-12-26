
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Code2, Users, Rocket, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    { icon: <Code2 />, title: "Оптимизация", text: "Все настройки выкручены на максимум FPS и стабильность. Никаких дропов в замесах." },
    { icon: <Users />, title: "Тесты", text: "Конфиги тестируются лично мной в реальных баталиях на Funtime каждый день." },
    { icon: <Rocket />, title: "Доминация", text: "С моими КФГ ты забудешь, что такое проигрывать. Стань королем сервера." }
  ];

  return (
    <section id="about" className="py-32 px-4 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.05)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-6"
          >
            <Terminal className="text-purple-600" />
            <span className="text-purple-600 font-black uppercase tracking-[0.8em] text-sm">SYSTEM.INIT</span>
          </motion.div>
          <h2 className="text-7xl md:text-9xl font-black font-['Orbitron'] leading-[0.9] tracking-tighter">
            OVERRIDE <br/> <span className="text-purple-600">LIMITS.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-6 text-gray-300 text-2xl md:text-4xl leading-tight font-black uppercase italic">
              <p className="border-l-8 border-purple-600 pl-10 py-2">
                TR1PZXC — БЛОГЕР У КОТОРОГО <span className="text-white">САМЫЕ ЛУЧШИЕ И ДЕШЕВЫЕ КФГ</span>. 
              </p>
              <p className="pl-12 opacity-80 text-xl md:text-2xl font-light normal-case">
                Мои настройки — это не просто конфиги, это чистая математика победы. Каждая деталь отточена для доминации на проекте Funtime.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 pt-8 max-w-xs">
              <div className="bg-white/5 p-6 border-l-2 border-pink-500">
                <div className="text-4xl font-black text-white mb-2 font-['Orbitron']">100%</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Funtime Bypass</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-none bg-white/[0.02] border border-white/10 hover:border-purple-500 hover:bg-purple-600 transition-all duration-500"
              >
                <div className="flex gap-8 items-center">
                  <div className="p-5 bg-purple-600/20 text-purple-500 group-hover:bg-white group-hover:text-purple-600 transition-all">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2 text-white group-hover:text-white uppercase tracking-tighter">{feature.title}</h3>
                    <p className="text-gray-500 group-hover:text-white/80 text-lg font-medium">{feature.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
