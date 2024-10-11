// frontend/src/components/BlogEditor.js
import React, { useState } from 'react';

const BlogEditor = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogEditor;

