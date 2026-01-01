import React from 'react';
import { PageType } from '../types';

interface GameDetailsProps { type: PageType; }

const GameDetails: React.FC<GameDetailsProps> = ({ type }) => {
  const brandUrl = "https://www.bc78999.net";
  const lineUrl = "https://lin.ee/QmHsUTj";

  const renderContent = () => {
    switch (type) {
      case 'sports':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">體育賽事投注：<br/>盤口心理學與滾球策略</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  掌握盤口變動：何謂「誘盤」與「降水」？
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-gold font-bold mb-3 text-xl">水位與風控</h3>
                    <p className="mb-4 leading-relaxed text-slate-400">盤口水位的跳動不僅代表投注熱度，更是莊家對賽果的動態調整。在 BC博球 信用版，我們提供即時美金盤對比，教您識別莊家故意抬高強隊水位的「誘敵」策略。</p>
                  </div>
                  <div>
                    <h3 className="text-gold font-bold mb-3 text-xl">信用版投注優勢</h3>
                    <p className="mb-4 leading-relaxed text-slate-400">信用版的最大優勢在於不佔用現金流。當出現「穩贏盤」或「急跳盤」時，您能第一時間動用信用額度，不必擔心儲值到帳延遲錯過最佳賠率。</p>
                  </div>
                </div>
              </section>
              
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  走地（滾球）進階技巧：捕捉黃金 5 分鐘
                </h2>
                <p className="leading-relaxed text-lg mb-6 text-slate-400">足球與籃球賽事中，最後階段的盤口波動最為劇烈。結合我們的即時數據分析，在足球比賽 80 分鐘後的「絕殺球」盤口，或 NBA 第四節末段的總分大小盤，都是資深玩家利用大額信用額度獲利的黃金時段。</p>
              </section>

              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center mr-5 text-xl">03</span>
                  涵蓋賽事：全台最豐富的投注選擇
                </h2>
                <p className="leading-relaxed text-slate-400">從中華職棒 CPBL、美國職棒 MLB 到五大足球聯賽、NBA 籃球、甚至各類電競賽事，BC博球 均提供最全盤口。配合每周日結算的機制，讓您的體育分析真正轉化為實質收益。</p>
              </section>
            </div>
          </>
        );
      case 'baccarat':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">百家樂大路解析：<br/>職業玩家的必修課</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  如何精準預測「長龍」與「單跳」？
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-gold font-bold mb-3 text-xl">五路分析術</h3>
                    <p className="mb-4 leading-relaxed text-slate-400">在 BC博球 信用版，我們提供實時高畫質路單。除了觀察大路，更應著重「大眼仔路」與「曱甴路」的規律。當三條路的紅色指標高度同步時，即為大注進場的最佳時機。</p>
                  </div>
                  <div>
                    <h3 className="text-gold font-bold mb-3 text-xl">三珠路與尋龍術</h3>
                    <p className="mb-4 leading-relaxed text-slate-400">三珠路能有效預測「拍拍連」與「單跳」的轉折點。配合我們專業玩家建議的「見紅打藍」或「見藍打紅」反向策略，能大幅提高在穩定牌局中的勝率。</p>
                  </div>
                </div>
              </section>
              
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  資金管理：針對信用版的 1-3-2-4 必勝法
                </h2>
                <p className="leading-relaxed text-lg mb-6 text-slate-400">信用版的核心於「信用額度」的靈活運用。1-3-2-4 策略能確保您在四局勝負中，即便第四局失敗也能保有獲利。在周日結算日前，維持穩定的營收比率是資深老手的共同選擇。</p>
              </section>

              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">03</span>
                  信用版專屬優勢：免佣百家樂
                </h2>
                <p className="leading-relaxed text-slate-400">我們平台推薦使用免佣百家樂，雖然莊 6 點勝只賠一半，但對於長期觀察路向的玩家來說，省去的每一筆抽水都是純獲利。結合安全照會的高信用額度，讓您的博弈之旅毫無後顧之憂。</p>
              </section>
            </div>
          </>
        );
      case 'ares-strategy':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">戰神賽特：<br/>爆分訊號與機台週期解析</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  識別機台三階段：吃分、平穩、吐分
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-red-500 font-bold shrink-0">吃分期：</span>
                    <p className="text-slate-400">符號連線頻繁但不中大獎，且免費遊戲標誌鮮少出現。建議此時使用最小注額洗台，或暫時離線更換機台。</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-green-500 font-bold shrink-0">吐分期：</span>
                    <p className="text-slate-400">關鍵訊號！當賽特眼神出現明顯閃光動效，且 10 轉內出現兩次以上的 5x 倍率符號，即代表機台進入吐分高峰。信用版玩家應果斷調高倍注，鎖定獎池。</p>
                  </div>
                </div>
              </section>
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  購得免費遊戲（Buy Feature）的最佳時機
                </h2>
                <p className="leading-relaxed text-lg text-slate-400">許多新手迷信直接購買免費遊戲，但在 BC博球 攻略中，我們建議先進行 50 轉的手動旋轉。若 50 轉中出現過一次 20x 以上的大消除，此時再購買免費遊戲，爆發 500x 以上大獎的機率提升 40%。</p>
              </section>
            </div>
          </>
        );
      case 'thor-strategy':
        return (
          <>
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center">雷神索爾：<br/>掌握消除機制與倍率疊加</h1>
            <div className="space-y-16 text-slate-300">
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">01</span>
                  如何觀察「雷擊」補償訊號？
                </h2>
                <p className="leading-relaxed text-lg text-slate-400">雷神索爾的核心是掉落消除。當盤面沒有消除但索爾突然敲擊地面產生雷電特效時，代表系統進入「補償模式」。接下來的 3-5 轉內，極大機率掉落 50x 以上的倍率球。這是信用版高手調高單次注額的最佳訊號。</p>
              </section>
              <section className="glass-card p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center mr-5 text-xl">02</span>
                  低分洗台、高分捕捉策略
                </h2>
                <p className="leading-relaxed text-slate-400">利用信用版的高額度優勢，先用最低注連續旋轉 100 次以平衡機台 RTP。一旦觀察到連續三次消除以上，立即切換為高額注。這種「以低補高」的策略在索爾的高波動性下表現最為優異。</p>
              </section>
            </div>
          </>
        );
      default:
        return (
          <div className="text-center py-32">
            <h1 className="text-5xl font-black gold-text mb-6">攻略專區升級中</h1>
            <p className="text-slate-500 text-xl">我們正在整理最新的捕魚機技巧與運動博彩專業分析...</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      {renderContent()}
      <div className="mt-24 flex flex-col items-center">
        <div className="p-16 glass-card rounded-[60px] text-center w-full max-w-4xl border border-gold/30 shadow-[0_0_100px_rgba(212,175,55,0.15)]">
          <h3 className="text-4xl font-black mb-8 gold-text">掌握心法，準備好在信用版大顯身手？</h3>
          <p className="text-slate-400 mb-12 text-xl">BC博球提供全台最穩定的信用額度，專人 10 分鐘核版，免儲值、免繁瑣流程，讓您贏在起跑點。</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={lineUrl} className="gold-gradient text-black font-black px-16 py-6 rounded-3xl hover:scale-105 transition-all text-xl shadow-2xl">
              立即開版
            </a>
            <a href={brandUrl} className="bg-white/5 text-white font-bold px-16 py-6 rounded-3xl hover:bg-white/10 transition-all border border-white/10 text-xl">
              前往官網
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;