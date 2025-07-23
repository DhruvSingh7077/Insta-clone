const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// CREATE a post
router.post("/create", async (req, res) => {
  try {
    // req.body should include userId, image or video, isReel, caption etc.
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post", err });
  }
});

// GET all posts (feed) with optional filtering by type (post/reel)
router.get("/all", async (req, res) => {
  try {
    const filter = {};
    if (req.query.type === "reel") filter.isReel = true;
    else if (req.query.type === "post") filter.isReel = false;

    const posts = await Post.find(filter).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", err });
  }
});

// GET posts by a specific user with optional filtering by type
router.get("/user/:userId", async (req, res) => {
  try {
    const filter = { userId: req.params.userId };
    if (req.query.type === "reel") filter.isReel = true;
    else if (req.query.type === "post") filter.isReel = false;

    const posts = await Post.find(filter);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user's posts", err });
  }
});

// Optional: GET only reels (if you want a dedicated route)
router.get("/reels", async (req, res) => {
  try {
    const reels = await Post.find({ isReel: true }).sort({ createdAt: -1 });
    res.status(200).json(reels);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reels", err });
  }
});

// DELETE a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found");

    // Optional: Check if the requester owns the post (auth required in real-world apps)
    await post.deleteOne();
    res.status(200).json("Post deleted successfully");
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post", err });
  }
});

module.exports = router;
