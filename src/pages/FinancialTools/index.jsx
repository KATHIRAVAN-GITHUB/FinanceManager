import React, { useState } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const FinancialTools = () => {
  // EMI Calculator State
  const [emiInputs, setEmiInputs] = useState({
    principal: 1000000,
    interest: 10,
    tenure: 5,
  });

  // SIP Calculator State
  const [sipInputs, setSipInputs] = useState({
    monthlyInvestment: 10000,
    expectedReturn: 12,
    years: 10,
  });

  // Tax Calculator State
  const [taxInputs, setTaxInputs] = useState({
    salary: 1000000,
    deductions: 150000,
    otherIncome: 0,
  });

  // Retirement Calculator State
  const [retirementInputs, setRetirementInputs] = useState({
    currentAge: 30,
    retirementAge: 60,
    monthlyExpenses: 50000,
    expectedReturn: 12,
    inflation: 6,
  });

  // Goal Calculator State
  const [goalInputs, setGoalInputs] = useState({
    targetAmount: 2000000,
    timeframe: 5,
    expectedReturn: 12,
  });

  // Budget Planner State
  const [budgetInputs, setBudgetInputs] = useState({
    income: 100000,
    expenses: {
      housing: 30000,
      transportation: 10000,
      food: 15000,
      utilities: 5000,
      entertainment: 10000,
      others: 10000,
    },
  });

  // Calculate EMI
  const calculateEMI = () => {
    const p = emiInputs.principal;
    const r = emiInputs.interest / 12 / 100;
    const n = emiInputs.tenure * 12;
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return emi;
  };

  // Calculate SIP Returns
  const calculateSIP = () => {
    const p = sipInputs.monthlyInvestment;
    const r = sipInputs.expectedReturn / 12 / 100;
    const n = sipInputs.years * 12;
    const amount = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return amount;
  };

  // Calculate Tax (Simple Indian Tax Calculation)
  const calculateTax = () => {
    const taxableIncome = taxInputs.salary + taxInputs.otherIncome - taxInputs.deductions;
    let tax = 0;

    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 750000) {
      tax = 12500 + (taxableIncome - 500000) * 0.10;
    } else if (taxableIncome <= 1000000) {
      tax = 37500 + (taxableIncome - 750000) * 0.15;
    } else if (taxableIncome <= 1250000) {
      tax = 75000 + (taxableIncome - 1000000) * 0.20;
    } else if (taxableIncome <= 1500000) {
      tax = 125000 + (taxableIncome - 1250000) * 0.25;
    } else {
      tax = 187500 + (taxableIncome - 1500000) * 0.30;
    }

    return { taxableIncome, tax };
  };

  // Calculate Retirement Corpus
  const calculateRetirement = () => {
    const yearsToRetirement = retirementInputs.retirementAge - retirementInputs.currentAge;
    const monthlyExpenses = retirementInputs.monthlyExpenses;
    const inflationRate = retirementInputs.inflation / 100;
    const returnRate = retirementInputs.expectedReturn / 100;

    // Calculate expenses at retirement (accounting for inflation)
    const expensesAtRetirement = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);
    
    // Assuming 20 years post-retirement life and monthly withdrawals
    const monthsPostRetirement = 20 * 12;
    const monthlyReturnRate = returnRate / 12;
    
    // Required corpus = Monthly Expense * [1 - (1 + r)^-n] / r
    // where r is monthly return rate and n is number of months
    const requiredCorpus = expensesAtRetirement * (1 - Math.pow(1 + monthlyReturnRate, -monthsPostRetirement)) / monthlyReturnRate;
    
    return requiredCorpus;
  };

  // Calculate Required Monthly Investment for Goal
  const calculateGoal = () => {
    const target = goalInputs.targetAmount;
    const years = goalInputs.timeframe;
    const r = goalInputs.expectedReturn / 12 / 100;
    const n = years * 12;

    // Monthly investment = Target / {[(1 + r)^n - 1] / r}
    const monthlyInvestment = target / ((Math.pow(1 + r, n) - 1) / r) / (1 + r);
    return monthlyInvestment;
  };

  // Calculate Budget Metrics
  const calculateBudget = () => {
    const income = budgetInputs.income;
    const totalExpenses = Object.values(budgetInputs.expenses).reduce((a, b) => a + b, 0);
    const savings = income - totalExpenses;
    const savingsRate = (savings / income) * 100;
    return { totalExpenses, savings, savingsRate };
  };

  // EMI Chart Data
  const emiChartData = {
    labels: Array.from({ length: emiInputs.tenure * 12 }, (_, i) => i + 1),
    datasets: [{
      label: 'EMI Payment Schedule',
      data: Array.from({ length: emiInputs.tenure * 12 }, () => calculateEMI()),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  // SIP Chart Data
  const sipChartData = {
    labels: Array.from({ length: sipInputs.years }, (_, i) => i + 1),
    datasets: [{
      label: 'Investment Growth',
      data: Array.from({ length: sipInputs.years }, (_, i) => {
        const years = i + 1;
        const p = sipInputs.monthlyInvestment;
        const r = sipInputs.expectedReturn / 12 / 100;
        const n = years * 12;
        return p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      }),
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1
    }]
  };

  // Tax Breakdown Chart Data
  const taxChartData = {
    labels: ['Taxable Income', 'Tax Amount', 'Net Income'],
    datasets: [{
      label: 'Tax Breakdown',
      data: (() => {
        const { taxableIncome, tax } = calculateTax();
        return [taxableIncome, tax, taxableIncome - tax];
      })(),
      backgroundColor: [
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
    }]
  };

  // Retirement Growth Chart Data
  const retirementChartData = {
    labels: Array.from({ length: retirementInputs.retirementAge - retirementInputs.currentAge + 1 }, (_, i) => retirementInputs.currentAge + i),
    datasets: [{
      label: 'Corpus Growth',
      data: Array.from({ length: retirementInputs.retirementAge - retirementInputs.currentAge + 1 }, (_, i) => {
        const years = i;
        return retirementInputs.monthlyExpenses * 12 * Math.pow(1 + retirementInputs.inflation / 100, years);
      }),
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1
    }]
  };

  // Goal Progress Chart Data
  const goalChartData = {
    labels: Array.from({ length: goalInputs.timeframe * 12 }, (_, i) => i + 1),
    datasets: [{
      label: 'Goal Progress',
      data: Array.from({ length: goalInputs.timeframe * 12 }, (_, i) => {
        const months = i + 1;
        const monthlyInvestment = calculateGoal();
        const r = goalInputs.expectedReturn / 12 / 100;
        return monthlyInvestment * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
      }),
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1
    }]
  };

  // Budget Distribution Chart Data
  const budgetChartData = {
    labels: Object.keys(budgetInputs.expenses),
    datasets: [{
      label: 'Expense Distribution',
      data: Object.values(budgetInputs.expenses),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
    }]
  };

  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold mb-6">Financial Tools</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* EMI Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏦</span>
            <h2 className="text-xl font-semibold">EMI Calculator</h2>
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Loan Amount</label>
              <input
                type="number"
                value={emiInputs.principal}
                onChange={(e) => setEmiInputs({ ...emiInputs, principal: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Interest Rate (%)</label>
              <input
                type="number"
                value={emiInputs.interest}
                onChange={(e) => setEmiInputs({ ...emiInputs, interest: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tenure (Years)</label>
              <input
                type="number"
                value={emiInputs.tenure}
                onChange={(e) => setEmiInputs({ ...emiInputs, tenure: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Monthly EMI: ₹{calculateEMI().toFixed(2)}</p>
          </div>
          <div className="h-64">
            <Line data={emiChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* SIP Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📈</span>
            <h2 className="text-xl font-semibold">SIP Calculator</h2>
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Monthly Investment</label>
              <input
                type="number"
                value={sipInputs.monthlyInvestment}
                onChange={(e) => setSipInputs({ ...sipInputs, monthlyInvestment: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expected Return (%)</label>
              <input
                type="number"
                value={sipInputs.expectedReturn}
                onChange={(e) => setSipInputs({ ...sipInputs, expectedReturn: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Investment Period (Years)</label>
              <input
                type="number"
                value={sipInputs.years}
                onChange={(e) => setSipInputs({ ...sipInputs, years: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Total Value: ₹{calculateSIP().toFixed(2)}</p>
          </div>
          <div className="h-64">
            <Line data={sipChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Tax Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💰</span>
            <h2 className="text-xl font-semibold">Tax Calculator</h2>
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Annual Salary</label>
              <input
                type="number"
                value={taxInputs.salary}
                onChange={(e) => setTaxInputs({ ...taxInputs, salary: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Deductions (80C, etc.)</label>
              <input
                type="number"
                value={taxInputs.deductions}
                onChange={(e) => setTaxInputs({ ...taxInputs, deductions: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Other Income</label>
              <input
                type="number"
                value={taxInputs.otherIncome}
                onChange={(e) => setTaxInputs({ ...taxInputs, otherIncome: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Tax Payable: ₹{calculateTax().tax.toFixed(2)}</p>
          </div>
          <div className="h-64">
            <Bar data={taxChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Retirement Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">👴</span>
            <h2 className="text-xl font-semibold">Retirement Calculator</h2>
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Current Age</label>
              <input
                type="number"
                value={retirementInputs.currentAge}
                onChange={(e) => setRetirementInputs({ ...retirementInputs, currentAge: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Retirement Age</label>
              <input
                type="number"
                value={retirementInputs.retirementAge}
                onChange={(e) => setRetirementInputs({ ...retirementInputs, retirementAge: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Monthly Expenses</label>
              <input
                type="number"
                value={retirementInputs.monthlyExpenses}
                onChange={(e) => setRetirementInputs({ ...retirementInputs, monthlyExpenses: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expected Return (%)</label>
              <input
                type="number"
                value={retirementInputs.expectedReturn}
                onChange={(e) => setRetirementInputs({ ...retirementInputs, expectedReturn: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Inflation (%)</label>
              <input
                type="number"
                value={retirementInputs.inflation}
                onChange={(e) => setRetirementInputs({ ...retirementInputs, inflation: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Required Corpus: ₹{calculateRetirement().toFixed(2)}</p>
          </div>
          <div className="h-64">
            <Line data={retirementChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Goal Calculator */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="text-xl font-semibold">Goal Calculator</h2>
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Target Amount</label>
              <input
                type="number"
                value={goalInputs.targetAmount}
                onChange={(e) => setGoalInputs({ ...goalInputs, targetAmount: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time Frame (Years)</label>
              <input
                type="number"
                value={goalInputs.timeframe}
                onChange={(e) => setGoalInputs({ ...goalInputs, timeframe: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expected Return (%)</label>
              <input
                type="number"
                value={goalInputs.expectedReturn}
                onChange={(e) => setGoalInputs({ ...goalInputs, expectedReturn: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Required Monthly Investment: ₹{calculateGoal().toFixed(2)}</p>
          </div>
          <div className="h-64">
            <Line data={goalChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Budget Planner */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📊</span>
            <h2 className="text-xl font-semibold">Budget Planner</h2>
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Monthly Income</label>
              <input
                type="number"
                value={budgetInputs.income}
                onChange={(e) => setBudgetInputs({ ...budgetInputs, income: Number(e.target.value) })}
                className="w-full bg-slate-700 rounded px-3 py-2"
              />
            </div>
            {Object.entries(budgetInputs.expenses).map(([category, amount]) => (
              <div key={category}>
                <label className="block text-sm font-medium mb-1">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setBudgetInputs({
                    ...budgetInputs,
                    expenses: {
                      ...budgetInputs.expenses,
                      [category]: Number(e.target.value)
                    }
                  })}
                  className="w-full bg-slate-700 rounded px-3 py-2"
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Monthly Savings: ₹{calculateBudget().savings.toFixed(2)}</p>
            <p className="text-lg">Savings Rate: {calculateBudget().savingsRate.toFixed(1)}%</p>
          </div>
          <div className="h-64">
            <Pie data={budgetChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTools;
