
import React from 'react';

interface HeroProps {
  onComparisonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onComparisonClick }) => {
  const brandUrl = "https://www.bc78999.net";
  
  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-64 lg:pb-52 overflow-hidden">
      {/* 背景裝飾元素 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[900px] bg-gradient-to-b from-gold/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 mb-8 md:mb-12 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md shadow-2xl">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></span>
          <span className="text-gold text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase">2026 台灣娛樂城推薦最佳品牌</span>
        </div>
        
        {/* H1：手機版強制作為兩行顯示，解決畫面過擠問題 */}
        <h1 className="text-[2.6rem] md:text-[8rem] font-black mb-10 md:mb-12 leading-[1.1] md:leading-[0.9] tracking-tighter">
          <span className="block mb-1 md:inline md:mb-0">全台最強</span>
          <span className="gold-text block md:inline">娛樂城推薦</span><br />
          <span className="text-xl md:text-7xl text-white/90 mt-6 block italic font-serif">BC博球 · 信用版領航者</span>
        </h1>
        
        <p className="text-base md:text-3xl text-slate-400 max-w-4xl mx-auto mb-16 md:mb-20 leading-relaxed font-light px-4">
          專為職業玩家打造的<strong>信用版娛樂城</strong>平台。主打「照會開版、免預付儲值」，<br className="hidden md:block" />
          提供最領先的博弈攻略，資金對匯透明、結算安全準時。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 px-4">
          <a href="https://lin.ee/QmHsUTj" title="立即聯繫開版" className="gold-gradient text-black font-black text-lg md:text-2xl px-12 py-5 md:px-20 md:py-7 rounded-2xl md:rounded-3xl shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
            10分鐘快速開版核額度
          </a>
          <button onClick={onComparisonClick} className="bg-white/5 backdrop-blur-2xl hover:bg-white/10 text-white font-black text-lg md:text-2xl px-12 py-5 md:px-20 md:py-7 rounded-2xl md:rounded-3xl border border-white/10 transition-all">
            為何玩家推薦信用版？
          </button>
        </div>
        
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-5xl mx-auto text-slate-300 px-4">
          {[
            { label: '核版速度', val: '10 分鐘' },
            { label: '結算週期', val: '周日 12:00' },
            { label: '娛樂城資歷', val: '10 年誠信' },
            { label: '開版機制', val: '安全照會' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 shadow-xl">
              <div className="text-gold font-black text-lg md:text-2xl mb-1 md:mb-2">{item.val}</div>
              <div className="text-slate-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
