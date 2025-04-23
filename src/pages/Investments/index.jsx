import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Investments.css';

const Investments = () => {
  const [investments, setInvestments] = useState([
    {
      id: 1,
      type: 'Stocks',
      name: 'Diversified Portfolio',
      amount: 250000,
      returns: 12.5,
      allocation: 40,
      history: [
        { month: 'Jan', value: 230000 },
        { month: 'Feb', value: 235000 },
        { month: 'Mar', value: 240000 },
        { month: 'Apr', value: 245000 },
        { month: 'May', value: 250000 },
      ],
    },
    {
      id: 2,
      type: 'Mutual Funds',
      name: 'Index Fund',
      amount: 150000,
      returns: 10.2,
      allocation: 25,
      history: [
        { month: 'Jan', value: 140000 },
        { month: 'Feb', value: 142000 },
        { month: 'Mar', value: 145000 },
        { month: 'Apr', value: 148000 },
        { month: 'May', value: 150000 },
      ],
    },
    {
      id: 3,
      type: 'Fixed Deposits',
      name: 'Bank FD',
      amount: 100000,
      returns: 6.5,
      allocation: 15,
      history: [
        { month: 'Jan', value: 100000 },
        { month: 'Feb', value: 100000 },
        { month: 'Mar', value: 100000 },
        { month: 'Apr', value: 100000 },
        { month: 'May', value: 100000 },
      ],
    },
    {
      id: 4,
      type: 'Gold',
      name: 'Digital Gold',
      amount: 75000,
      returns: 8.0,
      allocation: 20,
      history: [
        { month: 'Jan', value: 70000 },
        { month: 'Feb', value: 71000 },
        { month: 'Mar', value: 73000 },
        { month: 'Apr', value: 74000 },
        { month: 'May', value: 75000 },
      ],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    amount: '',
    returns: '',
    allocation: '',
  });

  const COLORS = ['#8b5cf6', '#6366f1', '#ec4899', '#f59e0b'];

  const calculateTotalValue = () => {
    return investments.reduce((total, inv) => total + inv.amount, 0);
  };

  const calculateAverageReturns = () => {
    const totalReturns = investments.reduce((total, inv) => total + inv.returns, 0);
    return (totalReturns / investments.length).toFixed(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvestment = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
      returns: Number(formData.returns),
      allocation: Number(formData.allocation),
      history: [{ month: 'Current', value: Number(formData.amount) }],
    };
    setInvestments([...investments, newInvestment]);
    setShowForm(false);
    setFormData({
      type: '',
      name: '',
      amount: '',
      returns: '',
      allocation: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="investments-page">
      <header className="investments-header mt-20">
        <div className="header-content">
          <h1>Investment Portfolio</h1>
          <p>Track and manage your investments</p>
        </div>
        <motion.button
          className="add-investment-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
        >
          Add Investment
        </motion.button>
      </header>

      <div className="portfolio-overview">
        <div className="overview-cards">
          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Total Portfolio Value</h3>
            <p className="amount">₹{calculateTotalValue().toLocaleString()}</p>
            <span className="label">Current value</span>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Average Returns</h3>
            <p className="amount">{calculateAverageReturns()}%</p>
            <span className="label">Annual returns</span>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Total Investments</h3>
            <p className="amount">{investments.length}</p>
            <span className="label">Active investments</span>
          </motion.div>
        </div>

        <div className="charts-section">
          <div className="allocation-chart">
            <h2>Portfolio Allocation</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={investments}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="allocation"
                  >
                    {investments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="performance-chart">
            <h2>Portfolio Performance</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={investments[0]?.history}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="investments-list">
          <h2>Your Investments</h2>
          <div className="investments-grid">
            {investments.map((investment, index) => (
              <motion.div
                key={investment.id}
                className="investment-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="investment-header">
                  <h3>{investment.name}</h3>
                  <span className="type">{investment.type}</span>
                </div>
                <div className="investment-details">
                  <div className="detail-row">
                    <span className="label">Current Value:</span>
                    <span className="value">₹{investment.amount.toLocaleString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Returns:</span>
                    <span className="value">{investment.returns}%</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Allocation:</span>
                    <span className="value">{investment.allocation}%</span>
                  </div>
                </div>
                <div className="investment-chart">
                  <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={investment.history}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={COLORS[index % COLORS.length]}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <motion.div
            className="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2>Add New Investment</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="type">Investment Type</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="e.g., Stocks, Mutual Funds"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Investment Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter investment name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount">Amount (₹)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="returns">Returns (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    id="returns"
                    name="returns"
                    value={formData.returns}
                    onChange={handleChange}
                    placeholder="Enter returns"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="allocation">Allocation (%)</label>
                <input
                  type="number"
                  id="allocation"
                  name="allocation"
                  value={formData.allocation}
                  onChange={handleChange}
                  placeholder="Enter allocation percentage"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Add Investment</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Investments;
