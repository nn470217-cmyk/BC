
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

  // 監聽分頁切換，確保每次換頁都回到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    // 移除 window.history.pushState 以避免在沙盒環境中發生 SecurityError
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

  const IntroCard = ({ title, icon, type, color, desc }: { title: string, icon: string, type: PageType, color: string, desc: string }) => (
    <div 
      onClick={() => handlePageChange(type)}
      className="glass-card group relative p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-gold/40 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl active:scale-95"
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${color}-500/10 rounded-full blur-2xl group-hover:bg-${color}-500/20 transition-all`}></div>
      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-gold transition-colors leading-none">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{desc}</p>
      <div className="text-[10px] font-black tracking-widest text-gold opacity-60 group-hover:opacity-100 uppercase border-b border-gold/20 pb-1 w-fit">查看介紹 ➔</div>
    </div>
  );

  const StrategyCard = ({ title, type, desc, imageUrl }: { title: string, type: PageType, desc: string, imageUrl: string }) => (
    <div 
      onClick={() => handlePageChange(type)}
      className="group relative h-80 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl active:scale-95 transition-all duration-500"
    >
      <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040712] via-[#040712]/40 to-transparent"></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-slate-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{desc}</p>
        <div className="mt-4 text-[10px] font-black text-gold tracking-widest uppercase">獲利攻略 ➔</div>
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
            
            {/* 遊戲品牌介紹專區 */}
            <section id="game-intro-section" className="py-24 max-w-7xl mx-auto px-4 relative border-b border-white/5">
              <div className="text-center mb-16 px-4">
                <h2 className="text-5xl md:text-7xl font-black mb-8 pr-4"><span className="gold-text">遊戲介紹專區</span></h2>
                <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                  BC博球介接全球頂尖系統供應商。從業界標竿協和體育、ATG電子、到穩定首選DG真人。我們為您呈現最具公信力與公平性的品牌深度解析。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <IntroCard title="體育品牌" icon="🏆" type="intro-sports" color="green" desc="深入了解協和體育盤口深度、美金盤同步與走地水位優勢。" />
                <IntroCard title="電子品牌" icon="🎰" type="intro-slots" color="blue" desc="揭秘 ATG、RSG、QT、GR、ZG 等主流館別，解析高 RTP 返還率與爆分機台特色。" />
                <IntroCard title="真人品牌" icon="💎" type="intro-live" color="yellow" desc="探索 DG、歐博、MT、WM、沙龍、金佰新等全球頂級場館，體驗真人荷官視訊博弈魅力。" />
                <IntroCard title="體育攻略" icon="⚽" type="sports" color="red" desc="分析賽事賠率與走勢，掌握投注最佳時機。" />
                <IntroCard title="百家樂攻略" icon="🃏" type="baccarat" color="purple" desc="百家樂大路解析，提高勝率的關鍵技巧。" />
                <IntroCard title="捕魚品牌" icon="🐟" type="intro-fishing" color="cyan" desc="匯集 RGS、ZG、GR、GB、YZ、博球等多樣化捕魚機 brand，享受極速爆金與震撼特效。" />
              </div>
            </section>

            {/* 攻略專區 */}
            <section id="strategy-section" className="py-24 max-w-7xl mx-auto px-4 relative">
              <div className="text-center mb-16 px-4">
                <h2 className="text-5xl md:text-7xl font-black mb-8 pr-4"><span className="gold-text">攻略與實戰教學</span></h2>
                <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                  BC博球職業團隊親撰。拒絕盲目博弈，透過盤口分析、路單規律與吐分週期判斷，系統化提升您的獲利勝率。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StrategyCard title="百家樂必勝攻略" type="baccarat" desc="五路分析看路技巧，資金纜法管理，建立長久獲利模型。" imageUrl="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600" />
                <StrategyCard title="體育運彩分析" type="sports" desc="透視美金盤口誘盤訊號，走地滾球補注時機與數據解讀。" imageUrl="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600" />
                <StrategyCard title="戰神賽特爆分" type="ares-strategy" desc="解析眼神訊號與吐分週期，掌握 51000 倍噴金大獎瞬間。" imageUrl="https://images.unsplash.com/photo-1599110906885-b02449931754?auto=format&fit=crop&q=80&w=600" />
                <StrategyCard title="雷神索爾技巧" type="thor-strategy" desc="捕捉雷擊補償機制，倍率疊加連消心法，掌握電子爆分規律。" imageUrl="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&q=80&w=600" />
              </div>
            </section>

            <AdSection />
            <Comparison />
            <Process />
          </>
        ) : (
          <GameDetails type={currentPage} setPage={handlePageChange} />
        )}
      </main>

      <Footer setPage={handlePageChange} />
      
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a href="https://lin.ee/QmHsUTj" className="flex items-center justify-center gold-gradient text-black font-black py-5 rounded-[2rem] shadow-[0_20px_60px_rgba(212,175,55,0.4)] animate-bounce-slow text-xl active:scale-90 transition-transform">
           💬 10分鐘快速核額領禮包
        </a>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
