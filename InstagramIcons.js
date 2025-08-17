// src/icons/InstagramIcons.js
import React from "react";

export const HomeIcon = ({ active = false, size = 24, color = "currentColor" }) =>
  active ? (
    <svg aria-label="Home" fill={color} height={size} viewBox="0 0 24 24" width={size}>
      <path d="M9.005 16.545h6.005v-6.005H9.005v6.005z"></path>
      <path d="M22 23H2V11l10-9 10 9v12z"></path>
    </svg>
  ) : (
    <svg aria-label="Home" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
      <path d="M22 23H2V11l10-9 10 9v12z"></path>
    </svg>
  );

export const SearchIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="Search" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <circle cx="10.5" cy="10.5" r="7.5"></circle>
    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
  </svg>
);

export const ExploreIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="Explore" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const ReelsIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="Reels" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
    <line x1="2" y1="7" x2="22" y2="7"></line>
    <line x1="7" y1="2" x2="7" y2="7"></line>
    <polygon points="9 9 16 12 9 15 9 9"></polygon>
  </svg>
);

export const MessagesIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="Messenger" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <path d="M21 11.5a8.38 8.38 0 0 1-2.35 5.81L21 21l-4.19-1.15A8.38 8.38 0 1 1 21 11.5z"></path>
    <polyline points="7.5 12.5 10.5 15.5 16.5 9.5"></polyline>
  </svg>
);

export const NotificationsIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="Notifications" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export const CreateIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="New Post" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const ProfileIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="Profile" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M5.5 21a8.38 8.38 0 0 1 13 0"></path>
  </svg>
);

export const MoreIcon = ({ size = 24, color = "currentColor" }) => (
  <svg aria-label="More" fill="none" height={size} stroke={color} strokeWidth="2" viewBox="0 0 24 24" width={size}>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);
