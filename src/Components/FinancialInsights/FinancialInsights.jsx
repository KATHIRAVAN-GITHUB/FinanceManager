import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './FinancialInsights.css';

const data = [
  { month: 'Jan', savings: 4000, investment: 2400, expenses: 2400 },
  { month: 'Feb', savings: 3000, investment: 1398, expenses: 2210 },
  { month: 'Mar', savings: 2000, investment: 9800, expenses: 2290 },
  { month: 'Apr', savings: 2780, investment: 3908, expenses: 2000 },
  { month: 'May', savings: 1890, investment: 4800, expenses: 2181 },
  { month: 'Jun', savings: 2390, investment: 3800, expenses: 2500 },
];

const FinancialInsights = () => {
  const [chartRef, chartInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="financial-insights">
      <motion.div
        className="chart-section"
        ref={chartRef}
        initial={{ opacity: 0, y: 50 }}
        animate={chartInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Your Financial Overview</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="savings" stackId="1" stroke="#7c3aed" fill="#7c3aed" />
              <Area type="monotone" dataKey="investment" stackId="2" stroke="#3b82f6" fill="#3b82f6" />
              <Area type="monotone" dataKey="expenses" stackId="3" stroke="#ef4444" fill="#ef4444" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        className="insights-grid"
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="insight-card">
          <h3>Smart Savings</h3>
          <p>Build an emergency fund covering 3-6 months of expenses. Start with small, consistent deposits.</p>
          <div className="card-icon savings-icon"></div>
        </div>

        <div className="insight-card">
          <h3>Investment Strategy</h3>
          <p>Diversify your portfolio across stocks, bonds, and low-risk investments to minimize risk.</p>
          <div className="card-icon investment-icon"></div>
        </div>

        <div className="insight-card">
          <h3>Expense Management</h3>
          <p>Track your spending using the 50/30/20 rule: 50% needs, 30% wants, 20% savings.</p>
          <div className="card-icon expense-icon"></div>
        </div>

        <div className="insight-card">
          <h3>Financial Goals</h3>
          <p>Set SMART goals: Specific, Measurable, Achievable, Relevant, and Time-bound.</p>
          <div className="card-icon goals-icon"></div>
        </div>
      </motion.div>

      <motion.div
        className="recommendations"
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="section-title">Personalized Recommendations</h2>
        <div className="recommendation-cards">
          <motion.div
            className="recommendation-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4>Increase Your Savings</h4>
            <p>Based on your spending patterns, you could save an additional $300/month by optimizing your subscriptions.</p>
            <button className="action-button">View Details</button>
          </motion.div>

          <motion.div
            className="recommendation-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4>Investment Opportunity</h4>
            <p>Consider index funds for long-term growth. Historical returns average 7-10% annually.</p>
            <button className="action-button">Learn More</button>
          </motion.div>

          <motion.div
            className="recommendation-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4>Debt Management</h4>
            <p>Prioritize high-interest debt. You could save $1,200 annually by consolidating your loans.</p>
            <button className="action-button">Get Started</button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinancialInsights;
