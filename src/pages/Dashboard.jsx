import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import StatCard from '../components/StatCard';
import RecipeCard from '../components/RecipeCard';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  // TODO: replace with API call later
  const stats = [
    { icon: '📝', title: 'Recipes Posted', value: '24', gradient: 'gradient-primary' },
    { icon: '❤️', title: 'Likes Received', value: '1.2K', gradient: 'gradient-secondary' },
    { icon: '👥', title: 'Followers', value: '856', gradient: 'gradient-tertiary' },
    { icon: '💬', title: 'Comments', value: '432', gradient: 'gradient-quaternary' }
  ];

  // TODO: replace with API call later
  const recentRecipes = [
    {
      id: 1,
      title: 'Creamy Mushroom Risotto',
      chef: user?.name || 'Guest User',
      image: 'https://images.unsplash.com/photo-1586201375791-038852739b36?w=400&h=300&fit=crop',
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      title: 'Chocolate Lava Cake',
      chef: user?.name || 'Guest User',
      image: 'https://images.unsplash.com/photo-1612177672544-43b9c2e4a3d4?w=400&h=300&fit=crop',
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      title: 'Fresh Caesar Salad',
      chef: user?.name || 'Guest User',
      image: 'https://images.unsplash.com/photo-1550309789-7abf4bc1186f?w=400&h=300&fit=crop',
      likes: 156,
      comments: 28
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="welcome-title">
          Welcome back, {user?.name || 'Guest'} 👋
        </h1>
        <p className="welcome-subtitle">
          You're logged in as <span className="role-badge">{user?.role?.toUpperCase() || 'USER'}</span> • Here's what's happening with your culinary journey today
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            gradient={stat.gradient}
          />
        ))}
      </div>

      <div className="recent-section">
        <h2 className="section-title">Recent Recipes</h2>
        <div className="recent-recipes">
          {recentRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
