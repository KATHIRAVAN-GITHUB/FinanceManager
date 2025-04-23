import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  // Sample data for charts
  const financialData = [
    { month: "Jan", income: 50000, expenses: 30000, savings: 20000 },
    { month: "Feb", income: 52000, expenses: 31000, savings: 21000 },
    { month: "Mar", income: 51000, expenses: 29000, savings: 22000 },
    { month: "Apr", income: 53000, expenses: 32000, savings: 21000 },
    { month: "May", income: 54000, expenses: 31000, savings: 23000 },
    { month: "Jun", income: 55000, expenses: 33000, savings: 22000 },
  ];

  const quickActions = [
    { title: "Add Expense", icon: "💰", path: "/expense-tracker" },
    { title: "Add Income", icon: "📈", path: "/expense-tracker" },
    { title: "Set Goal", icon: "🎯", path: "/goals" },
    { title: "View Reports", icon: "📊", path: "/reports" },
  ];

  const stats = [
    {
      title: "Total Balance",
      value: "₹1,25,000",
      trend: "+5.2%",
      positive: true,
    },
    {
      title: "Monthly Savings",
      value: "₹22,000",
      trend: "+8.3%",
      positive: true,
    },
    { title: "Investments", value: "₹75,000", trend: "+12.5%", positive: true },
    {
      title: "Emergency Fund",
      value: "₹50,000",
      trend: "75%",
      subtitle: "of goal",
    },
  ];

  return (
    <div className="dashboard">

      <header className="dashboard-header mt-20">
        <div className="welcome-section">
          <h1>Welcome back, User!</h1>
          <p>Here's your financial overview</p>
        </div>
        <div className="quick-actions">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              className="action-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="action-icon">{action.icon}</span>
              <span className="action-title">{action.title}</span>
            </motion.div>
          ))}
        </div>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="stat-header">
              <h3>{stat.title}</h3>
              {stat.trend && (
                <span
                  className={`trend ${stat.positive ? "positive" : "neutral"}`}
                >
                  {stat.trend}
                </span>
              )}
            </div>
            <div className="stat-value">{stat.value}</div>
            {stat.subtitle && (
              <div className="stat-subtitle">{stat.subtitle}</div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h2>Financial Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={financialData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="income"
                stackId="1"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stackId="1"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="savings"
                stackId="1"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="insights-section">
        <h2>Financial Insights</h2>
        <div className="insights-grid">
          <motion.div
            className="insight-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="insight-icon">💡</div>
            <h3>Spending Pattern</h3>
            <p>
              Your highest expense category this month is Food & Dining at
              ₹8,000
            </p>
          </motion.div>

          <motion.div
            className="insight-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="insight-icon">🎯</div>
            <h3>Goal Progress</h3>
            <p>You're 75% towards your Emergency Fund goal</p>
          </motion.div>

          <motion.div
            className="insight-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="insight-icon">📈</div>
            <h3>Investment Update</h3>
            <p>Your investment portfolio has grown by 12.5% this quarter</p>
          </motion.div>

          <motion.div
            className="insight-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="insight-icon">💰</div>
            <h3>Savings Opportunity</h3>
            <p>You could save ₹2,000 more by reducing entertainment expenses</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
