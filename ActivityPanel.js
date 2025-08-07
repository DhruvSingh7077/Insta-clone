import React from 'react';
import './ActivityPanel.css';

const ActivityPanel = ({ onClose, isOpen }) => {
  return (
    <div className="activity-overlay">
      <div className={`activity-panel ${isOpen ? 'active' : ''}`}>
        <div className="activity-header">
          <h4>Your activity</h4>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="activity-body">
          <ul className="activity-menu">
            <li>Interactions</li>
            <li>Photos and videos</li>
            <li>Account history</li>
            <li>Ad activity</li>
          </ul>
          <div className="activity-content">
            <p>You haven’t commented on anything</p>
            <small>When you comment on a photo or video, it'll show up here.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPanel;
