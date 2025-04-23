import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FinancialEducation.css';

const FinancialEducation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="financial-education" ref={ref}>
      <motion.div
        className="education-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Financial Education Hub
        </motion.h2>

        <div className="education-grid">
          <motion.div variants={itemVariants} className="education-card importance">
            <h3>Why Money Management Matters</h3>
            <ul>
              <li>Build long-term wealth and security</li>
              <li>Achieve financial independence</li>
              <li>Prepare for emergencies</li>
              <li>Reduce financial stress</li>
            </ul>
            <div className="card-image money-management"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="education-card investment">
            <h3>Investment Fundamentals</h3>
            <ul>
              <li>Understand risk and return</li>
              <li>Diversification strategies</li>
              <li>Long-term vs short-term investing</li>
              <li>Market analysis basics</li>
            </ul>
            <div className="card-image investment-basics"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="education-card strategy">
            <h3>Financial Strategy</h3>
            <ul>
              <li>Create a budget that works</li>
              <li>Debt management techniques</li>
              <li>Tax optimization strategies</li>
              <li>Retirement planning</li>
            </ul>
            <div className="card-image strategy-basics"></div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="learning-resources">
          <h3>Expert Financial Advice</h3>
          <div className="resources-grid">
            <motion.div
              className="resource-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="resource-icon video-icon"></div>
              <h4>Video Tutorials</h4>
              <p>Learn from expert-led video courses on personal finance and investment strategies.</p>
              <button className="resource-button">Watch Now</button>
            </motion.div>

            <motion.div
              className="resource-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="resource-icon article-icon"></div>
              <h4>Articles & Guides</h4>
              <p>Read comprehensive guides and articles on various financial topics.</p>
              <button className="resource-button">Read More</button>
            </motion.div>

            <motion.div
              className="resource-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="resource-icon calculator-icon"></div>
              <h4>Financial Calculators</h4>
              <p>Use our calculators to plan your investments and track your goals.</p>
              <button className="resource-button">Calculate</button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="cta-section">
          <h3>Start Your Financial Journey Today</h3>
          <p>Get personalized recommendations and create your financial plan</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinancialEducation;
