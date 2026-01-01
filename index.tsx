import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
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
    if (page && ['home', 'baccarat', 'slots', 'ares-strategy', 'thor-strategy', 'sports', 'seo-article'].includes(page)) {
      setCurrentPage(page);
    }
  }, []);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    const newUrl = page === 'home' ? window.location.pathname : `?page=${page}`;
    window.history.pushState({ page }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const StrategyCard = ({ title, desc, icon, type, color }: { title: string, desc: string, icon: string, type: PageType, color: string }) => (
    <div 
      onClick={() => handlePageChange(type)}
      className="glass-card group relative p-8 rounded-[40px] border border-white/5 hover:border-gold/40 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl"
    >
      <div className={`absolute -top-12 -right-12 w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-all`}></div>
      <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black gold-text mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8">{desc}</p>
      <div className="inline-flex items-center text-xs font-black tracking-widest text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-all">
        點擊進入深度教學 ➜
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#040712] selection:bg-gold/30 text-slate-200">
      <Navbar setPage={handlePageChange} currentPage={currentPage} onSectionNav={scrollToSection} />
      
      <main className="pt-20">
        {currentPage === 'home' ? (
          <>
            <Hero onComparisonClick={() => scrollToSection('comparison')} />
            
            <section className="py-24 max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-6">業界最全 <span className="gold-text">職業玩家攻略</span></h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                  BC博球不僅是娛樂平台，更是玩家的技術後盾。我們結合了數千名資深玩家的實戰經驗，整理出全台最精準的投注邏輯，讓您在信用版開額度後，贏得更有把握。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StrategyCard 
                  title="百家樂路單詳解" 
                  desc="不只是看大路！深度解析三珠路、曱甴路連貫性，並教您如何在信用版制度下進行高效風險控制。"
                  icon="🃏" 
                  type="baccarat"
                  color="blue"
                />
                <StrategyCard 
                  title="體育盤口與走地" 
                  desc="掌握水位變動與盤口陷阱。提供美職、中職、NBA 實戰分析，靈活運用信用額度捕捉滾球時機。"
                  icon="⚽" 
                  type="sports"
                  color="green"
                />
                <StrategyCard 
                  title="戰神賽特爆分訊號" 
                  desc="掌握古埃及神明的財富碼！解析眼神閃爍與大倍率符號掉落的週期規律，識別機台吐分精華時段。"
                  icon="🏺" 
                  type="ares-strategy"
                  color="yellow"
                />
                <StrategyCard 
                  title="雷神索爾技巧解析" 
                  desc="獨家解析雷神槌擊的補償機制。掌握連續消除後的加注時機，最大化倍率球的疊加收益。"
                  icon="⚡" 
                  type="thor-strategy"
                  color="blue"
                />
              </div>
            </section>

            <AdSection />
            <Comparison />
            <Process />
          </>
        ) : (
          <GameDetails type={currentPage} />
        )}
      </main>

      <Footer setPage={handlePageChange} />
      
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a href="https://lin.ee/QmHsUTj" className="flex items-center justify-center gold-gradient text-black font-black py-5 rounded-2xl shadow-[0_15px_40px_rgba(212,175,55,0.4)] animate-bounce-slow text-lg">
           💬 立即開版 (10分鐘快速照會)
        </a>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}