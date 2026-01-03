
import React, { useState, useEffect } from 'react';
import { PageType } from '../types';

interface NavbarProps {
  setPage: (page: PageType) => void;
  currentPage: PageType;
  onSectionNav: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage, onSectionNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lineUrl = "https://lin.ee/QmHsUTj";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // 監聽返回鍵自動關閉選單
  useEffect(() => {
    const handlePopState = () => setIsMenuOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNav = (page: PageType) => {
    setIsMenuOpen(false);
    // 確保狀態更新後再進行跳轉
    requestAnimationFrame(() => {
      setPage(page);
    });
  };

  const handleSectionNav = (id: string) => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      onSectionNav(id);
    });
  };

  const strategyItems = [
    { id: 'baccarat', title: '百家樂攻略', icon: '🃏' },
    { id: 'sports', title: '體育賽事分析', icon: '⚽' },
    { id: 'ares-strategy', title: '戰神賽特打法', icon: '🏺' },
    { id: 'thor-strategy', title: '雷神索爾技巧', icon: '⚡' },
  ];

  const introItems = [
    { id: 'intro-sports', title: '體育品牌', icon: '🏆' },
    { id: 'intro-slots', title: '電子品牌', icon: '🎰' },
    { id: 'intro-live', title: '真人品牌', icon: '💎' },
    { id: 'intro-lottery', title: '彩票品牌', icon: '🧧' },
    { id: 'intro-chess', title: '棋牌品牌', icon: '♟️' },
    { id: 'intro-fishing', title: '捕魚品牌', icon: '🐟' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#040712]/90 backdrop-blur-3xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNav('home')}>
            <div className="w-10 h-10 md:w-12 md:h-12 gold-gradient rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-black font-black text-xl md:text-2xl italic">BC</span>
            </div>
            <span className="text-2xl md:text-3xl font-black gold-text tracking-tighter">博球</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNav('home')} className={`text-sm font-black tracking-widest hover:text-gold transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-slate-400'}`}>首頁</button>
            
            <div className="group relative">
              <button className="text-sm font-black tracking-widest text-slate-400 group-hover:text-gold transition-colors flex items-center">
                遊戲介紹 <span className="ml-2 text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[#0a0f1e] border border-white/10 p-2 rounded-2xl w-48 shadow-2xl">
                  {introItems.map(item => (
                    <button key={item.id} onClick={() => handleNav(item.id as PageType)} className="w-full text-left px-5 py-3 text-xs font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">
                      <span className="mr-2">{item.icon}</span>{item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="text-sm font-black tracking-widest text-slate-400 group-hover:text-gold transition-colors flex items-center">
                攻略專區 <span className="ml-2 text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[#0a0f1e] border border-white/10 p-2 rounded-2xl w-48 shadow-2xl">
                  {strategyItems.map(item => (
                    <button key={item.id} onClick={() => handleNav(item.id as PageType)} className="w-full text-left px-5 py-3 text-xs font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">
                      <span className="mr-2">{item.icon}</span>{item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => onSectionNav('process')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">開版流程</button>
            <a href={lineUrl} className="gold-gradient text-black px-6 py-2 rounded-xl text-sm font-black hover:scale-105 transition-all shadow-lg">立即開版</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gold relative z-[150] transition-transform active:scale-90">
            {isMenuOpen ? (
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col space-y-1.5 items-end">
                <span className="w-8 h-1 bg-gold rounded-full"></span>
                <span className="w-6 h-1 bg-gold rounded-full"></span>
                <span className="w-4 h-1 bg-gold rounded-full"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[140] bg-[#040712] w-screen h-[100dvh] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/5 bg-[#0a0f1e]">
             <div className="flex items-center space-x-3">
                <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                  <span className="text-black font-black text-xs italic">BC</span>
                </div>
                <span className="text-xl font-black gold-text">博球</span>
             </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">便捷按鈕</span>
              <div className="grid grid-cols-2 gap-3">
                 <button onClick={() => handleSectionNav('process')} className="p-4 rounded-2xl bg-gold/5 border border-gold/20 text-center active:scale-95 transition-all">
                    <span className="text-sm font-bold text-gold">開版流程</span>
                 </button>
                 <button onClick={() => handleSectionNav('comparison')} className="p-4 rounded-2xl bg-gold/5 border border-gold/20 text-center active:scale-95 transition-all">
                    <span className="text-sm font-bold text-gold">優勢比較</span>
                 </button>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">遊戲介紹專區</span>
              <div className="grid grid-cols-2 gap-3">
                {introItems.map(item => (
                  <button key={item.id} onClick={() => handleNav(item.id as PageType)} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-left active:scale-95 transition-all">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">攻略專區</span>
              <div className="grid grid-cols-2 gap-3">
                {strategyItems.map(item => (
                  <button key={item.id} onClick={() => handleNav(item.id as PageType)} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-left active:scale-95 transition-all">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#0a0f1e] border-t border-white/5">
            <a href={lineUrl} className="flex items-center justify-center w-full py-5 rounded-[2rem] gold-gradient text-black font-black text-xl shadow-2xl">
               💬 立即開版
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
