import React from 'react';

const AdSection: React.FC = () => {
  const brandUrl = "https://www.bc78999.net";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-900 to-black p-12 border border-blue-500/20">
        <div className="relative z-10">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
            NEW EVENT
          </span>
          <h3 className="text-4xl font-black text-white mt-4 mb-4">BC博球新戶禮遇</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            現在申請開版，通過照會後立即領取 <span className="text-yellow-500 font-bold">5000 體驗金</span>。免儲值，贏錢可提領！
          </p>
          <a href={brandUrl} className="inline-block gold-gradient text-black font-black px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">
            立即開版
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdSection;