
import React from 'react';

interface HeroProps {
  onComparisonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onComparisonClick }) => {
  const brandUrl = "https://www.bc78999.net";
  
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-64 lg:pb-52 overflow-hidden">
      {/* 背景裝飾元素 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[900px] bg-gradient-to-b from-gold/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-8 py-3 mb-12 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md shadow-2xl">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-4"></span>
          <span className="text-gold text-sm font-black tracking-[0.4em] uppercase">2026 台灣信用版推薦品牌</span>
        </div>
        
        <h1 className="text-6xl md:text-[10rem] font-black mb-12 leading-[0.9] tracking-tighter">
          掌握贏面 <span className="gold-text">BC博球</span><br />
          <span className="text-4xl md:text-7xl text-white/95 mt-4 block">娛樂城信用版·實力領航者</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-20 leading-relaxed font-light">
          拒絕現金版儲值風險，我們主打「審核照會後遊玩」，<br className="hidden md:block" />
          提供極速開版額度服務。免儲值上分，獲利周結對匯，您的資金安全我們守護。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <a href="https://lin.ee/QmHsUTj" className="gold-gradient text-black font-black text-2xl px-20 py-7 rounded-3xl shadow-[0_25px_50px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
            10分鐘極速照會開版
          </a>
          <button onClick={onComparisonClick} className="bg-white/5 backdrop-blur-2xl hover:bg-white/10 text-white font-black text-2xl px-20 py-7 rounded-3xl border border-white/10 transition-all">
            了解信用版與現金版差異
          </button>
        </div>
        
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-5xl mx-auto">
          {[
            { label: '核版速度', val: '10 分鐘' },
            { label: '結算時間', val: '周日 12:00' },
            { label: '品牌資歷', val: '10 年誠信' },
            { label: '審核機制', val: '安全照會' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl border border-white/5 shadow-xl">
              <div className="text-gold font-black text-2xl mb-2">{item.val}</div>
              <div className="text-slate-500 text-xs font-bold tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
