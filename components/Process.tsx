
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { 
      title: '提交申請', 
      desc: '僅需提供基本聯絡資訊，專業開版專員將於 10 分鐘內透過通訊軟體與您取得聯繫。', 
      icon: '📝',
      tag: 'Step 01'
    },
    { 
      title: '身分照會', 
      desc: '確保遊玩環境純粹與安全。我們採用最高規格保密協議進行資料核實，免預付、免壓證。', 
      icon: '🛡️',
      tag: 'Step 02'
    },
    { 
      title: '額度上分', 
      desc: '根據照會結果核發信用額度。無需儲值即可立即在各大場館開始您的獲利之旅。', 
      icon: '🎮',
      tag: 'Step 03'
    },
    { 
      title: '統計盈虧', 
      desc: '每周日中午 12:00 準時進行全周帳務統計，報表透明，玩家可隨時在後台查看。', 
      icon: '📊',
      tag: 'Step 04'
    },
    { 
      title: '誠信對匯', 
      desc: '周一進行匯款。贏錢絕對速發，輸錢誠信對匯。BC博球十年口碑，實力見證。', 
      icon: '💸',
      tag: 'Step 05'
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden bg-[#040712]">
      {/* 裝飾背板 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Service Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">快速開版 <span className="gold-text">五大環節</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-lg">我們簡化了繁瑣的行政流程，讓您的信用版體驗從開版到兌現都極度流暢。</p>
        </div>

        {/* 時間軸容器 */}
        <div className="relative">
          {/* 中央連接線 (Desktop) / 左側連接線 (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center md:items-start group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 步驟內容卡片 */}
                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <div className={`glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:-translate-y-1 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <span className="text-6xl">{step.icon}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-gold font-black text-[10px] tracking-widest bg-gold/10 px-3 py-1 rounded-lg border border-gold/10">{step.tag}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-gold transition-colors">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>

                {/* 圓點與序號 */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-10 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-[#0a0f1e] border-2 border-gold/50 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                    <span className="text-gold font-black text-sm italic">{idx + 1}</span>
                  </div>
                  {/* 動態呼吸環 */}
                  <div className="absolute inset-0 w-12 h-12 rounded-full border border-gold opacity-0 group-hover:animate-ping"></div>
                </div>

                {/* 對側空位 (僅 Desktop) */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部導引按鈕 */}
        <div className="mt-20 text-center">
          <a href="https://lin.ee/QmHsUTj" className="inline-flex items-center space-x-4 bg-[#0a0f1e] border border-white/10 px-10 py-5 rounded-full text-slate-300 hover:text-gold hover:border-gold transition-all group font-black">
            <span className="text-lg">點擊聯繫專員諮詢審核標準</span>
            <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform italic">➜</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
