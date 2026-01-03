
import React from 'react';

const AdSection: React.FC = () => {
  const lineUrl = "https://lin.ee/QmHsUTj";

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="relative overflow-hidden rounded-[3rem] bg-[#0a0f1e] border border-gold/20 p-1 md:p-2 group">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a0f1e] via-[#161c2d] to-[#0a0f1e] p-8 md:p-16">
          {/* 背景光暈 */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-[80px] group-hover:bg-gold/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black tracking-widest mb-6 animate-pulse">
                期間限定專屬禮遇
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                BC博球 <span className="gold-text">尊爵開版禮</span>
              </h3>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
                現在完成資料審核照會，立即核發 <span className="text-white font-black text-2xl px-2">5,000</span> 遊玩體驗額度。<br className="hidden md:block"/>
                <span className="text-gold">免預付、贏錢可領</span>，體驗最高品質的信用版服務。
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 {['免儲值', '免壓證', '快速照會', '贏錢對匯'].map((tag, i) => (
                   <span key={i} className="text-[10px] font-bold text-slate-500 border border-slate-800 px-3 py-1 rounded-lg italic">#{tag}</span>
                 ))}
              </div>
            </div>

            <div className="shrink-0">
              <a href={lineUrl} className="flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full gold-gradient text-black p-4 shadow-[0_20px_60px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-500 relative group/btn">
                <span className="text-4xl mb-2">💎</span>
                <span className="text-2xl font-black">立即開版</span>
                <span className="text-[10px] font-bold tracking-widest opacity-70">領取 5000 額度</span>
                
                {/* 裝飾旋轉環 */}
                <div className="absolute inset-0 border-4 border-black/10 border-dashed rounded-full animate-[spin_10s_linear_infinite]"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
