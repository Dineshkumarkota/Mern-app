// frontend/src/pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlog } from '../services/api';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlog(id);
      setBlog(data.blog);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;

