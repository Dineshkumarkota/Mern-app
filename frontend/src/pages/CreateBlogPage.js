// frontend/src/pages/CreateBlogPage.js
import React from 'react';
import BlogEditor from '../components/BlogEditor';
import { createBlog } from '../services/api';

const CreateBlogPage = () => {
  const handleBlogSubmit = async (blogData) => {
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage
    const response = await createBlog(blogData, token);
    // Handle blog creation success/failure here
    console.log(response);
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <BlogEditor onSubmit={handleBlogSubmit} />
    </div>
  );
};

export default CreateBlogPage;
