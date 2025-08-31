// src/pages/CreatePost.js
import React, { useRef, useState } from "react";
import "./CreatePost.css";

const CreatePost = ({ showModal, setShowModal, onPost }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setCaption("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePost = () => {
    if (!selectedFile) {
      alert("Please select a file before posting.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user._id) {
        alert("Please log in to create a post.");
        return;
      }
      const newPost = {
        id: Date.now(),
        imageUrl: reader.result, // base64 string
        caption,
        createdAt: new Date().toISOString(),
        userId: user._id, // ✅ properly tie post to logged-in user
        username: user.username,
        avatar: user.profilePic || "/default-avatar.png",
      };

      if (onPost) onPost(newPost);

      // ✅ Also save to localStorage for persistence
      const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      // savedPosts.push(newPost);
      // localStorage.setItem("posts", JSON.stringify(savedPosts));
      const updatedPosts = [newPost, ...savedPosts];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      // Reset state + close modal
      handleRemoveFile();
      setShowModal(false);
    };
    reader.readAsDataURL(selectedFile);
  };

  if (!showModal) return null; // don't render unless modal is open

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Create new post</h5>
          <button
            className="btn-close"
            onClick={() => {
              handleRemoveFile();
              setShowModal(false);
            }}
          />
        </div>

        {/* Body */}
        <div className="modal-body text-center">
          {!previewUrl ? (
            <div className="upload-box">
              <i className="bi bi-images" style={{ fontSize: "3rem" }}></i>
              <p>Drag photos and videos here</p>
              <button
                className="btn btn-primary"
                onClick={() => fileInputRef.current.click()}
              >
                Select from computer
              </button>
              <input
                type="file"
                accept="image/*,video/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="preview-section">
              {selectedFile.type.startsWith("image/") ? (
                <img src={previewUrl} alt="preview" className="preview-image" />
              ) : (
                <video src={previewUrl} controls className="preview-video" />
              )}

              <textarea
                className="caption-input"
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />

              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleRemoveFile}
                >
                  Remove
                </button>
                <button className="btn btn-success" onClick={handlePost}>
                  Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
