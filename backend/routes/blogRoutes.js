const express = require('express');
const { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, createBlog);
router.get('/:id', getBlogById);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

module.exports = router;
