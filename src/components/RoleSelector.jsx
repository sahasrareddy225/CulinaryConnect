import React from 'react';

const RoleSelector = ({ selectedRole, onRoleSelect, showLabel = true }) => {
  const roles = [
    {
      id: 'user',
      name: 'USER',
      icon: '🍽',
      description: 'Explore and interact with recipes.',
      gradient: 'gradient-text-secondary',
      cardClass: 'user'
    },
    {
      id: 'chef',
      name: 'CHEF',
      icon: '👨‍🍳',
      description: 'Create, share and earn points.',
      gradient: 'gradient-text-primary',
      cardClass: 'chef'
    },
    {
      id: 'admin',
      name: 'ADMIN',
      icon: '👨‍💼',
      description: 'Manage and monitor platform.',
      gradient: 'gradient-text-tertiary',
      cardClass: 'admin'
    }
  ];

  return (
    <div className="role-selector">
      {showLabel && (
        <h3 className="role-selector-label">
          Login as <span className="gradient-text-primary">Role</span>
        </h3>
      )}
      <div className="role-cards">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`role-card ${role.cardClass} ${selectedRole === role.id ? 'active' : ''}`}
            onClick={() => onRoleSelect(role.id)}
          >
            <div className="role-icon">{role.icon}</div>
            <h4 className={`role-title ${role.gradient}`}>{role.name}</h4>
            <p className="role-description">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
