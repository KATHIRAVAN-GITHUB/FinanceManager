import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Insurance.css';

const Insurance = () => {
  const [insurances, setInsurances] = useState([
    {
      id: 1,
      type: 'Health',
      provider: 'ABC Insurance',
      policyNumber: 'H123456789',
      coverage: 500000,
      premium: 15000,
      renewalDate: '2024-12-31',
      beneficiaries: ['Self', 'Spouse'],
      documents: ['Policy Document', 'Health Records'],
    },
    {
      id: 2,
      type: 'Life',
      provider: 'XYZ Life',
      policyNumber: 'L987654321',
      coverage: 2000000,
      premium: 25000,
      renewalDate: '2024-10-15',
      beneficiaries: ['Spouse', 'Children'],
      documents: ['Policy Document', 'Medical Report'],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    provider: '',
    policyNumber: '',
    coverage: '',
    premium: '',
    renewalDate: '',
    beneficiaries: '',
    documents: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInsurance = {
      id: Date.now(),
      ...formData,
      beneficiaries: formData.beneficiaries.split(',').map(b => b.trim()),
      documents: formData.documents.split(',').map(d => d.trim()),
      coverage: Number(formData.coverage),
      premium: Number(formData.premium),
    };
    setInsurances([...insurances, newInsurance]);
    setShowForm(false);
    setFormData({
      type: '',
      provider: '',
      policyNumber: '',
      coverage: '',
      premium: '',
      renewalDate: '',
      beneficiaries: '',
      documents: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotalCoverage = () => {
    return insurances.reduce((total, insurance) => total + insurance.coverage, 0);
  };

  const calculateTotalPremium = () => {
    return insurances.reduce((total, insurance) => total + insurance.premium, 0);
  };

  return (
    <div className="insurance-page">
      <header className="insurance-header mt-20">
        <div className="header-content">
          <h1>Insurance Portfolio</h1>
          <p>Manage your insurance policies and coverage</p>
        </div>
        <motion.button
          className="add-policy-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
        >
          Add New Policy
        </motion.button>
      </header>

      <div className="insurance-overview">
        <div className="overview-cards">
          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Total Coverage</h3>
            <p className="amount">₹{calculateTotalCoverage().toLocaleString()}</p>
            <span className="label">Across all policies</span>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Annual Premium</h3>
            <p className="amount">₹{calculateTotalPremium().toLocaleString()}</p>
            <span className="label">Total yearly cost</span>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Active Policies</h3>
            <p className="amount">{insurances.length}</p>
            <span className="label">Currently managed</span>
          </motion.div>
        </div>

        <div className="policies-section">
          <h2>Your Policies</h2>
          <div className="policies-grid">
            {insurances.map((insurance) => (
              <motion.div
                key={insurance.id}
                className="policy-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="policy-header">
                  <h3>{insurance.type} Insurance</h3>
                  <span className="provider">{insurance.provider}</span>
                </div>
                <div className="policy-details">
                  <div className="detail-row">
                    <span className="label">Policy Number:</span>
                    <span className="value">{insurance.policyNumber}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Coverage:</span>
                    <span className="value">₹{insurance.coverage.toLocaleString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Premium:</span>
                    <span className="value">₹{insurance.premium.toLocaleString()}/year</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Renewal Date:</span>
                    <span className="value">{new Date(insurance.renewalDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="policy-footer">
                  <div className="beneficiaries">
                    <h4>Beneficiaries</h4>
                    <div className="tags">
                      {insurance.beneficiaries.map((beneficiary, index) => (
                        <span key={index} className="tag">{beneficiary}</span>
                      ))}
                    </div>
                  </div>
                  <div className="documents">
                    <h4>Documents</h4>
                    <div className="tags">
                      {insurance.documents.map((document, index) => (
                        <span key={index} className="tag">{document}</span>
                      ))}
                    </div>
                  </div>
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
            <h2>Add New Insurance Policy</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="type">Insurance Type</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="e.g., Health, Life, Auto"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="provider">Provider</label>
                <input
                  type="text"
                  id="provider"
                  name="provider"
                  value={formData.provider}
                  onChange={handleChange}
                  placeholder="Insurance company name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="policyNumber">Policy Number</label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  placeholder="Enter policy number"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="coverage">Coverage Amount (₹)</label>
                  <input
                    type="number"
                    id="coverage"
                    name="coverage"
                    value={formData.coverage}
                    onChange={handleChange}
                    placeholder="Enter coverage amount"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="premium">Annual Premium (₹)</label>
                  <input
                    type="number"
                    id="premium"
                    name="premium"
                    value={formData.premium}
                    onChange={handleChange}
                    placeholder="Enter annual premium"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="renewalDate">Renewal Date</label>
                <input
                  type="date"
                  id="renewalDate"
                  name="renewalDate"
                  value={formData.renewalDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="beneficiaries">Beneficiaries (comma-separated)</label>
                <input
                  type="text"
                  id="beneficiaries"
                  name="beneficiaries"
                  value={formData.beneficiaries}
                  onChange={handleChange}
                  placeholder="e.g., Spouse, Children"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="documents">Documents (comma-separated)</label>
                <input
                  type="text"
                  id="documents"
                  name="documents"
                  value={formData.documents}
                  onChange={handleChange}
                  placeholder="e.g., Policy Document, Medical Report"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Add Policy</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Insurance;
