import React from 'react';
import { Link } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-left fade-in-up">
              <h1 className="hero-title">
                Discover. <span className="gradient-text-primary">Create.</span> Inspire.
              </h1>
              <p className="hero-subtitle">
                Join the ultimate culinary community where food lovers, chefs, and creators come together to share their passion for amazing recipes.
              </p>
              <div className="hero-buttons">
                <Link to="/register" className="btn btn-gradient hero-btn">
                  Explore Recipes
                </Link>
                <Link to="/register" className="btn btn-white hero-btn-secondary">
                  Join as Chef
                </Link>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="floating-food">
                <div className="food-item food-1">🍕</div>
                <div className="food-item food-2">🍜</div>
                <div className="food-item food-3">🍰</div>
                <div className="food-item food-4">🥘</div>
                <div className="food-item food-5">🍣</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Highlight Section */}
      <section className="role-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Choose Your <span className="gradient-text-primary">Culinary Journey</span>
            </h2>
            <p className="section-subtitle">
              Every role offers a unique way to experience the world of food
            </p>
          </div>
          
          <div className="role-cards-grid">
            <div className="role-highlight-card user-card">
              <div className="role-icon-large">🍽</div>
              <h3 className="role-title">USER</h3>
              <p className="role-description">
                Explore and interact with amazing recipes from around the world. Like, comment, and save your favorite dishes.
              </p>
              <div className="role-features">
                <span className="feature-tag">Browse Recipes</span>
                <span className="feature-tag">Save Favorites</span>
                <span className="feature-tag">Rate & Review</span>
              </div>
            </div>
            
            <div className="role-highlight-card chef-card">
              <div className="role-icon-large">👨‍🍳</div>
              <h3 className="role-title">CHEF</h3>
              <p className="role-description">
                Create, share and earn points. Build your culinary reputation and connect with food enthusiasts globally.
              </p>
              <div className="role-features">
                <span className="feature-tag">Post Recipes</span>
                <span className="feature-tag">Earn Points</span>
                <span className="feature-tag">Build Brand</span>
              </div>
            </div>
            
            <div className="role-highlight-card admin-card">
              <div className="role-icon-large">👨‍💼</div>
              <h3 className="role-title">ADMIN</h3>
              <p className="role-description">
                Manage and monitor the platform. Ensure quality content and maintain a thriving culinary community.
              </p>
              <div className="role-features">
                <span className="feature-tag">Content Moderation</span>
                <span className="feature-tag">User Management</span>
                <span className="feature-tag">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">Culinary</span>
              <span className="logo-accent">Connect</span>
            </div>
            <p className="footer-text">
              © 2024 CulinaryConnect. Bringing the world together through food.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
