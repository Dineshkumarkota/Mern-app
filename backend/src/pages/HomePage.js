// frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { getBlogs } from '../services/api';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data.blogs);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;

