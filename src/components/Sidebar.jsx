import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    { id: 1, name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { id: 2, name: 'Explore Recipes', icon: '🍽️', path: '/recipes' },
    { id: 3, name: 'Add Recipe', icon: '➕', path: '/add-recipe' },
    { id: 4, name: 'Profile', icon: '👤', path: '/profile' },
    { id: 5, name: 'Logout', icon: '🚪', path: '/logout', action: 'logout' }
  ];

  const handleMenuClick = (item) => {
    if (item.action === 'logout') {
      logout();
      navigate('/');
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🍳</span>
          <span className="logo-text">CulinaryConnect</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map(item => (
            <li key={item.id} className="nav-item">
              {item.action === 'logout' ? (
                <button 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </button>
              ) : (
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
