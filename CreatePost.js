import React, { useRef, useState } from "react";
import "./CreatePost.css";

const CreatePost = ({ showModal, setShowModal }) => {
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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePost = () => {
    if (!selectedFile) {
      alert("Please select a file before posting.");
      return;
    }
    console.log("Posting:", {
      file: selectedFile,
      caption: caption,
    });

    // Reset
    setSelectedFile(null);
    setPreviewUrl(null);
    setCaption("");
    setShowModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h5>Create new post</h5>
              <button
                className="btn-close"
                onClick={() => setShowModal(false)}
              />
            </div>

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
                    <img
                      src={previewUrl}
                      alt="preview"
                      className="preview-image"
                    />
                  ) : (
                    <video
                      src={previewUrl}
                      controls
                      className="preview-video"
                    />
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
      )}
    </>
  );
};

export default CreatePost;
