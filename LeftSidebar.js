// src/components/LeftSidebar.js

import React, { useContext } from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LeftSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

   const handleLogout = () => {
    logout();
    navigate("/login");
  };


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