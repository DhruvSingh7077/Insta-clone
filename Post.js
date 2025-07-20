const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // links post to the user
      required: true,
    },
    image: {
      type: String, // image URL or filename
      required: true,
    },
    caption: {
      type: String,
      maxLength: 500,
    },
    likes: {
      type: [String], // array of userIds who liked
      default: [],
    },
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
