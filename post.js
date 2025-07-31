import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Post = ({ post }) => {
  const { token, user } = useContext(AuthContext);

  const [likes, setLikes] = useState(post.likes || []);
  const [comments, setComments] = useState(post.comments || []);
  const [commentText, setCommentText] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/posts/${post._id}/like`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setLikes(data.likes);
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const handleBookmark = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/bookmark/${post._id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setIsBookmarked(data.bookmarks.includes(post._id));
    } catch (err) {
      console.error('Error bookmarking post:', err);
    }
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;

    try {
      const res = await fetch(`http://localhost:5000/api/posts/${post._id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: commentText }),
      });

      const data = await res.json();
      setComments(data.comments);
      setCommentText('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center bg-white">
        <img
          src={post.userId?.profilePic || 'https://i.pravatar.cc/40'}
          alt="avatar"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        <strong>{post.userId?.username || 'Unknown User'}</strong>
      </div>

      {post.image && (
        <img src={post.image} className="card-img-top" alt="post" />
      )}
      {post.video && (
        <video className="card-img-top" controls>
          <source src={post.video} type="video/mp4" />
        </video>
      )}

      <div className="card-body">
        <div className="mb-2">
          <i
            className={`bi ${likes?.includes(user?._id) ? 'bi-heart-fill text-danger' : 'bi-heart'} me-3`}
            onClick={handleLike}
            role="button"
          ></i>
          <i className="bi bi-chat me-3"></i>
          <i className="bi bi-send me-3"></i>
          <i
            className={`bi ${isBookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'} float-end`}
            onClick={handleBookmark}
            role="button"
          ></i>
        </div>

        <p className="mb-1"><strong>{post.userId?.username}</strong> {post.caption}</p>

        {/* Show last 2 comments */}
        {comments.slice(-2).map((c, i) => (
          <p className="mb-1 text-muted" key={i}>
            <strong>{c.userId?.username || 'User'}:</strong> {c.text}
          </p>
        ))}

        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control form-control-sm me-2"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleComment} className="btn btn-sm btn-primary">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
