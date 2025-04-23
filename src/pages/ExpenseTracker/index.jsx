import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import CategoryList from './components/CategoryList';
import MonthlyOverview from './components/MonthlyOverview';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const monthlyData = {
    income: 5000,
    expenses: 3000,
    savings: 2000,
    categories: [
      { name: 'Housing', value: 1200 },
      { name: 'Food', value: 600 },
      { name: 'Transportation', value: 400 },
      { name: 'Utilities', value: 300 },
      { name: 'Entertainment', value: 200 },
      { name: 'Others', value: 300 },
    ],
  };

  const trendData = [
    { month: 'Jan', income: 4500, expenses: 3000, savings: 1500 },
    { month: 'Feb', income: 4800, expenses: 3200, savings: 1600 },
    { month: 'Mar', income: 5000, expenses: 3000, savings: 2000 },
    // Add more months...
  ];

  return (
    <div className="expense-tracker ">
      <motion.h1
        className="page-title mt-20 text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Expense Tracker
      </motion.h1>
     

      <div className="tab-navigation mt-3 space-x-4">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-button ${activeTab === 'expenses' ? 'active' : ''}`}
          onClick={() => setActiveTab('expenses')}
        >
          Expenses
        </button>
        <button
          className={`tab-button ${activeTab === 'income' ? 'active' : ''}`}
          onClick={() => setActiveTab('income')}
        >
          Income
        </button>
        <button
          className={`tab-button ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          Categories
        </button>
      </div>

      <div className="content-area">
        {activeTab === 'overview' && (
          <MonthlyOverview
            income={monthlyData.income}
            expenses={monthlyData.expenses}
            savings={monthlyData.savings}
          />
        )}

        {activeTab === 'expenses' && <ExpenseForm />}
        {activeTab === 'income' && <IncomeForm />}
        {activeTab === 'categories' && <CategoryList categories={monthlyData.categories} />}

        <div className="charts-section">
          <div className="chart-container">
            <h3>Expense Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={monthlyData.categories}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#7c3aed"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container">
            <h3>Monthly Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="income"
                  stackId="1"
                  stroke="#7c3aed"
                  fill="#7c3aed"
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stackId="2"
                  stroke="#ef4444"
                  fill="#ef4444"
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stackId="3"
                  stroke="#10b981"
                  fill="#10b981"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
