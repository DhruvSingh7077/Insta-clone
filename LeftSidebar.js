// src/components/LeftSidebar.js

import React, { useContext, useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import './LeftSidebar.css'; // 👈 Create this CSS file in same folder

const LeftSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
        {/* Sidebar Links */}
        {[
          { icon: "house-door", label: "Home" },
          { icon: "search", label: "Search" },
          { icon: "compass", label: "Explore" },
          { icon: "camera-reels", label: "Reels" },
          { icon: "chat", label: "Messages" },
          { icon: "heart", label: "Notifications" },
          { icon: "plus-square", label: "Create" },
          { icon: "person", label: "Profile" }
        ].map((item, index) => (
          <li className="nav-item mb-3" key={index}>
            <a className="nav-link text-white d-flex align-items-center" href="/">
              <i className={`bi bi-${item.icon} me-3`}></i> {item.label}
            </a>
          </li>
        ))}

        {/* More Button with Dropdown */}
        <li className="nav-item mt-auto position-relative" ref={dropdownRef}>
          <button
            className="nav-link text-white d-flex align-items-center bg-transparent border-0"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <i className="bi bi-list me-3"></i> More
          </button>

          {showDropdown && (
            <div className="bg-dark text-white rounded p-2 position-absolute sidebar-dropdown">
              {[
                { icon: "gear", label: "Settings" },
                { icon: "clock-history", label: "Your activity" },
                { icon: "bookmark", label: "Saved" },
                { icon: "moon", label: "Switch appearance" },
                { icon: "flag", label: "Report a problem" },
                "divider",
                { icon: "chat-dots", label: "Threads" },
                { label: "Switch accounts" },
                { icon: "box-arrow-right", label: "Log out", danger: true, onClick: handleLogout }
              ].map((item, i) =>
                item === "divider" ? (
                  <hr className="bg-secondary my-2" key={i} />
                ) : (
                  <div
                    key={i}
                    className={`dropdown-item-custom ${item.danger ? "text-danger" : "text-white"}`}
                    onClick={item.onClick}
                  >
                    {item.icon && <i className={`bi bi-${item.icon} me-2`}></i>}
                    {item.label}
                  </div>
                )
              )}
            </div>
          )}
        </li>
      </ul>

      {/* Auth Info */}
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
