import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CategoryList.css';

const CategoryList = ({ categories }) => {
  const [newCategory, setNewCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle category submission
    console.log('New category:', { name: newCategory, budget });
    setNewCategory('');
    setBudget('');
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (id) => {
    // Handle category deletion
    console.log('Delete category:', id);
  };

  const calculateProgress = (spent, budget) => {
    return (spent / budget) * 100;
  };

  return (
    <motion.div
      className="category-list-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="category-header">
        <h2>Expense Categories</h2>
        <form onSubmit={handleSubmit} className="category-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="New Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Monthly Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add Category
            </motion.button>
          </div>
        </form>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="category-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="category-info">
              <h3>{category.name}</h3>
              <div className="budget-info">
                <span className="spent">₹{category.value}</span>
                <span className="budget">of ₹5000</span>
              </div>
            </div>

            <div className="progress-container">
              <div 
                className="progress-bar"
                style={{
                  width: `${calculateProgress(category.value, 5000)}%`,
                  backgroundColor: calculateProgress(category.value, 5000) > 90 ? '#ef4444' : '#10b981'
                }}
              ></div>
            </div>

            <div className="category-actions">
              <button
                className="edit-button"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="category-summary">
        <h3>Category Overview</h3>
        <div className="summary-stats">
          <div className="stat-item">
            <span className="label">Total Categories</span>
            <span className="value">{categories.length}</span>
          </div>
          <div className="stat-item">
            <span className="label">Total Budget</span>
            <span className="value">₹25,000</span>
          </div>
          <div className="stat-item">
            <span className="label">Spent</span>
            <span className="value">₹18,500</span>
          </div>
          <div className="stat-item">
            <span className="label">Remaining</span>
            <span className="value">₹6,500</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryList;
