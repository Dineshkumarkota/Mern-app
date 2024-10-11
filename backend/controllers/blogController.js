const Blog = require('../models/blog');

// Get all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new blog
exports.createBlog = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const newBlog = new Blog({ title, content, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a blog
exports.updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: "Blog deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a blog post
exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const blog = new Blog({ title, content });
    await blog.save();
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
