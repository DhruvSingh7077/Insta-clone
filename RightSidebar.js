// src/components/RightSidebar.js
import React from 'react';

const suggestions = [
  { username: 'elon_musk', avatar: 'https://i.pravatar.cc/40?img=11' },
  { username: 'tech_guru', avatar: 'https://i.pravatar.cc/40?img=12' },
  { username: 'nature_lover', avatar: 'https://i.pravatar.cc/40?img=13' },
  { username: 'dev_dude', avatar: 'https://i.pravatar.cc/40?img=14' },
];

const RightSidebar = () => {
  return (
    <div className="p-3">
      {/* Logged in user info */}
      <div className="d-flex align-items-center mb-4">
        <img
          src="https://i.pravatar.cc/50?img=7"
          alt="profile"
          className="rounded-circle me-3"
          width="50"
          height="50"
        />
        <div>
          <strong>your_username</strong>
          <p className="text-muted small mb-0">Your Name</p>
        </div>
      </div>

      {/* Suggestions */}
      <div className="d-flex justify-content-between mb-2">
        <p className="text-muted fw-bold">Suggestions For You</p>
        <a href="/" className="small">See All</a>
      </div>

      {suggestions.map((user, i) => (
        <div key={i} className="d-flex align-items-center mb-3">
          <img
            src={user.avatar}
            alt={user.username}
            className="rounded-circle me-3"
            width="40"
            height="40"
          />
          <div className="flex-grow-1">
            <strong>{user.username}</strong>
            <p className="text-muted small mb-0">Suggested for you</p>
          </div>
          <button className="btn btn-link btn-sm text-primary p-0">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
