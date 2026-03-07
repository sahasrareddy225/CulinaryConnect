import React from 'react';
import './StatCard.css';

const StatCard = ({ icon, title, value, gradient }) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${gradient}`}>
        <span className="icon">{icon}</span>
      </div>
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
