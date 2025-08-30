// src/pages/ProfilePage.js
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProfilePage = ({ posts = [] }) => {
  const { user } = useContext(AuthContext);
  console.log("ProfilePage posts:", posts);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // ✅ Get posts from localStorage
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // ✅ Use posts from props (App.js) + saved ones
    const allPosts = posts.length > 0 ? posts : savedPosts;

    // ✅ Filter only current user's posts
    const filtered = allPosts.filter(
      (post) => post.userId === user?._id || post.userId === user?.id
    );
    setUserPosts(filtered);
  }, [posts, user]);
  return (
    <div className="container text-dark pt-4 profile-page">
      {/* Top Section */}
      <div className="d-flex align-items-center mb-4">
        <div className="me-5 position-relative">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="rounded-circle"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <i className="bi bi-camera-fill position-absolute top-50 start-50 translate-middle fs-5 text-dark"></i>
        </div>

        <div>
          <h4 className="mb-2">{user?.username || "username"}</h4>
          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-outline-secondary btn-sm">
              Edit profile
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              View archive
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-gear"></i>
            </button>
          </div>

          <div className="d-flex gap-4">
            <span>
              <strong>{userPosts.length}</strong> posts
            </span>
            <span>
              <strong>0</strong> followers
            </span>
            <span>
              <strong>6</strong> following
            </span>
          </div>

          <div className="mt-2">{user?.email || "mahendra@@"}</div>
        </div>
      </div>

      {/* New Post Button */}
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="d-flex flex-column align-items-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center border"
            style={{ width: "80px", height: "80px", borderColor: "#ccc" }}
          >
            <i className="bi bi-plus fs-3"></i>
          </div>
          <small className="mt-1">New</small>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex justify-content-center border-top border-bottom py-2 mb-4">
        <div className="mx-4 text-center">
          <i className="bi bi-grid-3x3 fs-5"></i>
        </div>
        <div className="mx-4 text-center">
          <i className="bi bi-bookmark fs-5"></i>
        </div>
        <div className="mx-4 text-center">
          <i className="bi bi-person-square fs-5"></i>
        </div>
      </div>

      {/* Posts Section */}
      {userPosts.length === 0 ? (
        // Empty Feed Message
        <div className="text-center mt-5">
          <div
            className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#efefef",
            }}
          >
            <i className="bi bi-camera fs-4"></i>
          </div>
          <h5>Share Photos</h5>
          <p>No posts yet.</p>
        </div>
      ) : (
        // Grid of posts
        <div
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {userPosts.map((post, index) => (
            <div key={post.id || index} style={{ border: "1px solid #ddd" }}>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="post"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              )}
              <p className="p-2">{post.caption}</p>
            </div>
          ))}
        </div>
      )}

      {/* Floating Message Button */}
      <div className="position-fixed bottom-0 end-0 m-4">
        <button className="btn btn-light shadow d-flex align-items-center gap-2 px-3 py-2 rounded-pill">
          <i className="bi bi-messenger"></i> Messages
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
