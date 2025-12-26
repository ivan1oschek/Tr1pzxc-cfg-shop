
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, ShieldAlert, ChevronRight } from 'lucide-react';

const ConfigCard = ({ title, description, price, link, color, icon: Icon, isPopular }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group h-full`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      <div className="relative h-full bg-[#111] border border-white/5 group-hover:border-white/20 transition-all duration-500 p-10 flex flex-col justify-between overflow-hidden">
        
        {isPopular && (
          <div className="absolute top-0 right-0 bg-pink-600 text-white font-black text-[10px] px-6 py-1 uppercase tracking-widest rotate-45 translate-x-6 translate-y-4 shadow-xl z-20">
            HOT
          </div>
        )}

        <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
          <Icon size={300} strokeWidth={1} />
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-10">
            <div className="w-12 h-[2px] bg-purple-600"></div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-purple-500 text-purple-500" />)}
            </div>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black mb-6 font-['Orbitron'] text-white leading-none">
            {title.split(' ')[0]} <br/> <span className="text-purple-500">{title.split(' ')[1]}</span>
          </h3>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
            {description}
          </p>

          <div className="flex flex-col gap-2 mb-10">
            <div className="flex items-center gap-3 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Updated for 2026
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Funtime Optimized
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-end gap-3 mb-10">
            <span className="text-6xl font-black text-white">{price.split(' ')[1]}</span>
            <span className="text-2xl font-bold text-purple-500 mb-2 uppercase">{price.split(' ')[2]}</span>
          </div>

          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
            className={`w-full py-6 flex items-center justify-between px-8 font-black uppercase tracking-[0.2em] text-xl transition-all shadow-2xl ${
                title.includes('Celestial') 
                ? 'bg-purple-600 hover:bg-white hover:text-black' 
                : 'bg-blue-600 hover:bg-white hover:text-black'
            }`}
          >
            <span className="flex items-center gap-4">
               КУПИТЬ КФГ
            </span>
            <ChevronRight size={28} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const Shop: React.FC = () => {
  return (
    <section id="shop" className="py-32 px-4 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[9rem] font-black font-['Orbitron'] tracking-tighter leading-none mb-6"
            >
              SHOP <span className="text-purple-600">CFG</span>
            </motion.h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em]">Выберите свою сторону доминации</p>
          </div>
          <div className="hidden md:block h-[2px] flex-grow mx-12 bg-white/5"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <ConfigCard 
            title="Celestial Config"
            description="Топовая киллаура и полная оптимизация под Funtime. Этот кфг реально пенит!"
            price="💸 0.1 €"
            link="https://funpay.com/uk/lots/offer?id=60416362"
            color="from-purple-600 to-fuchsia-600"
            icon={Star}
            isPopular={true}
          />
          <ConfigCard 
            title="Nursultan Config"
            description="Максимальная киллаура и лучшая оптимизация. Кфг пенит на любом сервере, особенно Funtime."
            price="💸 0.1 €"
            link="https://funpay.com/uk/lots/offer?id=44354500"
            color="from-blue-600 to-cyan-500"
            icon={ShieldAlert}
          />
        </div>
      </div>
    </section>
  );
};
