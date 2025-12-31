import React from 'react';

const Comparison: React.FC = () => {
  const data = [
    { label: '支付方式', credit: '免預付，額度制', cash: '需先儲值後遊玩' },
    { label: '資金壓力', credit: '極度靈活，不佔現金', cash: '高，需自有資金' },
    { label: '結算時間', credit: '每周日 12:00 結算', cash: '隨時結算' },
    { label: '匯款流程', credit: '周一對匯，極速到帳', cash: '提款審核繁瑣' },
    { label: '審核機制', credit: '十分鐘專人服務', cash: '系統自動化' },
  ];

  return (
    <section id="comparison" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">信用版 vs 現金版</h2>
          <p className="text-slate-400">專業玩家的睿智選擇，一表看清優勢所在。</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="p-6 font-bold text-slate-300">比較項目</th>
                <th className="p-6 font-bold gold-text text-xl">BC博球信用版</th>
                <th className="p-6 font-bold text-slate-500">一般現金版</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 font-medium text-slate-400">{row.label}</td>
                  <td className="p-6 text-yellow-500 font-bold">{row.credit}</td>
                  <td className="p-6 text-slate-500">{row.cash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;