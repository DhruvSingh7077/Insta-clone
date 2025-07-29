const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const verifyToken = require("../middleware/verifyToken");


// GET user by ID
router.get("/:id",  async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json("User not found");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to get user", err });
  }
});

// UPDATE user
router.put("/:id", verifyToken, async (req, res) => {
   if (req.user.id !== req.params.id)
    return res.status(403).json("You can update only your own account");
  try {

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).select("-password"); // Exclude password from response

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user", err });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user", err });
  }
});

// TOGGLE bookmark (save/unsave a post)
router.put("/bookmark/:postId", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { postId } = req.params;

    if (!user.bookmarks) user.bookmarks = [];

    const index = user.bookmarks.indexOf(postId);

    if (index > -1) {
      // Post is already bookmarked → remove
      user.bookmarks.splice(index, 1);
    } else {
      // Add bookmark
      user.bookmarks.push(postId);
    }

    await user.save();
    res.status(200).json({ message: "Bookmark toggled", bookmarks: user.bookmarks });
  } catch (err) {
    res.status(500).json({ error: "Failed to toggle bookmark", err });
  }
});


module.exports = router;
