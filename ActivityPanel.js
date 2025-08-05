// components/ActivityPanel.js
import React from 'react';
import './ActivityPanel.css';

const ActivityPanel = ({ onClose }) => {
  return (
    <div className="activity-overlay">
      <div className="activity-panel">
        <div className="activity-header">
          <h3>Your activity</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>

        <div className="activity-body">
          <ul className="activity-menu">
            <li>Interactions</li>
            <li>Photos and videos</li>
            <li>Account history</li>
            <li>Ad activity</li>
          </ul>

          <div className="activity-content">
            <h4>You haven’t commented on anything</h4>
            <p>When you comment on a photo or video, it’ll show up here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPanel;
