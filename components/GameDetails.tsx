import React from 'react';
import { PageType } from '../types';

interface GameDetailsProps { type: PageType; }

const GameDetails: React.FC<GameDetailsProps> = ({ type }) => {
  const brandUrl = "https://www.bc78999.net";
  const lineUrl = "https://lin.ee/QmHsUTj";

  const renderContent = () => {
    switch (type) {
      case 'baccarat':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">百家樂大路解析：<br/>職業玩家必備算牌法</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  五路財神路單深度教學
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-gold font-bold mb-3 text-xl">大路與大眼仔路</h3>
                    <p className="mb-4 leading-relaxed text-slate-400">大路是所有路單的基礎。我們不僅要看莊閒的長龍，更要結合大眼仔路觀察路向是否「齊整」。如果大眼仔路連續出現紅色，代表機台正處於規律的路向中，適合加注。</p>
                  </div>
                  <div>
                    <h3 className="text-gold font-bold mb-3 text-xl">小路與曱甴路</h3>
                    <p className="mb-4 leading-relaxed text-slate-400">當大路與大眼仔路模糊時，小路與曱甴路（蟑螂路）是判斷「單跳」或「雙跳」的最佳依據。觀察這兩條路的「有無」與「直落」，能幫您在微小趨勢中預測下一局。</p>
                  </div>
                </div>
              </section>
              
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  資金管理系統：1-3-2-4 必勝法
                </h2>
                <p className="leading-relaxed text-lg mb-6">在信用版遊玩百家樂，核心在於「不佔用現金流」。透過 1-3-2-4 投注法，即使第四局失利，您仍能保底獲利 2 單位的額度。這是在 BC博球 長期獲利的最高心法。</p>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                  <p className="text-sm italic text-slate-500">※ 專業提示：信用版玩家建議設定「周結損益點」，切勿在結算日前過度追注。</p>
                </div>
              </section>

              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">03</span>
                  免佣百家樂與傳統百家樂差異
                </h2>
                <p className="leading-relaxed text-slate-400">我們平台提供免佣百家樂，雖然莊贏 6 點只賠一半，但對於長期觀察「莊家優勢」的玩家來說，免佣機能有效減少抽水負擔，提升路向預測的容錯率。</p>
              </section>
            </div>
          </>
        );
      case 'ares-strategy':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">戰神賽特：<br/>爆分循環與進場時機全解析</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  識別機台三階段：吃分、吐分、平穩
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-red-500 font-bold">吃分期：</span>
                    <p className="text-slate-400">小獎頻繁但不連貫，且沒有大倍率符號。建議此時以最小額度試探，或更換機台。</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-green-500 font-bold">吐分期：</span>
                    <p className="text-slate-400">當賽特眼神出現閃爍動效，且 10 轉內出現兩次以上的免費遊戲符號。這是大爆分的預兆，應果斷調高倍注。</p>
                  </li>
                </ul>
              </section>
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  購得免費遊戲的黃金法則
                </h2>
                <p className="leading-relaxed text-lg mb-6 text-slate-400">許多玩家喜歡直接購買免費遊戲（Buy Feature）。在信用版，我們建議先進行 30-50 轉的自動旋轉，若盤面經常出現 5x 以上的倍率符號，代表機台「已熱」，此時進入購買環節成功爆出 500x 以上大獎的機率最高。</p>
              </section>
            </div>
          </>
        );
      case 'thor-strategy':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">雷神索爾：<br/>掌握消除機制與疊加倍率</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  雷擊補償機制
                </h2>
                <p className="leading-relaxed text-lg text-slate-400">索爾與賽特不同，其重點在於「掉落後的連續消除」。當盤面沒有消除但出現索爾敲擊地面的特效時，代表系統正在啟動「補償機制」，接下來的 5 轉內極大機率會掉落高倍率球。</p>
              </section>
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  低分洗台、高分捕捉
                </h2>
                <p className="leading-relaxed text-slate-400">先用低倍注進行 100 轉洗台，觀察平均消除次數。若平均消除超過 3 次，代表機台獎池充盈，立即切換為高額倍注捕捉後續的大消除。信用版玩家可靈活調整每日額度，鎖定機台吐分精華時段。</p>
              </section>
            </div>
          </>
        );
      default:
        return (
          <div className="text-center py-32">
            <h1 className="text-5xl font-black gold-text mb-6">專業攻略編撰中</h1>
            <p className="text-slate-500 text-xl">我們正在整理最新的體育博彩分析與捕魚機週期表...</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      {renderContent()}
      <div className="mt-24 flex flex-col items-center">
        <div className="p-16 glass-card rounded-[60px] text-center w-full max-w-4xl border border-gold/30 shadow-[0_0_100px_rgba(212,175,55,0.15)]">
          <h3 className="text-4xl font-black mb-8 gold-text">看完專業攻略，準備好實測了嗎？</h3>
          <p className="text-slate-400 mb-12 text-xl">BC博球提供業界最穩定的信用額度，免儲值、免擔憂，10 分鐘照會即可開版遊玩。</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={lineUrl} className="gold-gradient text-black font-black px-16 py-6 rounded-3xl hover:scale-105 transition-all text-xl shadow-2xl">
              立即加賴開版
            </a>
            <a href={brandUrl} className="bg-white/5 text-white font-bold px-16 py-6 rounded-3xl hover:bg-white/10 transition-all border border-white/10 text-xl">
              返回遊戲大廳
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
