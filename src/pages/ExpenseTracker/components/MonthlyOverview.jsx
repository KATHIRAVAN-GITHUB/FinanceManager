import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './MonthlyOverview.css';

const MonthlyOverview = ({ income, expenses, savings }) => {
  const budgetData = [
    { name: 'Savings', value: savings },
    { name: 'Expenses', value: expenses }
  ];

  const COLORS = ['#10b981', '#ef4444'];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const calculatePercentage = (value, total) => {
    return ((value / total) * 100).toFixed(1);
  };

  return (
    <motion.div
      className="monthly-overview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-grid">
        <motion.div
          className="overview-card income"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Monthly Income</h3>
          <div className="amount">{formatCurrency(income)}</div>
          <div className="trend positive">+5.2% from last month</div>
        </motion.div>

        <motion.div
          className="overview-card expenses"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Monthly Expenses</h3>
          <div className="amount">{formatCurrency(expenses)}</div>
          <div className="trend negative">-2.1% from last month</div>
        </motion.div>

        <motion.div
          className="overview-card savings"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Monthly Savings</h3>
          <div className="amount">{formatCurrency(savings)}</div>
          <div className="trend positive">+8.3% from last month</div>
        </motion.div>

        <motion.div
          className="overview-card ratio"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Savings Ratio</h3>
          <div className="amount">{calculatePercentage(savings, income)}%</div>
          <div className="trend positive">+2.1% from last month</div>
        </motion.div>
      </div>

      <div className="charts-row">
        <div className="chart-container budget-distribution">
          <h3>Budget Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="financial-health">
          <h3>Financial Health</h3>
          <div className="health-metrics">
            <div className="metric">
              <span className="label">Savings Rate</span>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: `${calculatePercentage(savings, income)}%` }}
                ></div>
              </div>
              <span className="value">{calculatePercentage(savings, income)}%</span>
            </div>

            <div className="metric">
              <span className="label">Expense Ratio</span>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: `${calculatePercentage(expenses, income)}%` }}
                ></div>
              </div>
              <span className="value">{calculatePercentage(expenses, income)}%</span>
            </div>

            <div className="metric">
              <span className="label">Emergency Fund</span>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: "75%" }}
                ></div>
              </div>
              <span className="value">75%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MonthlyOverview;
