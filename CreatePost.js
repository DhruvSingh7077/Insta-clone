import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = ({ showModal, setShowModal }) => {
  return (
    <>
      {/* Modal */}
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
              <div className="upload-box">
                <i className="bi bi-images" style={{ fontSize: "3rem" }}></i>
                <p>Drag photos and videos here</p>
                <button className="btn btn-primary">
                  Select from computer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
