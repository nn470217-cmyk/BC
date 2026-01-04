import React from 'react';
import { PageType } from '../types';

interface GameDetailsProps { 
  type: PageType; 
  setPage: (page: PageType) => void;
}

const GameDetails: React.FC<GameDetailsProps> = ({ type, setPage }) => {
  const lineUrl = "https://lin.ee/QmHsUTj";

  const BrandItem = ({ name, content, imageUrl, features }: { name: string, content: string, imageUrl: string, features: string[] }) => (
    <div className="glass-card rounded-[3rem] border border-white/10 overflow-hidden hover:border-gold/40 transition-all duration-500 group mb-12 shadow-3xl">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 relative aspect-square overflow-hidden shrink-0">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040712] via-transparent to-transparent opacity-70"></div>
          <div className="absolute bottom-6 left-6">
            <span className="bg-gold text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">官方合作品牌</span>
          </div>
        </div>
        <div className="flex-1 p-8 md:p-14 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-gold transition-colors">{name}</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {features.map((f, i) => (
              <span key={i} className="text-[10px] font-black text-gold bg-gold/5 border border-gold/10 px-4 py-1.5 rounded-xl uppercase tracking-widest"># {f}</span>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed text-lg mb-10 font-medium whitespace-pre-line opacity-80 group-hover:opacity-100 transition-opacity">
            {content}
          </p>
          <div className="flex items-center space-x-6">
             <a href={lineUrl} className="gold-gradient text-black font-black px-8 py-3 rounded-2xl hover:scale-105 transition-all text-sm shadow-xl">立即開版遊玩</a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'intro-sports':
        return (
          <div className="space-y-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-8xl font-black gold-text mb-8 tracking-tighter pr-4">體育品牌<span className="text-white"></span></h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">BC博球介接亞洲最穩定、賠率最高的體育博彩系統，為專業運動博客提供最極致的投注環境。</p>
            </div>
            <BrandItem 
              name=" 協和體育"
              imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
              features={['高勝率水位', '即時走地', '美金盤同步']}
              content={`協和體育是亞洲體育博彩市場的領航者，以盤口深度與極速結算功能聞名業界。提供足球五大聯賽、NBA、MLB以及中華職棒 (CPBL) 等賽事。優勢在於美金盤無延遲同步，確保水位精準。`}
            />
          </div>
        );
      case 'intro-slots':
        return (
          <div className="space-y-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-8xl font-black gold-text mb-8 tracking-tighter pr-4">電子遊戲 <span className="text-white"></span></h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">彙整全球最受歡迎的電子機台品牌，從戰神賽特到麻將發了，應有盡有。</p>
            </div>
            <BrandItem 
              name=" ATG 電子"
              imageUrl="https://i.meee.com.tw/hnF9FIw.jpg"
              features={['戰神賽特', '51000倍', '隨處支付']}
              content={`ATG 電子憑藉其年度代表作《戰神賽特》成為目前娛樂城信用版中最熱門品牌。其核心機制採用「隨處支付」消除模式，突破傳統賠付線限制，大幅增加爆獎機率。`}
            />
            <BrandItem 
              name=" RSG 電子"
              imageUrl="https://i.meee.com.tw/8HSVe8d.jpg"
              features={['雷神索爾', '麻將發了', '穩定返還']}
              content={`RSG 電子以《雷神索爾》與《麻將發了》聞名。其數值設計嚴謹，提供極其穩定的 RTP 返還率。雷神索爾的雷擊補償機制是玩家公認的電子機台首選。`}
            />
            <BrandItem 
              name=" QT 電子"
              imageUrl="https://i.meee.com.tw/v1n3Qyb.jpg"
              features={['亞系風格', '多樣機台', '極速載入']}
              content={`QT 電子（QTech Games）專注於亞洲市場偏好，其介面設計直覺流暢。提供超過百款不同主題的拉霸遊戲，特別是在小注博大獎的數值平衡上表現優異。`}
            />
            <BrandItem 
              name=" GR 電子"
              imageUrl="https://i.meee.com.tw/LklbSL5.jpg"
              features={['好路電子', '老虎機專家', '公平性保證']}
              content={`GR 電子以其公平透明的 RNG 隨機運算聞名，提供多樣化具有故故事節的機台，讓玩家在博弈的同時也能享受豐富的視覺敘事。`}
            />
            <BrandItem 
              name=" ZG 電子"
              imageUrl="https://i.meee.com.tw/b4Rgdte.jpg"
              features={['Zebra Gaming', '創新玩法', '高動態特效']}
              content={`ZG 電子（ZebraGaming）是新一代電子遊戲的領航品牌。其特色在於將傳統老虎機與現代動作遊戲特效結合，每一轉都充滿震撼感。`}
            />
          </div>
        );
      case 'intro-live':
        return (
          <div className="space-y-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-8xl font-black gold-text mb-8 tracking-tighter pr-4">真人百家 <span className="text-white"></span></h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">嚴選全球具備合法牌照的頂級場館，為您提供最真實、最公正的真人視訊體驗。</p>
            </div>
            <BrandItem 
              name=" DG 真人"
              imageUrl="https://i.meee.com.tw/G92ogFO.jpg"
              features={['全視角切換', '極速入座', '多桌博弈']}
              content={`DG 真人（Dream Gaming）是目前亞洲公信力最強的真人視訊平台。提供包含百家樂、龍虎、牛牛等多種玩法，路單精準且視訊高清流暢。`}
            />
            <BrandItem 
              name=" 歐博真人"
              imageUrl="https://i.meee.com.tw/OC1uj3N.jpg"
              features={['競咪體驗', '高端場館', '資深老牌']}
              content={`歐博真人（Allbet）專為追求「沈浸式博弈」的高端玩家打造。獨創的「競咪百家樂」讓線上玩家也能享受親手揭牌（瞇牌）的快感。`}
            />
            <BrandItem 
              name=" MT 真人"
              imageUrl="https://i.meee.com.tw/DBrcUKX.jpg"
              features={['MT 真人', '視覺極致', 'VIP尊榮']}
              content={`MT 真人以奢華的場景佈置與高品質的荷官團隊聞名。致力於提供如拉斯維加斯 VIP 室般的隱私與專業服務。`}
            />
            <BrandItem 
              name=" WM 真人"
              imageUrl="https://i.meee.com.tw/skNhURx.jpg"
              features={['多樣化玩法', '低延遲傳輸', '親民介面']}
              content={`WM 真人以簡單易用的介面與多元化的小遊戲深受新手與資深玩家喜愛。穩定度極高，是許多專業信用版玩家的固定場館。`}
            />
            <BrandItem 
              name=" 沙龍真人"
              imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
              features={['SA Gaming', '大獎保證', '公正牌照']}
              content={`沙龍真人（SA Gaming）是博弈界的長青品牌，持有 PAGCOR 等國際授權。其百家樂路單統計功能極其詳盡，適合進行數據化分析投注。`}
            />
            <BrandItem 
              name=" 金佰新真人黑粒仔"
              imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
              features={['傳統特色', '天九牌', '真人對戰']}
              content={`金佰新真人專攻極具文化特色的「黑粒仔（天九牌）」。在真人視訊中重現傳統博弈魅力，是市面上少數能體驗到地道黑粒仔玩法的頂尖場館。`}
            />
          </div>
        );
      case 'intro-lottery':
        return (
          <div className="space-y-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-8xl font-black gold-text mb-8 tracking-tighter pr-4">彩票品牌 <span className="text-white"></span></h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">同步官方開獎數據，極速派彩，賠率優勢全台最高。</p>
            </div>
            <BrandItem 
              name=" 常博彩票"
              imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
              features={['官方數據', '自動派彩', '玩法齊全']}
              content={`常博彩票涵蓋國內外主流官方彩票項目。保證數據即時同步，開獎後 5 分鐘內完成派彩，結算透明且信譽卓著。`}
            />
            <BrandItem 
              name=" 大力彩票"
              imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
              features={['高頻開獎', '極速結算', '數據分析']}
              content={`大立彩票專攻 飆速賽車、幸運飛艇 等高頻開獎遊戲。提供詳盡的走勢圖表，方便玩家進行殺號與倍投計畫。`}
            />
          </div>
        );
      case 'intro-chess':
        return (
          <div className="space-y-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-8xl font-black gold-text mb-8 tracking-tighter pr-4">棋牌遊戲 <span className="text-white"></span></h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">擺脫枯燥單機，與全台玩家實時競技，體驗博弈中的博弈。</p>
            </div>
            <BrandItem 
              name=" 百勝棋牌"
              imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
              features={['真人對戰', '鬥地主', '防作弊機制']}
              content={`百勝棋牌提供鬥地主、德州撲克、炸金花等經典項目。內置強大的防作弊機制，確保每一場對局皆為真實玩家間的公平實力對戰。`}
            />
          </div>
        );
      case 'intro-fishing':
        return (
          <div className="space-y-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-8xl font-black gold-text mb-8 tracking-tighter pr-4">捕魚機 <span className="text-white"></span></h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">集結全球最具爽快感的捕魚品牌，讓您在絢爛特效中獵殺金幣大獎。</p>
            </div>
            <div className="space-y-4">
              <BrandItem 
                name=" RGS 捕魚"
                imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
                features={['頂級之作', '高倍率BOSS', '武器升級']}
                content={`RSG電子旗下頂級之作，高倍率 BOSS 出現頻率高，武器升級感強。`}
              />
              <BrandItem 
                name=" ZG 捕魚"
                imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
                features={['BOSS鎖定', '自動連射', '高效捕魚']}
                content={`以獨特的 BOSS 鎖定與自動連射功能聞名，適合追求效率的玩家。`}
              />
              <BrandItem 
                name=" GR 捕魚"
                imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
                features={['3D特效', '震撼回饋', '海底探險']}
                content={`華麗的 3D 海底特效，每一發子彈都有震撼的視覺回饋。`}
              />
              <BrandItem 
                name=" GB 捕魚"
                imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
                features={['技術射擊', '獎勵關卡', '爆金平衡']}
                content={`強調技術性射擊與獎勵關卡，爆金機率平衡且具挑戰性。`}
              />
              <BrandItem 
                name=" YZ 捕魚"
                imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
                features={['稀有魚種', '高額倍率', '大獎挑戰']}
                content={`擁有極高倍率的稀有魚種，適合喜歡搏大獎的高額玩家。`}
              />
              <BrandItem 
                name=" 博球捕魚"
                imageUrl="https://i.ibb.co/s9Rh04td/1.jpg"
                features={['專屬特約', '爽快感十足', '回報率領先']}
                content={`BC博球專屬特約場館，調優了爆金週期，爽快感與回報率全台首屈一指。`}
              />
            </div>
          </div>
        );
      case 'sports':
        return (
          <div className="space-y-16">
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center pr-4">體育賽事攻略：<br/>盤口心理學與滾球策略</h1>
            <div className="grid md:grid-cols-2 gap-10">
              <section className="glass-card p-12 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8">如何判斷莊家誘盤？</h2>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">觀察賽前 30 分鐘的水位跳動。若強隊水位持續高升 but 初盤水位卻極低，通常是莊家在誘導資金流向弱隊受讓盤。</p>
              </section>
              <section className="glass-card p-12 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8">走地滾球的絕殺心法</h2>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">下半場是絕殺球出現的高峰期。建議在此時關注射門次數高但比分尚未拉開的場次進行補注。</p>
              </section>
            </div>
          </div>
        );
      case 'baccarat':
        return (
          <div className="space-y-16">
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center pr-4">百家樂攻略：<br/>五路解析與路單預測</h1>
            <div className="grid md:grid-cols-2 gap-10">
              <section className="glass-card p-12 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8">下三路的真正價值</h2>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">大路反映結果，而下三路（大眼仔、小路、曱甴路）則是看「對稱性」。當大路雜亂但下三路齊整紅點時，這就是職業博客口中的「旺路」。</p>
              </section>
              <section className="glass-card p-12 rounded-[40px] border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-black text-white mb-8">資金纜法與停損點</h2>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">推薦「1-3-2-6」注碼法，穩定獲利。嚴禁採用無限制倍壓法（馬丁格爾），建立專屬盈虧紅線是獲利基石。</p>
              </section>
            </div>
          </div>
        );
      case 'ares-strategy':
        return (
          <div className="space-y-16">
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center pr-4">戰神賽特攻略：<br/>眼神訊號與吐分週期</h1>
            <section className="glass-card p-14 rounded-[40px] border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black text-white mb-10 text-center pr-4">掌握 51,000 倍的獲利密碼</h2>
              <div className="space-y-10 text-slate-400 text-lg font-medium">
                <p><strong className="text-gold">1. 機台預熱測試：</strong> 先以小注 50 轉測試。若期間頻繁出現 2x-5x 乘號但不連線，代表能量累積中。</p>
                <p><strong className="text-gold">2. 捕捉眼神紅光：</strong> 賽特眼神紅光頻率增加，且畫面掉落大型乘號次數提升時，代表進入吐分期。</p>
                <p><strong className="text-gold">3. 信用版優勢加注：</strong> 利用 BC 博球額度，在旺機出現時果斷購買免費遊戲，捕捉噴金瞬間。</p>
              </div>
            </section>
          </div>
        );
      case 'thor-strategy':
        return (
          <div className="space-y-16">
            <h1 className="text-5xl md:text-7xl font-black gold-text mb-10 leading-tight text-center pr-4">雷神索爾攻略：<br/>雷擊補償與倍率疊加</h1>
            <section className="glass-card p-14 rounded-[40px] border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black text-white mb-10 text-center pr-4">索爾敲地：電子爆分的黃金訊號</h2>
              <div className="space-y-10 text-slate-400 text-lg font-medium">
                <p>雷神索爾的核心獲利點在於「連消倍率」。當畫面上方出現索爾敲擊地面的電光特效時，系統會轉化低分符號為高倍數乘號。掌握此週期進行加注，是電子高手一致公認的高效率打法。</p>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <div className="text-center py-40">
            <h1 className="text-6xl font-black gold-text mb-10 pr-4">內容整理中...</h1>
            <button onClick={() => setPage('home')} className="bg-white/5 text-white font-bold px-12 py-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">返回首頁</button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      {renderContent()}
      
      {/* 底部行動呼籲 */}
      <div className="mt-32 flex flex-col items-center">
        <div className="p-16 md:p-24 glass-card rounded-[80px] text-center w-full max-w-5xl border border-gold/30 shadow-[0_0_150px_rgba(212,175,55,0.2)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <h3 className="text-4xl md:text-6xl font-black mb-10 gold-text pr-4">掌握品牌心法，立即開版獲利</h3>
          <p className="text-slate-400 mb-16 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
            BC博球提供全台最穩定的信用額度，專人 10 分鐘核版照會。免儲值、免繁瑣流程，讓您贏在獲利起跑點。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={lineUrl} className="gold-gradient text-black font-black px-16 py-7 rounded-3xl hover:scale-105 transition-all text-2xl shadow-2xl active:scale-95">
              💬 聯繫客服開版
            </a>
            <button onClick={() => setPage('home')} className="bg-white/5 text-white font-bold px-16 py-7 rounded-3xl hover:bg-white/10 transition-all border border-white/10 text-2xl active:scale-95">
              返回首頁
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;