import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // TODO: replace with API call later
  const recipe = {
    id: id,
    title: 'Creamy Mushroom Risotto',
    chef: 'Sarah Johnson',
    chefAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1586201375791-038852739b36?w=800&h=400&fit=crop',
    likes: 234,
    description: 'A rich and creamy risotto that brings together the earthy flavors of mushrooms with the comforting texture of perfectly cooked Arborio rice. This restaurant-quality dish is surprisingly easy to make at home.',
    ingredients: [
      '1½ cups Arborio rice',
      '4 cups chicken or vegetable broth',
      '2 cups mixed mushrooms, sliced',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '½ cup white wine',
      '½ cup Parmesan cheese',
      '2 tbsp butter',
      'Fresh parsley',
      'Salt and pepper to taste'
    ],
    steps: [
      'Heat the broth in a saucepan and keep it simmering.',
      'In a large pan, melt 1 tbsp butter and sauté onions until translucent.',
      'Add garlic and mushrooms, cook until mushrooms are golden.',
      'Add rice and stir for 2 minutes until coated.',
      'Pour in wine and stir until absorbed.',
      'Add broth one ladle at a time, stirring constantly.',
      'Continue until rice is creamy and tender (about 20 minutes).',
      'Remove from heat and stir in Parmesan and remaining butter.',
      'Season with salt, pepper, and garnish with parsley.'
    ]
  };

  // TODO: replace with API call later
  const comments = [
    {
      user: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      text: 'This recipe is absolutely amazing! My family loved it.',
      time: '2 hours ago'
    },
    {
      user: 'David Miller',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      text: 'Perfect instructions! The risotto turned out exactly like in a restaurant.',
      time: '5 hours ago'
    },
    {
      user: 'Sophie Anderson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      text: 'Made this for dinner tonight. Absolutely delicious!',
      time: '1 day ago'
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    // TODO: replace with API call later
    console.log('Recipe liked:', !isLiked);
  };

  return (
    <div className="recipe-details">
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} className="recipe-hero-image" />
        <div className="recipe-hero-overlay">
          <h1 className="recipe-title">{recipe.title}</h1>
          <div className="recipe-meta">
            <img src={recipe.chefAvatar} alt={recipe.chef} className="chef-avatar" />
            <span className="chef-name">by {recipe.chef}</span>
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-main">
          <div className="recipe-description">
            <h2>About this recipe</h2>
            <p>{recipe.description}</p>
          </div>

          <div className="recipe-actions">
            <button 
              className={`like-btn ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              <span className="like-icon">{isLiked ? '❤️' : '🤍'}</span>
              <span className="like-count">{recipe.likes + (isLiked ? 1 : 0)}</span>
            </button>
          </div>

          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="recipe-steps">
            <h2>Instructions</h2>
            <ol className="steps-list">
              {recipe.steps.map((step, index) => (
                <li key={index} className="step-item">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="recipe-sidebar">
          <CommentSection comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
