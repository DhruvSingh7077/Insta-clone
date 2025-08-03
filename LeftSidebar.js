import React, { useContext, useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import './LeftSidebar.css'; // Make sure this CSS file exists

const LeftSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
   const [showAppearanceMenu, setShowAppearanceMenu] = useState(false);
  const moreDropdownRef = useRef();
  const createDropdownRef = useRef();
    const appearanceMenuRef = useRef();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
         if (
        !moreDropdownRef.current?.contains(event.target) &&
        !createDropdownRef.current?.contains(event.target) &&
        !appearanceMenuRef.current?.contains(event.target)
      ) {
        setShowMoreDropdown(false);
        setShowCreateDropdown(false);
        setShowAppearanceMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

   const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  };

    useEffect(() => {
    const darkPref = localStorage.getItem("darkMode") === "true";
    if (darkPref) {
      document.body.classList.add("dark");
    }
  }, []);


  return (
    <div className="d-flex flex-column align-items-start px-3 pt-4" style={{ minHeight: '100vh' }}>
      <h4 className="mb-4">Instagram</h4>

      <ul className="nav flex-column w-100">
        {/* Sidebar Links */}
        <li className="nav-item mb-3">
          <Link to="/" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-house-door me-3"></i> Home
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/search" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-search me-3"></i> Search
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/explore" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-compass me-3"></i> Explore
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/reels" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-camera-reels me-3"></i> Reels
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/messages" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-chat me-3"></i> Messages
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/notifications" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-heart me-3"></i> Notifications
          </Link>
        </li>

        {/* Create Dropdown */}
        <li className="nav-item mb-3 position-relative" ref={createDropdownRef}>
          <button
            className="nav-link text-white d-flex align-items-center bg-transparent border-0 w-100"
            onClick={() => setShowCreateDropdown(prev => !prev)}
          >
            <i className="bi bi-plus-square me-3"></i> Create
          </button>

          {showCreateDropdown && (
            <div className="bg-dark text-white rounded p-2 position-absolute start-100 top-0 ms-2 shadow">
              <Link
                to="/create/post"
                className="dropdown-item-custom text-white d-flex align-items-center"
                onClick={() => setShowCreateDropdown(false)}
              >
                <i className="bi bi-images me-2"></i> Post
              </Link>
              <Link
                to="/create/ai"
                className="dropdown-item-custom text-white d-flex align-items-center"
                onClick={() => setShowCreateDropdown(false)}
              >
                <i className="bi bi-cpu me-2"></i> AI
              </Link>
            </div>
          )}
        </li>

        <li className="nav-item mb-3">
          <Link to="/profile" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-person me-3"></i> Profile
          </Link>
        </li>

           {/* More Dropdown */}
        <li className="nav-item mt-auto position-relative" ref={moreDropdownRef}>
          <button
            className="nav-link text-white d-flex align-items-center bg-transparent border-0"
            onClick={() => {
              setShowMoreDropdown((prev) => !prev);
              setShowAppearanceMenu(false); // hide appearance menu on toggle
            }}
          >
            <i className="bi bi-list me-3"></i> More
          </button>

          {showMoreDropdown && (
            <div className="bg-dark text-white rounded p-2 position-absolute sidebar-dropdown">
              {[
                { icon: "gear", label: "Settings" },
                { icon: "clock-history", label: "Your activity" },
                { icon: "bookmark", label: "Saved" },
                {
                  icon: "moon",
                  label: "Switch appearance",
                  onClick: () => {
                    setShowAppearanceMenu((prev) => !prev);
                  },
                },
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

  {/* Switch Appearance Submenu */}
      {showAppearanceMenu && (
        <div
          ref={appearanceMenuRef}
          className="bg-dark text-white rounded p-3 position-absolute start-100 top-50 translate-middle-y ms-2 shadow"
          style={{ zIndex: 1050 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span>Switch appearance</span>
            <i className="bi bi-moon"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Dark mode</span>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                checked={document.body.classList.contains("dark")}
                onChange={toggleDarkMode}
              />
            </div>
          </div>
        </div>
      )}
      
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
