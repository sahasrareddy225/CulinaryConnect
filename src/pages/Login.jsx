import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('user');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create user object with role information
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email: formData.email,
      role: selectedRole,
      name: selectedRole === 'user' ? 'Food Lover' : selectedRole === 'chef' ? 'Chef' : 'Admin',
      avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=150&h=150&fit=crop&crop=face`
    };
    
    // TODO: replace with API call later
    console.log('Login attempt:', userData);
    
    // Login user and redirect
    login(userData);
    navigate('/dashboard');
  };

  const getButtonClass = () => {
    switch (selectedRole) {
      case 'user':
        return 'btn-gradient-secondary';
      case 'chef':
        return 'btn-gradient';
      case 'admin':
        return 'btn-gradient-tertiary';
      default:
        return 'btn-gradient';
    }
  };

  return (
    <div className="login-page">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="login-container">
          <div className="login-card glass">
            <div className="login-header">
              <h2 className="login-title">
                Welcome <span className="gradient-text-primary">Back</span>
              </h2>
              <p className="login-subtitle">
                Login to access your culinary dashboard
              </p>
            </div>

            {/* Role Selection */}
            <RoleSelector 
              selectedRole={selectedRole} 
              onRoleSelect={setSelectedRole}
              showLabel={true}
            />

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input glass-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input glass-input"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className={`btn ${getButtonClass()} login-btn`}>
                Login as {selectedRole.toUpperCase()}
              </button>
            </form>
            
            <div className="login-footer">
              <p className="register-prompt">
                Don't have an account?{' '}
                <Link to="/register" className="gradient-text-primary">
                  Create Account
                </Link>
              </p>
              <div className="divider">
                <span>OR</span>
              </div>
              <div className="quick-login">
                <p>Quick login as:</p>
                <div className="quick-roles">
                  <button 
                    onClick={() => setSelectedRole('user')}
                    className={`quick-role-btn ${selectedRole === 'user' ? 'active' : ''}`}
                  >
                    🍽 Food Lover
                  </button>
                  <button 
                    onClick={() => setSelectedRole('chef')}
                    className={`quick-role-btn ${selectedRole === 'chef' ? 'active' : ''}`}
                  >
                    👨‍🍳 Chef
                  </button>
                  <button 
                    onClick={() => setSelectedRole('admin')}
                    className={`quick-role-btn ${selectedRole === 'admin' ? 'active' : ''}`}
                  >
                    👨‍💼 Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
