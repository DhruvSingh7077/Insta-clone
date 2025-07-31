// src/components/LeftSidebar.js

import React, { useContext, useState, useRef, useEffect } from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LeftSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
   const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

   const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


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
    
    {/* More Button */}
        <li className="nav-item mt-auto position-relative" ref={dropdownRef}>
          <button
            className="nav-link text-white d-flex align-items-center bg-transparent border-0"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            
            <i className="bi bi-list me-3"></i> More
          </button>

  {/* Dropdown Menu */}
          {showDropdown && (
            <div className="bg-dark text-white rounded p-2 position-absolute" style={{ zIndex: 1000, left: '100%', bottom: 0, width: '200px' }}>
              <div className="dropdown-item text-white py-1"><i className="bi bi-gear me-2"></i> Settings</div>
              <div className="dropdown-item text-white py-1"><i className="bi bi-clock-history me-2"></i> Your activity</div>
              <div className="dropdown-item text-white py-1"><i className="bi bi-bookmark me-2"></i> Saved</div>
              <div className="dropdown-item text-white py-1"><i className="bi bi-moon me-2"></i> Switch appearance</div>
              <div className="dropdown-item text-white py-1"><i className="bi bi-flag me-2"></i> Report a problem</div>
              <hr className="bg-secondary my-2" />
              <div className="dropdown-item text-white py-1"><i className="bi bi-chat-dots me-2"></i> Threads</div>
              <div className="dropdown-item text-white py-1">Switch accounts</div>
              <div className="dropdown-item text-danger py-1" onClick={handleLogout}><i className="bi bi-box-arrow-right me-2"></i> Log out</div>
            </div>
          )}
        </li>
      </ul>
      
       {/* 🔐 Auth Actions */}
      <div style={{ marginTop: "20px" }}>
        {user ? (
          <>
            <p className="text-white mb-2">Welcome, {user.username}</p>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white me-2">Sign In</Link> |{" "}
            <Link to="/register" className="text-white ms-2">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;