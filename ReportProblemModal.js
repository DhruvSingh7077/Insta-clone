import React from "react";
import "./ReportProblemModal.css";

const ReportProblemModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Report a problem</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <textarea
          className="modal-textarea"
          placeholder="Please include as much info as possible..."
        ></textarea>
        <div className="modal-footer">
          <button className="send-btn">Send report</button>
          <button className="addfile-btn">Add file</button>
        </div>
        <p className="modal-info">
          Your Instagram username and browser information will be automatically included in your report.
        </p>
      </div>
    </div>
  );
};

export default ReportProblemModal;
