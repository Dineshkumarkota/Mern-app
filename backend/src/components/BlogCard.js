// frontend/src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <Link to={`/blog/${blog._id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;
