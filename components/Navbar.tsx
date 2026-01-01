import React from 'react';
import { PageType } from '../types';

interface NavbarProps {
  setPage: (page: PageType) => void;
  currentPage: PageType;
  onSectionNav: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage, onSectionNav }) => {
  const brandUrl = "https://www.bc78999.net";
  // 使用用戶提供的最新 Logo PNG 路徑
  const logoUrl = "https://img.js.design/assets/static/f50b865529f7f45c92849e75122789e5.png";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#040712]/90 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
            <img 
              src={logoUrl} 
              alt="BC博球" 
              className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform" 
              style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.2))' }}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => setPage('home')} className={`text-sm font-black tracking-widest hover:text-gold transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-slate-400'}`}>官網首頁</button>
            
            <div className="group relative">
              <button className="text-sm font-black tracking-widest text-slate-400 group-hover:text-gold transition-colors flex items-center">
                必勝攻略專區 <span className="ml-2 text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[#0a0f1e] border border-white/10 p-2 rounded-2xl w-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <button onClick={() => setPage('baccarat')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">百家樂大路解析</button>
                  <button onClick={() => setPage('ares-strategy')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">戰神賽特打法</button>
                  <button onClick={() => setPage('thor-strategy')} className="w-full text-left px-5 py-4 text-sm font-bold text-slate-400 hover:text-gold hover:bg-white/5 rounded-xl transition-all">雷神索爾技巧</button>
                </div>
              </div>
            </div>

            <button onClick={() => onSectionNav('comparison')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">信用版優勢</button>
            <button onClick={() => onSectionNav('process')} className="text-sm font-black tracking-widest text-slate-400 hover:text-gold transition-colors">開版流程</button>
            
            <a href={brandUrl} className="gold-gradient text-black px-10 py-3 rounded-full font-black text-sm hover:scale-105 transition-all shadow-xl shadow-gold/20">
              登入遊戲大廳
            </a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setPage('home')} className="p-2">
              <div className="w-6 h-1 bg-gold mb-1.5 rounded-full"></div>
              <div className="w-6 h-1 bg-gold mb-1.5 rounded-full"></div>
              <div className="w-4 h-1 bg-gold ml-auto rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;