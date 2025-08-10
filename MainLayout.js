import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ActivityPanel from './ActivityPanel';
import { useLocation } from 'react-router-dom';
import SearchPanel from './SearchPanel';
import NotificationPanel from './NotificationPanel';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showActivityPanel, setShowActivityPanel] = useState(false);
   const [showSearchPanel, setShowSearchPanel] = useState(false);
   const [showNotificationPanel, setShowNotificationPanel] = useState(false);

  const showRightSidebar = location.pathname === '/';

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar (Always) */}
        <div className="col-2 bg-dark text-white">
          <LeftSidebar onShowActivityPanel={() => setShowActivityPanel(true)}
              onShowSearchPanel={() => setShowSearchPanel(true)}
                onShowNotificationPanel={() => setShowNotificationPanel(true)}
          />
        </div>

         {/* Middle Section */}
        <div className={showRightSidebar ? "col-7" : "col-10"}>
          {showActivityPanel ? (
            <ActivityPanel onClose={() => setShowActivityPanel(false)} />
          ) : showSearchPanel ? (
            <SearchPanel onClose={() => setShowSearchPanel(false)} />
          ) : showNotificationPanel ? (
            <NotificationPanel onClose={() => setShowNotificationPanel(false)} />
          ) : (
            children
          )}
        </div>
        {/* Right Sidebar (only if ActivityPanel is not open) */}
        {showRightSidebar && !showActivityPanel && (
          <div className="col-3">
            <RightSidebar />
          </div>
        )}
      {/* Panels */}
        {showActivityPanel && (
          <div className={showRightSidebar ? 'col-10' : 'col-10'}>
            <ActivityPanel onClose={() => setShowActivityPanel(false)} isOpen />
          </div>
        )}

        {showSearchPanel && (
          <div className={showRightSidebar ? 'col-5' : 'col-10'}>
            <SearchPanel onClose={() => setShowSearchPanel(false)} isOpen />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;