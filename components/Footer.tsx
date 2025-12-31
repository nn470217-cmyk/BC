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
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="text-2xl font-black gold-text mb-8">BC博球娛樂城</h4>
        <div className="flex justify-center space-x-6 mb-10">
          <a href={brandUrl} className="text-slate-400 hover:text-white">官網首頁</a>
          <a href={lineUrl} className="text-slate-400 hover:text-white">聯絡客服</a>
        </div>
        <p className="text-slate-600 text-sm">
          &copy; 2026 BC博球. All rights reserved. 提倡理性娛樂，切勿沉迷。
        </p>
      </div>
    </footer>
  );
};

export default Footer;