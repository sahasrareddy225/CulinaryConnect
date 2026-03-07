import React from 'react';
import './AppNavbar.css';

const AppNavbar = () => {
  return (
    <nav className="app-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">
            <span className="logo-icon">🍳</span>
            <span className="logo-text">CulinaryConnect</span>
          </div>
        </div>
        
        <div className="navbar-center">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search recipes, chefs, ingredients..."
              className="search-input"
            />
            <button className="search-btn">
              🔍
            </button>
          </div>
        </div>
        
        <div className="navbar-right">
          <button className="notification-btn">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
              alt="Profile" 
              className="avatar-img"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
