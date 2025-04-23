import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './EmergencyFund.css';

const EmergencyFund = () => {
  const [fund, setFund] = useState({
    currentAmount: 50000,
    targetAmount: 100000,
    monthlyContribution: 5000,
    timeline: 10,
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    targetAmount: '',
    monthlyContribution: '',
  });

  const progress = (fund.currentAmount / fund.targetAmount) * 100;
  const monthsToGoal = Math.ceil((fund.targetAmount - fund.currentAmount) / fund.monthlyContribution);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFund(prev => ({
      ...prev,
      targetAmount: Number(formData.targetAmount) || prev.targetAmount,
      monthlyContribution: Number(formData.monthlyContribution) || prev.monthlyContribution,
    }));
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="emergency-fund ">
      <header className="fund-header mt-20">
        <div className="header-content">
          <h1>Emergency Fund</h1>
          <p>Your financial safety net for unexpected expenses</p>
        </div>
        <motion.button
          className="update-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
        >
          Update Goals
        </motion.button>
      </header>

      <div className="fund-overview">
        <div className="progress-section">
          <div className="progress-container">
            <CircularProgressbar
              value={progress}
              text={`${Math.round(progress)}%`}
              styles={buildStyles({
                pathColor: `rgba(124, 58, 237, ${progress / 100})`,
                textColor: '#7c3aed',
                trailColor: 'rgba(124, 58, 237, 0.1)',
              })}
            />
          </div>
          <div className="progress-details">
            <h2>Fund Progress</h2>
            <p>Current Amount: ₹{fund.currentAmount.toLocaleString()}</p>
            <p>Target Amount: ₹{fund.targetAmount.toLocaleString()}</p>
            <p>Monthly Contribution: ₹{fund.monthlyContribution.toLocaleString()}</p>
            <p>Months to Goal: {monthsToGoal}</p>
          </div>
        </div>

        <div className="fund-stats">
          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Coverage Period</h3>
            <p>{Math.round(fund.currentAmount / (fund.targetAmount / 6))} months covered</p>
            <span className="target">Target: 6 months</span>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Monthly Savings</h3>
            <p>₹{fund.monthlyContribution.toLocaleString()}</p>
            <span className="info">Current contribution</span>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Time to Goal</h3>
            <p>{monthsToGoal} months</p>
            <span className="info">At current rate</span>
          </motion.div>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <motion.div
            className="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2>Update Emergency Fund Goals</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="targetAmount">Target Amount (₹)</label>
                <input
                  type="number"
                  id="targetAmount"
                  name="targetAmount"
                  value={formData.targetAmount}
                  onChange={handleChange}
                  placeholder="Enter target amount"
                />
              </div>
              <div className="form-group">
                <label htmlFor="monthlyContribution">Monthly Contribution (₹)</label>
                <input
                  type="number"
                  id="monthlyContribution"
                  name="monthlyContribution"
                  value={formData.monthlyContribution}
                  onChange={handleChange}
                  placeholder="Enter monthly contribution"
                />
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Save Changes</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <div className="tips-section">
        <h2>Emergency Fund Tips</h2>
        <div className="tips-grid">
          <motion.div
            className="tip-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="tip-icon">💡</span>
            <h3>Start Small</h3>
            <p>Begin with a goal of saving one month's expenses, then build up to six months.</p>
          </motion.div>

          <motion.div
            className="tip-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="tip-icon">🎯</span>
            <h3>Stay Consistent</h3>
            <p>Set up automatic transfers to your emergency fund each payday.</p>
          </motion.div>

          <motion.div
            className="tip-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="tip-icon">🏦</span>
            <h3>Separate Account</h3>
            <p>Keep your emergency fund in a separate high-yield savings account.</p>
          </motion.div>

          <motion.div
            className="tip-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="tip-icon">⚡</span>
            <h3>Quick Access</h3>
            <p>Ensure your emergency fund is easily accessible when needed.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFund;
