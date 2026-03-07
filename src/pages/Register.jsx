import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import { useAuth } from '../contexts/AuthContext';
import './Register.css';

const Register = () => {
  const [selectedRole, setSelectedRole] = useState('user');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Create user object with role information
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      username: formData.username,
      email: formData.email,
      role: selectedRole,
      name: formData.username,
      avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=150&h=150&fit=crop&crop=face`
    };
    
    // TODO: replace with API call later
    console.log('Registration attempt:', userData);
    
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
    <div className="register-page">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="register-container">
          <div className="register-card glass">
            <div className="register-header">
              <h2 className="register-title">
                Join <span className="gradient-text-primary">CulinaryConnect</span>
              </h2>
              <p className="register-subtitle">
                Start your culinary journey today
              </p>
            </div>

            {/* Role Selection */}
            <RoleSelector 
              selectedRole={selectedRole} 
              onRoleSelect={setSelectedRole}
              showLabel={true}
            />

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="input glass-input"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                
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
              </div>
              
              <div className="form-row">
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
                
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input glass-input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className={`btn ${getButtonClass()} register-btn`}>
                Create {selectedRole === 'user' ? 'User' : selectedRole === 'chef' ? 'Chef' : 'Admin'} Account
              </button>
            </form>
            
            <div className="register-footer">
              <p className="login-prompt">
                Already have an account?{' '}
                <Link to="/login" className="gradient-text-primary">
                  Login Here
                </Link>
              </p>
              <div className="divider">
                <span>OR</span>
              </div>
              <div className="quick-register">
                <p>Quick join as:</p>
                <div className="quick-roles">
                  <button 
                    onClick={() => setSelectedRole('user')}
                    className={`quick-role-btn ${selectedRole === 'user' ? 'active' : ''}`}
                  >
                    🍽 Food Enthusiast
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

export default Register;
