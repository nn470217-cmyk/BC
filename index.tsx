
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
                <h2 className="text-4xl md:text-6xl font-black mb-6">全台首選 <span className="gold-text">娛樂城推薦品牌</span></h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                  BC博球不僅是專業的娛樂城信用版平台，更是玩家公認的技術首選。我們匯集了2026年最新娛樂城趨勢，提供百家樂路單解析、運彩賽事即時分析及多款電子遊戲技巧。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StrategyCard 
                  title="百家樂必勝攻略" 
                  desc="全台娛樂城首創五路分析，深度解析百家樂看路技巧，大幅提升贏錢勝率，信用版開版玩家必看。"
                  icon="🃏" 
                  type="baccarat"
                  color="blue"
                />
                <StrategyCard 
                  title="體育運彩分析" 
                  desc="掌握美金盤口、走地滾球技巧。專業運彩玩家推薦，BC博球信用版提供最穩定的賽事投注環境。"
                  icon="⚽" 
                  type="sports"
                  color="green"
                />
                <StrategyCard 
                  title="戰神賽特爆分" 
                  desc="電子遊戲攻略：解析戰神賽特機台週期。2026年熱門電子遊戲推薦，帶領您領取大額彩金。"
                  icon="🏺" 
                  type="ares-strategy"
                  color="yellow"
                />
                <StrategyCard 
                  title="雷神索爾技巧" 
                  desc="雷神索爾爆分攻略，教您捕捉雷擊訊號與倍率疊加，全台娛樂城推薦首選的高勝率打法。"
                  icon="⚡" 
                  type="thor-strategy"
                  color="blue"
                />
              </div>
            </section>

            <AdSection />
            <Comparison />
            <Process />

            {/* SEO 強化內容區塊：增加關鍵字密度與語義鏈接 */}
            <section className="py-20 max-w-7xl mx-auto px-4 border-t border-white/5 opacity-80">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold gold-text mb-6">為什麼 BC博球 是 2026 台灣娛樂城推薦的首選信用版？</h2>
                <div className="grid md:grid-cols-2 gap-10 text-slate-400 text-sm leading-relaxed">
                  <div>
                    <p className="mb-4">
                      在台灣博弈市場中，選擇一家值得信賴的<strong>娛樂城推薦</strong>品牌至關重要。BC博球作為資深<strong>信用版</strong>領導者，深知玩家對安全與效率的需求。不同於傳統現金版需要頻繁儲值，我們的額度制模式讓您能更彈性地分配資金，免去了儲值延遲的煩惱。
                    </p>
                    <p>
                      我們的平台涵蓋了多樣化的遊戲選擇，包括真人百家樂、體育賽事、電子遊戲等。每一款遊戲我們都配備了詳盡的攻略教學，這也是為什麼 BC博球 能在眾多<strong>娛樂城推薦</strong>名單中脫穎而出的關鍵原因。
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      對於尋找穩定<strong>信用版娛樂城</strong>的玩家來說，結算誠信是核心指標。BC博球堅持每周日固定結算，周一準時對匯，這種穩定性讓我們在業界建立了長達10年的良好口碑。無論您是追求高倍率的戰神賽特，還是喜歡盤口多變的運彩分析，這裡都能滿足您的需求。
                    </p>
                    <p>
                      立即聯繫客服進行<strong>開版</strong>照會，開啟您的尊榮娛樂之旅。我們承諾10分鐘內快速審核，免預付、免壓證，真正實現誠信對匯。
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
