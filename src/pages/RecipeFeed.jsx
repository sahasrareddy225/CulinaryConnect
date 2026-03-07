import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import './RecipeFeed.css';

const RecipeFeed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // TODO: replace with API call later
  const recipes = [
    {
      id: 1,
      title: 'Creamy Mushroom Risotto',
      chef: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1586201375791-038852739b36?w=400&h=300&fit=crop',
      likes: 234,
      comments: 45,
      category: 'main'
    },
    {
      id: 2,
      title: 'Chocolate Lava Cake',
      chef: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1612177672544-43b9c2e4a3d4?w=400&h=300&fit=crop',
      likes: 189,
      comments: 32,
      category: 'dessert'
    },
    {
      id: 3,
      title: 'Fresh Caesar Salad',
      chef: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1550309789-7abf4bc1186f?w=400&h=300&fit=crop',
      likes: 156,
      comments: 28,
      category: 'vegetarian'
    },
    {
      id: 4,
      title: 'Spicy Thai Noodles',
      chef: 'Alex Kumar',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
      likes: 298,
      comments: 67,
      category: 'quick'
    },
    {
      id: 5,
      title: 'Grilled Salmon',
      chef: 'Lisa Brown',
      image: 'https://images.unsplash.com/photo-1467003900940-1c1c724daa0a?w=400&h=300&fit=crop',
      likes: 412,
      comments: 89,
      category: 'main'
    },
    {
      id: 6,
      title: 'Veggie Buddha Bowl',
      chef: 'Tom Martinez',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      likes: 178,
      comments: 34,
      category: 'vegetarian'
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.chef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || recipe.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="recipe-feed">
      <div className="feed-header">
        <h1 className="feed-title">Explore Recipes</h1>
        
        <div className="feed-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search recipes, chefs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="feed-search"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="dessert">Desserts</option>
            <option value="quick">Quick Meals</option>
          </select>
        </div>
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-results">
          <p>No recipes found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeFeed;
