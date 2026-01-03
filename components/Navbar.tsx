
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

  const handleNav = (page: PageType) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  const handleSectionNav = (id: string) => {
    onSectionNav(id);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'baccarat', title: '百家樂攻略', icon: '🃏', desc: '路單規律深度解析' },
    { id: 'sports', title: '體育賽事分析', icon: '⚽', desc: '美金盤口實戰心法' },
    { id: 'ares-strategy', title: '戰神賽特打法', icon: '🏺', desc: '爆分週期捕捉技術' },
    { id: 'thor-strategy', title: '雷神索爾技巧', icon: '⚡', desc: '倍率疊加洗台攻略' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#040712]/90 backdrop-blur-3xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer space-x-3 group" onClick={() => handleNav('home')}>
            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300">
              <span className="text-black font-black text-xl italic">BC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black gold-text italic tracking-tighter leading-none">博球</span>
              <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] mt-1 uppercase">娛樂城信用版</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => handleNav('home')} className={`text-sm font-black tracking-widest hover:text-gold transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-slate-400'}`}>官網首頁</button>
            <div className="group relative">
              <button className="text-sm font-black tracking-widest text-slate-400 group-hover:text-gold transition-colors flex items-center">
                攻略專區 <span className="ml-2 text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[#0a0f1e] border border-white/10 p-2 rounded-2xl w-56 shadow-2xl">
                  {menuItems.map(item => (
                    <button key={item.id} onClick={() => handleNav(item.id as PageType)} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">{item.title}</button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => onSectionNav('comparison')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">優勢比較</button>
            <button onClick={() => onSectionNav('process')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">開版流程</button>
            <a href={lineUrl} className="gold-gradient text-black px-6 py-2 rounded-xl text-sm font-black hover:scale-105 transition-all shadow-lg">立即開版</a>
          </div>

          {/* Mobile Menu Toggle Button - Unified as the only close button when open */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-gold relative z-[150] transition-transform active:scale-90"
            aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          >
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

      {/* Mobile Menu Overlay - Full Screen Takeover (100% Solid Background) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[140] bg-[#040712] w-screen h-[100dvh] flex flex-col overflow-hidden">
          {/* Menu Header - Brand focused, close button is the one at z-[150] */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/5 bg-[#0a0f1e]">
             <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-black font-black text-lg italic">BC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black gold-text italic leading-none">博球攻略導覽</span>
                </div>
             </div>
             {/* The close button inside here was removed to avoid duplication */}
             <div className="w-10 h-10"></div> {/* Spacer for the absolute positioned toggle button */}
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10">
            {/* Main Strategy Categories */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-gold rounded-full"></span>
                <span className="text-sm font-black tracking-[0.3em] text-slate-500 uppercase">熱門攻略分類</span>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {menuItems.map(item => (
                  <button 
                    key={item.id} 
                    onClick={() => handleNav(item.id as PageType)} 
                    className="flex items-center p-6 rounded-[2.5rem] bg-[#0a0f1e] border border-white/5 text-left active:scale-95 transition-all shadow-2xl relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-active:opacity-20 transition-opacity">
                       <span className="text-6xl">{item.icon}</span>
                    </div>
                    <span className="text-4xl mr-6 bg-gold/10 p-4 rounded-3xl border border-gold/10">{item.icon}</span>
                    <div className="flex-1">
                      <div className="text-2xl font-black text-white group-active:text-gold transition-colors">{item.title}</div>
                      <div className="text-sm text-slate-500 mt-1 font-medium">{item.desc}</div>
                    </div>
                    <div className="text-gold/40 text-3xl font-light">›</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="space-y-4 pb-12">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-slate-700 rounded-full"></span>
                <span className="text-sm font-black tracking-[0.3em] text-slate-500 uppercase">快速導覽</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => handleNav('home')} className="py-6 px-4 rounded-[2rem] bg-white/5 border border-white/5 text-center font-black text-slate-300 active:bg-gold active:text-black transition-all">官網首頁</button>
                <button onClick={() => handleSectionNav('process')} className="py-6 px-4 rounded-[2rem] bg-white/5 border border-white/5 text-center font-black text-slate-300 active:bg-gold active:text-black transition-all">開版流程</button>
                <button onClick={() => handleSectionNav('comparison')} className="col-span-2 py-6 px-4 rounded-[2rem] bg-white/5 border border-white/5 text-center font-black text-slate-300 active:bg-gold active:text-black transition-all">信用版優勢比較</button>
              </div>
            </div>
          </div>

          {/* Fixed Bottom Action Bar */}
          <div className="p-6 bg-[#0a0f1e] border-t border-white/5 shadow-[0_-20px-40px_rgba(0,0,0,0.5)]">
            <a href={lineUrl} className="flex items-center justify-center w-full py-6 rounded-[2.5rem] gold-gradient text-black font-black text-2xl shadow-[0_15px_40px_rgba(212,175,55,0.4)] animate-pulse-gold">
               💬 立即開版 (10分鐘快速)
            </a>
            <p className="text-center text-slate-600 text-[10px] mt-4 font-bold tracking-widest uppercase">
              Professional Credit-Based Gaming Platform
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
