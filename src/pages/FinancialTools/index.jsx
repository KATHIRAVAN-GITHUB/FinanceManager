import React from 'react';

const FinancialTools = () => {
  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold mb-6">Financial Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* EMI Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏦</span>
            <h2 className="text-xl font-semibold">EMI Calculator</h2>
          </div>
          <p className="text-slate-400 mb-4">Calculate EMI for your loans and plan your repayments better.</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Calculate EMI
          </button>
        </div>

        {/* SIP Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📈</span>
            <h2 className="text-xl font-semibold">SIP Calculator</h2>
          </div>
          <p className="text-slate-400 mb-4">Plan your investments and calculate returns on SIP investments.</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Calculate SIP
          </button>
        </div>

        {/* Tax Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💰</span>
            <h2 className="text-xl font-semibold">Tax Calculator</h2>
          </div>
          <p className="text-slate-400 mb-4">Estimate your tax liability and plan your tax savings.</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Calculate Tax
          </button>
        </div>

        {/* Retirement Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">👴</span>
            <h2 className="text-xl font-semibold">Retirement Calculator</h2>
          </div>
          <p className="text-slate-400 mb-4">Plan your retirement and calculate the corpus needed.</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Plan Retirement
          </button>
        </div>

        {/* Goal Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="text-xl font-semibold">Goal Calculator</h2>
          </div>
          <p className="text-slate-400 mb-4">Calculate how much you need to save for your financial goals.</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Plan Goals
          </button>
        </div>

        {/* Budget Planner */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📊</span>
            <h2 className="text-xl font-semibold">Budget Planner</h2>
          </div>
          <p className="text-slate-400 mb-4">Create and manage your monthly budget effectively.</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Plan Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialTools;
