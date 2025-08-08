import React from "react";
import "./SearchPanel.css";

const SearchPanel = ({ isOpen, onClose }) => {
  return (
    <div className={`search-panel ${isOpen ? "active" : ""}`}>
      <div className="search-header">
        <h2>Search</h2>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <span className="clear-btn">&times;</span>
      </div>

      <div className="search-recent">
        <h4>Recent</h4>
        <p className="no-recent">No recent searches.</p>
      </div>
    </div>
  );
};

export default SearchPanel;
