import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-overlay">
          <Link to={`/recipe/${recipe.id}`} className="view-btn">
            View Recipe
          </Link>
        </div>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-chef">by {recipe.chef}</p>
        
        <div className="recipe-stats">
          <button className="stat-btn like-btn">
            <span className="stat-icon">❤️</span>
            <span className="stat-count">{recipe.likes}</span>
          </button>
          
          <button className="stat-btn comment-btn">
            <span className="stat-icon">💬</span>
            <span className="stat-count">{recipe.comments}</span>
          </button>
          
          <button className="stat-btn share-btn">
            <span className="stat-icon">🔗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
