import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: '1. 提交申請', desc: '填寫資料，專人 10 分鐘內聯繫。', icon: '📝' },
    { title: '2. 身分照會', desc: '審核月訂資料與身分，確保安全。', icon: '🛡️' },
    { title: '3. 開版上分', desc: '設定信用額度，立即開始遊玩。', icon: '🎮' },
    { title: '4. 每周結算', desc: '每周日中午 12 點統計盈虧。', icon: '📊' },
    { title: '5. 周一對匯', desc: '周一進行匯款，資金流向透明。', icon: '💸' }
  ];

  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">五步開啟 信用之旅</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-3xl mb-6 border border-slate-700 group-hover:border-yellow-500 transition-all">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 gold-text">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;