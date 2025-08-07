import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ActivityPanel from './ActivityPanel';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showActivityPanel, setShowActivityPanel] = useState(false);

  const showRightSidebar = location.pathname === '/';

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar (Always) */}
        <div className="col-2 bg-dark text-white">
          <LeftSidebar onShowActivityPanel={() => setShowActivityPanel(true)} />
        </div>

        {/* Main Content */}
        <div className={showRightSidebar ? 'col-7' : 'col-10'}>
          {children}
        </div>

        {/* Right Sidebar (only if ActivityPanel is not open) */}
        {showRightSidebar && !showActivityPanel && (
          <div className="col-3">
            <RightSidebar />
          </div>
        )}
      </div>

      {/* Activity Panel overlays everything except the left sidebar */}
      {showActivityPanel && (
        <ActivityPanel onClose={() => setShowActivityPanel(false)} isOpen={showActivityPanel} />
      )}
    </div>
  );
};

export default MainLayout;
