
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
      className="glass-card group relative p-8 rounded-[2.5rem] border border-white/5 hover:border-gold/40 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl active:scale-95"
    >
      <div className={`absolute -top-12 -right-12 w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-all`}></div>
      <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black gold-text mb-4 italic">{title}</h3>
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
            
            <section className="py-24 max-w-7xl mx-auto px-4 relative">
               {/* 裝飾光暈 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] pointer-events-none"></div>
              
              <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-6xl font-black mb-6 italic">全台首選 <span className="gold-text">博弈優質品牌</span></h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed font-medium">
                  BC博球不僅提供專業的信用版開版服務，更是玩家的實戰教練。我們匯集2026最新攻略，帶您深度解析機台規律與走地心法。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StrategyCard 
                  title="百家樂必勝攻略" 
                  desc="全台首創五路分析，深度解析看路技巧與資金管理。信用版玩家必學的高勝率打法。"
                  icon="🃏" 
                  type="baccarat"
                  color="blue"
                />
                <StrategyCard 
                  title="體育運彩分析" 
                  desc="掌握美金盤口、走地滾球技巧。BC博球信用版提供最穩定、最高額度的賽事投注環境。"
                  icon="⚽" 
                  type="sports"
                  color="green"
                />
                <StrategyCard 
                  title="戰神賽特爆分" 
                  desc="2026 熱門電子機台攻略。解析賽特爆分週期與眼神訊號，掌握信用版上分關鍵。"
                  icon="🏺" 
                  type="ares-strategy"
                  color="yellow"
                />
                <StrategyCard 
                  title="雷神索爾技巧" 
                  desc="雷神索爾爆分攻略，教您捕捉雷擊補償訊號。領先全台的高勝率電子遊戲打法。"
                  icon="⚡" 
                  type="thor-strategy"
                  color="blue"
                />
              </div>
            </section>

            <AdSection />
            <Comparison />
            <Process />

            {/* SEO 強化內容區塊 */}
            <section className="py-24 max-w-7xl mx-auto px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0f1e]/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-black gold-text mb-8 text-center italic">為什麼專業玩家一致推薦 BC博球 信用版？</h2>
                <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  <div className="glass-card p-8 rounded-[2rem] border border-white/5">
                    <p className="mb-4">
                      在 2026 年的<strong>台灣娛樂城</strong>市場，安全性與隱私是玩家最在乎的事。BC博球作為資深<strong>信用版</strong>品牌，我們捨棄了現金版繁雜的儲值提款流程，改採「先審核額度、周日結算、周一對匯」的模式。
                    </p>
                    <p>
                      這種模式不僅免去了儲值延遲的風險，更能讓玩家在賽事高峰期（如 NBA、足球歐冠）靈活運用信用額度，實現真正的博弈自由。
                    </p>
                  </div>
                  <div className="glass-card p-8 rounded-[2rem] border border-white/5">
                    <p className="mb-4">
                      誠信是 BC博球 立足十年的基石。我們的<strong>娛樂城推薦</strong>名聲來自於每一筆準時到帳的對匯，以及對玩家資料的軍規級保護。
                    </p>
                    <p>
                      無論您是追求百家樂的路單精準，還是熱衷於戰神賽特的倍率堆疊，在 BC博球 都能找到最公平的環境。立即諮詢專員，獲取您的專屬遊玩額度。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <GameDetails type={currentPage} />
        )}
      </main>

      <Footer setPage={handlePageChange} />
      
      {/* 行動版底部懸浮按鈕 - 優化質感 */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a href="https://lin.ee/QmHsUTj" className="flex items-center justify-center gold-gradient text-black font-black py-5 rounded-[2rem] shadow-[0_20px_60px_rgba(212,175,55,0.4)] animate-bounce-slow text-xl active:scale-90 transition-transform">
           💬 立即開版 (專人10分鐘照會)
        </a>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
