import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Process from './components/Process';
import AdSection from './components/AdSection';
import Footer from './components/Footer';
import GameDetails from './components/GameDetails';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') as PageType;
    if (page && ['home', 'baccarat', 'slots', 'fishing', 'sports', 'seo-article'].includes(page)) {
      setCurrentPage(page);
    }
  }, []);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    const newUrl = page === 'home' ? window.location.pathname : `?page=${page}`;
    window.history.pushState({ page }, '', newUrl);
    window.scrollTo(0, 0);
  };

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      handlePageChange('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const GameCard = ({ title, icon, type }: { title: string, icon: string, type: PageType }) => (
    <div 
      onClick={() => handlePageChange(type)}
      className="glass-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group cursor-pointer text-center"
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-black gold-text">{title}</h3>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar setPage={handlePageChange} currentPage={currentPage} onSectionNav={scrollToSection} />
      
      <main className="pt-20">
        <div className="bg-slate-900 border-b border-white/5 py-2.5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex items-center">
            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-black mr-4">公告</span>
            <div className="text-slate-400 text-sm font-medium animate-marquee whitespace-nowrap">
              歡迎來到 BC博球 信用門戶。誠信經營，開版請聯繫專員，即刻領取 5000 體驗金。
            </div>
          </div>
        </div>

        {currentPage === 'home' ? (
          <>
            <Hero onComparisonClick={() => scrollToSection('comparison')} />
            <AdSection />
            <section className="py-20 max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GameCard title="百家樂大路" icon="🃏" type="baccarat" />
                <GameCard title="電子爆分機" icon="🎰" type="slots" />
                <GameCard title="為何選信用版" icon="📈" type="seo-article" />
              </div>
            </section>
            <Comparison />
            <Process />
          </>
        ) : (
          <GameDetails type={currentPage} />
        )}
      </main>

      <Footer setPage={handlePageChange} />
      
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-black/90 backdrop-blur-md z-50">
        <a href="https://lin.ee/QmHsUTj" className="block w-full gold-gradient text-black font-black py-4 rounded-xl text-center">
          10分鐘快速開版
        </a>
      </div>
    </div>
  );
};

export default App;