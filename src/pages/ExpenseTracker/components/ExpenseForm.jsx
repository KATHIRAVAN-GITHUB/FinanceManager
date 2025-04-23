import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    date: '',
    description: '',
    paymentMethod: '',
  });

  const categories = [
    'Housing',
    'Food',
    'Transportation',
    'Utilities',
    'Entertainment',
    'Healthcare',
    'Insurance',
    'Education',
    'Shopping',
    'Debt Payments',
    'Others'
  ];

  const paymentMethods = [
    'Cash',
    'Credit Card',
    'Debit Card',
    'UPI',
    'Net Banking',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle expense submission
    console.log('Expense submitted:', expense);
    // Reset form
    setExpense({
      amount: '',
      category: '',
      date: '',
      description: '',
      paymentMethod: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      className="expense-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <div className="amount-input">
            <span className="currency">₹</span>
            <input
              type="number"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              placeholder="0.00"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
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
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={expense.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            {paymentMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={expense.description}
            onChange={handleChange}
            placeholder="Add notes about this expense..."
            rows="3"
          />
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add Expense
        </motion.button>
      </form>

      <div className="recent-expenses">
        <h3>Recent Expenses</h3>
        <div className="expense-list">
          {/* Placeholder for recent expenses */}
          <div className="expense-item">
            <div className="expense-info">
              <span className="expense-category">Food</span>
              <span className="expense-date">Today</span>
            </div>
            <span className="expense-amount">₹250</span>
          </div>
          <div className="expense-item">
            <div className="expense-info">
              <span className="expense-category">Transportation</span>
              <span className="expense-date">Yesterday</span>
            </div>
            <span className="expense-amount">₹100</span>
          </div>
          {/* Add more recent expenses */}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpenseForm;
