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
    },
    video: {
      type: String, // video URL for reels
    },
    isReel: {
      type: Boolean,
      default: false, // true if this is a reel (video post)
    },
    caption: {
      type: String,
      maxLength: 500,
    },
    likes: {
      type: [String], // array of userIds who liked the post
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

// Validation: either image or video must be present
PostSchema.pre("save", function (next) {
  if (!this.image && !this.video) {
    return next(new Error("Post must contain either an image or a video."));
  }
  next();
});

module.exports = mongoose.model("Post", PostSchema);
