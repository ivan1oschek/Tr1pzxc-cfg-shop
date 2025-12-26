
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Shop } from './components/Shop';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-['Inter'] overflow-x-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Shop />
      </main>
      <footer className="relative z-10 py-10 text-center text-gray-500 text-sm border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <p>&copy; 2026 Tr1pzxc. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
