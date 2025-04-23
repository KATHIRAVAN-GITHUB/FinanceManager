import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/expense-tracker', label: 'Expenses', icon: '💰' },
    { path: '/emergency-fund', label: 'Emergency Fund', icon: '🏦' },
    { path: '/insurance', label: 'Insurance', icon: '🛡️' },
    { path: '/investments', label: 'Investments', icon: '📈' }
  ];

  const dropdownItems = [
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/tools', label: 'Financial Tools', icon: '🔧' },
    { path: '/goals', label: 'Goals', icon: '🎯' }
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="logo-text"
            >
              FinanceManager
            </motion.span>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="nav-section">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-content"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </motion.div>
              </Link>
            ))}

            <div className="dropdown">
              <button className="nav-item" onClick={toggleDropdown}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-content"
                >
                  <span className="nav-icon">⚙️</span>
                  <span className="nav-label">Settings</span>
                </motion.div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="dropdown-content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        <span className="nav-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
