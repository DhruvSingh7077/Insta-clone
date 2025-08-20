// src/components/SwitchAccountModal.js
import React from "react";
import "./Modal.css"; // optional styling (overlay + modal box)

const SwitchAccountModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h5 className="mb-3">Switch accounts</h5>

        {/* Example account list */}
        <div className="account-item d-flex align-items-center mb-2">
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="rounded-circle me-2"
          />
          <span>mahendra121499865345</span>
        </div>

        <button className="btn btn-dark w-100 mb-2">Log into an Existing Account</button>
        <button className="btn btn-secondary w-100" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SwitchAccountModal;
