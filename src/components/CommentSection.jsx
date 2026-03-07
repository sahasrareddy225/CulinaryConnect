import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with API call later
    console.log('Posting comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h3 className="comments-title">Comments ({comments.length})</h3>
      
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-input-group">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
            alt="User" 
            className="comment-avatar"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="comment-submit">
            Post
          </button>
        </div>
      </form>
      
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <img 
              src={comment.avatar} 
              alt={comment.user} 
              className="comment-avatar"
            />
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-user">{comment.user}</span>
                <span className="comment-time">{comment.time}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
