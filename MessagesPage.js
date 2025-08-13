import React from "react";
import "./MessagesPage.css";

const MessagesPage = () => {
  return (
    <div className="messages-container">
      {/* Left sidebar */}
      <div className="messages-left">
        <div className="messages-header">
          <span className="username">mahendra121499865345</span>
          <button className="edit-btn">✏️</button>
        </div>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="messages-section">
          <h5>Messages</h5>
          <span className="request-link">Request (1)</span>
        </div>
        <p className="no-messages">No messages found.</p>
      </div>

      {/* Right content */}
      <div className="messages-right">
        <div className="messages-empty">
          <div className="icon-circle">💬</div>
          <h4>Your messages</h4>
          <p>Send a message to start a chat.</p>
          <button className="send-btn">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
