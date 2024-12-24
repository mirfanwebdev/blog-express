const PostModel = require("../models/Post");

// get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.getAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get single post by id
const getPostById = async (req, res) => {
  try {
    const post = await PostModel.getById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    const newPost = { title, content, createdAt: new Date() };
    const post = await PostModel.create(newPost);
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a post
const updatePost = async (req, res) => {
  try {
    const updates = req.body;
    const updatedPost = await PostModel.update(req.params.id, updates);
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a post
const deletePost = async (req, res) => {
  try {
    await PostModel.delete(req.params.id);
    res.status(204).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
