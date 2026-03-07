import React from 'react';
import StatCard from '../components/StatCard';
import RecipeCard from '../components/RecipeCard';
import './Profile.css';

const Profile = () => {
  // TODO: replace with API call later
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    role: 'CHEF',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Passionate chef with 10+ years of experience. Love creating innovative recipes and sharing culinary knowledge with the world.',
    joinedDate: 'January 2023'
  };

  // TODO: replace with API call later
  const stats = [
    { icon: '📝', title: 'Recipes Posted', value: '24', gradient: 'gradient-primary' },
    { icon: '👥', title: 'Followers', value: '1.2K', gradient: 'gradient-secondary' },
    { icon: '❤️', title: 'Total Likes', value: '5.6K', gradient: 'gradient-tertiary' },
    { icon: '⭐', title: 'Avg Rating', value: '4.8', gradient: 'gradient-quaternary' }
  ];

  // TODO: replace with API call later
  const userRecipes = [
    {
      id: 1,
      title: 'Creamy Mushroom Risotto',
      chef: 'John Doe',
      image: 'https://images.unsplash.com/photo-1586201375791-038852739b36?w=400&h=300&fit=crop',
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      title: 'Chocolate Lava Cake',
      chef: 'John Doe',
      image: 'https://images.unsplash.com/photo-1612177672544-43b9c2e4a3d4?w=400&h=300&fit=crop',
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      title: 'Fresh Caesar Salad',
      chef: 'John Doe',
      image: 'https://images.unsplash.com/photo-1550309789-7abf4bc1186f?w=400&h=300&fit=crop',
      likes: 156,
      comments: 28
    },
    {
      id: 4,
      title: 'Spicy Thai Noodles',
      chef: 'John Doe',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
      likes: 298,
      comments: 67
    }
  ];

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar-container">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <div className="role-badge">{user.role}</div>
          </div>
          
          <div className="profile-details">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-username">{user.username}</p>
            <p className="profile-bio">{user.bio}</p>
            <p className="profile-joined">Joined {user.joinedDate}</p>
          </div>
        </div>
        
        <button className="edit-profile-btn">
          Edit Profile
        </button>
      </div>

      <div className="profile-stats">
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

      <div className="profile-recipes">
        <h2 className="section-title">My Recipes</h2>
        <div className="recipes-grid">
          {userRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
