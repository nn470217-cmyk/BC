
import React from 'react';

interface HeroProps {
  onComparisonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onComparisonClick }) => {
  const lineUrl = "https://lin.ee/QmHsUTj";
  
  return (
    <section id="home" className="relative pt-10 pb-24 lg:pt-20 lg:pb-40 overflow-hidden">
      {/* 動態背景元素 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-gold/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 mb-6 md:mb-10 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-xl shadow-2xl animate-bounce-slow">
          <span className="flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-gold text-[10px] md:text-sm font-black tracking-widest">2026 專業玩家信用開版推薦首選</span>
        </div>
        
        <h1 className="text-[2.8rem] md:text-[6.5rem] lg:text-[8.5rem] font-black mb-8 md:mb-12 leading-[1.2] md:leading-[1.0] tracking-tighter">
          <span className="block drop-shadow-2xl">全台最強</span>
          <span className="gold-text block pb-2 md:pb-4 drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)]">娛樂城推薦</span>
          <span className="text-xl md:text-7xl text-white/80 mt-8 md:mt-12 block font-serif tracking-normal">BC博球 · 信用版領航者</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-medium px-4">
          專為追求極致效率的職業玩家打造。<br className="hidden md:block" />
          主打「<span className="text-white border-b border-gold/50">快速照會開版、免儲值即可上分</span>」，十年誠信。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4">
          <a href={lineUrl} className="w-full sm:w-auto gold-gradient text-black font-black text-xl md:text-2xl px-12 py-6 md:px-20 md:py-7 rounded-[2rem] shadow-[0_20px_50px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300">
            10分鐘快速核額遊玩
          </a>
          <button onClick={onComparisonClick} className="w-full sm:w-auto bg-white/5 backdrop-blur-3xl hover:bg-white/10 text-white font-black text-xl md:text-2xl px-12 py-6 md:px-20 md:py-7 rounded-[2rem] border border-white/10 transition-all shadow-xl">
            信用版優勢分析
          </button>
        </div>
        
        <div className="mt-16 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto px-4">
          {[
            { label: '核版速度', val: '10 分鐘', icon: '⚡' },
            { label: '結算週期', val: '每周日12:00結算', icon: '📅' },
            { label: '累積信譽', val: '10 年口碑', icon: '🏆' },
            { label: '隱私保護', val: '軍規加密', icon: '🔐' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 md:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:border-gold/30 transition-all">
              <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
              <div className="text-gold font-black text-xl md:text-2xl mb-1">{item.val}</div>
              <div className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
