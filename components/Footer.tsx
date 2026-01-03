
import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  setPage: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const brandUrl = "https://www.bc78999.net";
  const lineUrl = "https://lin.ee/QmHsUTj";

  return (
    <footer id="contact" className="bg-[#02040a] border-t border-white/5 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 專業玩家推薦介紹區塊 */}
        <div className="mb-20 glass-card p-10 md:p-16 rounded-[3rem] border border-white/5">
          <h3 className="text-3xl md:text-5xl font-black gold-text mb-12 text-center">為什麼專業玩家一致推薦BC博球娛樂城信用版?</h3>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 text-left">
            <div className="space-y-6">
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-bold">
                在 2026 年的台灣娛樂城市場，安全性與隱私是玩家最在乎的事。<span className="text-gold">BC博球</span>作為資深信用版品牌，我們捨棄了現金版繁雜的儲值提款流程，改採「<span className="text-white border-b border-gold/30">先審核額度、周日結算、周一對匯</span>」的模式。
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                這種模式不僅免去了儲值延遲的風險，更能讓玩家在賽事高峰期（如 NBA、足球歐冠）靈活運用信用額度，實現真正的博弈自由。
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-bold">
                誠信是 <span className="text-gold">BC博球</span> 立足十年的基石。我們的娛樂城推薦名聲來自於每一筆準時到帳的對匯，以及對玩家資料的軍規級保護。
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                無論您是追求百家樂的路單精準，還是熱衷於戰神賽特的倍率堆疊，在 <span className="text-white font-bold">BC博球</span> 都能找到最公平的環境。立即諮詢專員，獲取您的專屬遊玩額度。
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center justify-center mb-8 space-y-2">
            <div className="w-12 h-12 md:w-16 md:h-16 gold-gradient rounded-2xl flex items-center justify-center shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-black font-black text-2xl md:text-3xl italic">BC</span>
            </div>
            <span className="text-2xl md:text-3xl font-black gold-text tracking-tighter">博球娛樂城</span>
          </div>
          <div className="flex justify-center space-x-6 mb-10">
            <a href={brandUrl} className="text-slate-400 hover:text-white font-bold transition-colors">官網首頁</a>
            <a href={lineUrl} className="text-slate-400 hover:text-white font-bold transition-colors">聯絡客服</a>
          </div>
          <p className="text-slate-600 text-sm">
            &copy; 2026 BC博球. All rights reserved. 提倡理性娛樂，切勿沉迷。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
