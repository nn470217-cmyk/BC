import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
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
    if (page && ['home', 'baccarat', 'slots', 'article', 'fishing', 'sports', 'seo-article', 'ares-strategy', 'thor-strategy'].includes(page)) {
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
      <div className={`absolute -top-12 -right-12 w-40 h-40 bg-${color}/10 rounded-full blur-3xl group-hover:bg-${color}/20 transition-all`}></div>
      <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black gold-text mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8">{desc}</p>
      <div className="inline-flex items-center text-xs font-black tracking-widest text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-all">
        閱讀詳細攻略 <span className="ml-2">➜</span>
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
                <h2 className="text-4xl md:text-6xl font-black mb-6">全台獨家 <span className="gold-text">必勝攻略庫</span></h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                  BC博球秉持誠信開版，不僅提供最高信用額度，更由職業玩家團隊整理深度打法，從新手入門到高階訊號識別，助您在開版後輕鬆掌握致富密碼。
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <StrategyCard 
                  title="百家樂大路詳解" 
                  desc="不只是看顏色！深入解析五路財神路向、莊閒比例算牌法與資金1-3-2-4分配系統。"
                  icon="🃏" 
                  type="baccarat"
                  color="blue"
                />
                <StrategyCard 
                  title="戰神賽特爆分訊號" 
                  desc="獨家解析「吃分、吐分、平穩」三大週期，捕捉賽特眼神閃爍與大倍率符號掉落預兆。"
                  icon="🏺" 
                  type="ares-strategy"
                  color="yellow"
                />
                <StrategyCard 
                  title="雷神索爾補償機制" 
                  desc="掌握掉落式消除的核心邏輯，解析倍率球疊加時機與免費遊戲購買的最佳熱度判斷。"
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
      
      {/* 行動端快速導航 */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a href="https://lin.ee/QmHsUTj" className="flex items-center justify-center gold-gradient text-black font-black py-5 rounded-2xl shadow-[0_15px_40px_rgba(212,175,55,0.4)] animate-bounce-slow text-lg">
           <span className="mr-2">💬</span> 聯繫專員開版 (10分鐘快速核額)
        </a>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
