import React from "react";
import "./NotificationPanel.css";

const NotificationPanel = ({ onClose }) => {
  const suggestedUsers = [
    { username: "neeraj_goyal.2.0", name: "", img: "https://via.placeholder.com/40" },
    { username: "rudr4nsh_911", name: "Rudransh Shukla", img: "https://via.placeholder.com/40" },
    { username: "pallavi_marwaha", name: "Pallavi Marwaha", img: "https://via.placeholder.com/40" },
    { username: "padma.pandey799", name: "Padma Rishi Dixit", img: "https://via.placeholder.com/40" },
    { username: "travolong", name: "", img: "https://via.placeholder.com/40" }
  ];

  return (
    <div className="notification-panel">
      <div className="notification-header">
        <h2>Notifications</h2>
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>

      <div className="activity-section">
        <h4>Activity On Your Posts</h4>
        <p>When someone likes or comments on one of your posts, you'll see it here.</p>
      </div>

      <div className="suggested-section">
        <h4>Suggested for you</h4>
        {suggestedUsers.map((user, index) => (
          <div className="suggested-user" key={index}>
            <img src={user.img} alt={user.username} className="user-img" />
            <div className="user-info">
              <span className="username">{user.username}</span>
              <span className="name">{user.name}</span>
              <span className="suggested">Suggested for you</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
