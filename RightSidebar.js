// src/components/RightSidebar.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const suggestions = [
  { username: 'elon_musk', avatar: 'https://i.pravatar.cc/40?img=11' },
  { username: 'tech_guru', avatar: 'https://i.pravatar.cc/40?img=12' },
  { username: 'nature_lover', avatar: 'https://i.pravatar.cc/40?img=13' },
  { username: 'dev_dude', avatar: 'https://i.pravatar.cc/40?img=14' },
];

const RightSidebar = () => {
  const { user } = useContext(AuthContext); 
   const { darkMode } = useContext(ThemeContext);  // detect dark mode

   const textPrimaryClass = darkMode ? 'text-light' : 'text-dark';
  const textSecondaryClass = darkMode ? 'text-secondary' : 'text-muted';

  return (
    <div className="p-3">
      {/* Logged in user info */}
        <Link to="/profile" className={`text-decoration-none ${textPrimaryClass}`}>
      <div className="d-flex align-items-center mb-4" style={{ cursor: 'pointer' }}>
        <img
          src="https://i.pravatar.cc/50?img=7"
          alt="profile"
          className="rounded-circle me-3"
          width="50"
          height="50"
        />
         <div>
            <strong className={textPrimaryClass}>{user?.username || 'Guest'}</strong>
            <p className={`${textSecondaryClass} small mb-0`}>{user?.fullName || ''}</p>
          </div>
      </div>
      </Link>

      {/* Suggestions */}
      <div className="d-flex justify-content-between mb-2">
        <p className="text-muted fw-bold">Suggestions For You</p>
        <a href="/" className="small">See All</a>
      </div>

      {suggestions.map((suggestedUser, i) => (
        <div key={i} className="d-flex align-items-center mb-3">
          <img
            src={suggestedUser.avatar}
            alt={suggestedUser.username}
            className="rounded-circle me-3"
            width="40"
            height="40"
          />
              <div className="flex-grow-1">
            <strong className={textPrimaryClass}>{suggestedUser.username}</strong>
            <p className={`${textSecondaryClass} small mb-0`}>Suggested for you</p>
          </div>
          <button className="btn btn-link btn-sm text-primary p-0">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
