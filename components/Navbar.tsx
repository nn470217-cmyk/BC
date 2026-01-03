import React, { useState } from 'react';
import { PageType } from '../types';

interface NavbarProps {
  setPage: (page: PageType) => void;
  currentPage: PageType;
  onSectionNav: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage, onSectionNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const brandUrl = "https://www.bc78999.net";

  const handleNav = (page: PageType) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  const handleSectionNav = (id: string) => {
    onSectionNav(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#040712]/90 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo 設計 */}
          <div className="flex items-center cursor-pointer space-x-3 group" onClick={() => handleNav('home')}>
            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300">
              <span className="text-black font-black text-xl italic">BC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black gold-text italic tracking-tighter leading-none">
                博球
              </span>
              <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] mt-1">
                娛樂城信用版
              </span>
            </div>
          </div>
          
          {/* 桌面版導覽列 */}
          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => handleNav('home')} className={`text-sm font-black tracking-widest hover:text-gold transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-slate-400'}`}>官網首頁</button>
            
            <div className="group relative">
              <button className="text-sm font-black tracking-widest text-slate-400 group-hover:text-gold transition-colors flex items-center">
                必勝攻略專區 <span className="ml-2 text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[#0a0f1e] border border-white/10 p-2 rounded-2xl w-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <button onClick={() => handleNav('baccarat')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">百家樂大路解析</button>
                  <button onClick={() => handleNav('sports')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">體育賽事分析</button>
                  <button onClick={() => handleNav('ares-strategy')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">戰神賽特打法</button>
                  <button onClick={() => handleNav('thor-strategy')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">雷神索爾技巧</button>
                </div>
              </div>
            </div>

            <button onClick={() => handleSectionNav('comparison')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">信用版優勢</button>
            <button onClick={() => handleSectionNav('process')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">開版流程</button>
            
            <a href={brandUrl} className="gold-gradient text-black px-10 py-3 rounded-full font-black text-sm hover:scale-105 transition-all shadow-xl shadow-gold/20">
              前往官網
            </a>
          </div>
          
          {/* 行動版漢堡按鈕 */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 relative z-[110]">
              <div className={`w-6 h-1 bg-gold mb-1.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
              <div className={`w-6 h-1 bg-gold mb-1.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-4 h-1 bg-gold ml-auto rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5 w-6' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* 行動版全螢幕選單 */}
      <div className={`fixed inset-0 bg-[#040712] z-[105] transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          <button onClick={() => handleNav('home')} className="text-3xl font-black gold-text">官網首頁</button>
          
          <div className="w-full h-px bg-white/5"></div>
          
          <div className="flex flex-col space-y-6">
            <span className="text-slate-500 font-bold tracking-[0.3em] text-xs">必勝攻略分類</span>
            <button onClick={() => handleNav('baccarat')} className="text-2xl font-bold text-white hover:text-gold">百家樂大路解析</button>
            <button onClick={() => handleNav('sports')} className="text-2xl font-bold text-white hover:text-gold">體育賽事分析</button>
            <button onClick={() => handleNav('ares-strategy')} className="text-2xl font-bold text-white hover:text-gold">戰神賽特打法</button>
            <button onClick={() => handleNav('thor-strategy')} className="text-2xl font-bold text-white hover:text-gold">雷神索爾技巧</button>
          </div>

          <div className="w-full h-px bg-white/5"></div>

          <button onClick={() => handleSectionNav('comparison')} className="text-xl font-bold text-slate-400">信用版優勢</button>
          <button onClick={() => handleSectionNav('process')} className="text-xl font-bold text-slate-400">開版流程</button>

          <a href={brandUrl} className="gold-gradient text-black px-12 py-5 rounded-2xl font-black text-xl shadow-xl">
            立即前往官網
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;