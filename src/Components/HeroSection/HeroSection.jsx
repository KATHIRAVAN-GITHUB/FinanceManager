import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaChartLine, FaWallet, FaPiggyBank } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="hero-container mt-10"
      style={{ scale, opacity }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={itemVariants}
        >
          <h1 className="glow-text">Take Control of Your Finances</h1>
          <p>Smart tracking. Better decisions. Secure future.</p>
          
          <div className="cta-buttons">
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 51, 234, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
            <motion.button
              className="secondary-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 51, 234, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hero-features"
          variants={itemVariants}
        >
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Track Expenses</h3>
            <p>Monitor your spending in real-time</p>
          </div>
          <div className="feature-card">
            <FaWallet className="feature-icon" />
            <h3>Budget Smart</h3>
            <p>Set and achieve financial goals</p>
          </div>
          <div className="feature-card">
            <FaPiggyBank className="feature-icon" />
            <h3>Save More</h3>
            <p>Grow your savings automatically</p>
          </div>
        </motion.div>
      </div>

      <div className="hero-stats">
        <motion.div
          className="stat-item"
          variants={itemVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <h4>50K+</h4>
          <p>Active Users</p>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h4>$2M+</h4>
          <p>Money Tracked</p>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h4>4.9/5</h4>
          <p>User Rating</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;