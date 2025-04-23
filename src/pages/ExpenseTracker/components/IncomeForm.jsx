import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './IncomeForm.css';

const IncomeForm = () => {
  const [income, setIncome] = useState({
    amount: '',
    source: '',
    date: '',
    description: '',
    category: '',
    isRecurring: false,
    frequency: 'monthly'
  });

  const sources = [
    'Salary',
    'Business',
    'Freelance',
    'Investments',
    'Rental',
    'Other'
  ];

  const categories = [
    'Primary Income',
    'Secondary Income',
    'Passive Income',
    'Bonus',
    'Other'
  ];

  const frequencies = [
    'daily',
    'weekly',
    'bi-weekly',
    'monthly',
    'quarterly',
    'annually'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle income submission
    console.log('Income submitted:', income);
    // Reset form
    setIncome({
      amount: '',
      source: '',
      date: '',
      description: '',
      category: '',
      isRecurring: false,
      frequency: 'monthly'
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setIncome(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <motion.div
      className="income-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Add New Income</h2>
      <form onSubmit={handleSubmit} className="income-form">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <div className="amount-input">
            <span className="currency">₹</span>
            <input
              type="number"
              id="amount"
              name="amount"
              value={income.amount}
              onChange={handleChange}
              placeholder="0.00"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="source">Income Source</label>
          <select
            id="source"
            name="source"
            value={income.source}
            onChange={handleChange}
            required
          >
            <option value="">Select Source</option>
            {sources.map(source => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={income.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date Received</label>
          <input
            type="date"
            id="date"
            name="date"
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="isRecurring"
              checked={income.isRecurring}
              onChange={handleChange}
            />
            Recurring Income
          </label>
        </div>

        {income.isRecurring && (
          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              name="frequency"
              value={income.frequency}
              onChange={handleChange}
            >
              {frequencies.map(freq => (
                <option key={freq} value={freq}>
                  {freq.charAt(0).toUpperCase() + freq.slice(1)}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={income.description}
            onChange={handleChange}
            placeholder="Add notes about this income..."
            rows="3"
          />
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add Income
        </motion.button>
      </form>

      <div className="income-summary">
        <h3>Income Summary</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="label">Monthly Income</span>
            <span className="value">₹50,000</span>
          </div>
          <div className="summary-item">
            <span className="label">YTD Income</span>
            <span className="value">₹2,50,000</span>
          </div>
          <div className="summary-item">
            <span className="label">Last Month</span>
            <span className="value">₹48,000</span>
          </div>
          <div className="summary-item">
            <span className="label">Growth</span>
            <span className="value positive">+4.2%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IncomeForm;
