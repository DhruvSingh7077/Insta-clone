// src/components/LeftSidebar.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LeftSidebar = () => {
  return (
    <div className="d-flex flex-column align-items-start px-3 pt-4" style={{ minHeight: '100vh' }}>
      <h4 className="mb-4">Instagram</h4>

      <ul className="nav flex-column w-100">
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-house-door me-3"></i> Home
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-search me-3"></i> Search
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-compass me-3"></i> Explore
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-camera-reels me-3"></i> Reels
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-chat me-3"></i> Messages
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-heart me-3"></i> Notifications
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-plus-square me-3"></i> Create
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-person me-3"></i> Profile
          </a>
        </li>
        <li className="nav-item mt-auto">
          <a className="nav-link text-white d-flex align-items-center" href="/">
            <i className="bi bi-list me-3"></i> More
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
