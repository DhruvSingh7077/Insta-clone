import React from 'react';
import './ActivityPanel.css';

const ActivityPanel = ({ onClose }) => {
  return (
    <div className="activity-panel bg-dark text-white h-100 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Your activity</h4>
        <button
          className="btn btn-link text-white"
          onClick={onClose}
          style={{ fontSize: '1.5rem' }}
        >
          &times;
        </button>
      </div>
      <div className="d-flex">
        <div className="me-4">
          <p className="mb-2">Interactions</p>
          <p className="mb-2">Photos and videos</p>
          <p className="mb-2">Account history</p>
          <p className="mb-2">Ad activity</p>
        </div>
        <div>
          <p>You haven’t commented on anything</p>
          <small>When you comment on a photo or video, it'll show up here.</small>
        </div>
      </div>
    </div>
  );
};

export default ActivityPanel;
