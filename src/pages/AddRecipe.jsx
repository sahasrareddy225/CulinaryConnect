import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    steps: '',
    category: 'main'
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with API call later
    console.log('Submitting recipe:', { ...formData, image: selectedImage });
    alert('Recipe submitted successfully!');
    // Reset form
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      steps: '',
      category: 'main'
    });
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div className="add-recipe">
      <div className="add-recipe-header">
        <h1 className="page-title">Create New Recipe</h1>
        <p className="page-subtitle">Share your culinary creation with the community</p>
      </div>

      <div className="recipe-form-container">
        <form onSubmit={handleSubmit} className="recipe-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title" className="form-label">Recipe Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your recipe name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="main">Main Course</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="dessert">Dessert</option>
                <option value="quick">Quick Meal</option>
                <option value="appetizer">Appetizer</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Describe your recipe, what makes it special, and any tips..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ingredients" className="form-label">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="form-textarea"
              placeholder="List ingredients, one per line. Example:&#10;2 cups flour&#10;1 cup sugar&#10;3 eggs"
              rows="6"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="steps" className="form-label">Instructions</label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              className="form-textarea"
              placeholder="List cooking steps, one per step. Example:&#10;1. Preheat oven to 350°F&#10;2. Mix dry ingredients&#10;3. Add wet ingredients"
              rows="8"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Recipe Image</label>
            <div className="image-upload">
              <input
                type="file"
                id="image"
                accept="image/*"
                className="image-input"
                onChange={handleImageChange}
              />
              <label htmlFor="image" className="image-upload-label">
                {imagePreview ? (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Recipe preview" className="preview-img" />
                    <div className="preview-overlay">
                      <span className="upload-text">Click to change image</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="upload-icon">📷</span>
                    <span className="upload-text">Click to upload image</span>
                    <span className="upload-hint">PNG, JPG up to 10MB</span>
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => {
              setFormData({
                title: '',
                description: '',
                ingredients: '',
                steps: '',
                category: 'main'
              });
              setSelectedImage(null);
              setImagePreview(null);
            }}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Publish Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
