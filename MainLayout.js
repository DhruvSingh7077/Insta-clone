import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ActivityPanel from './ActivityPanel';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
    const [showActivityPanel, setShowActivityPanel] = useState(false);

  // Show RightSidebar only on certain paths
  const showRightSidebar = location.pathname === '/';

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar (Always) */}
        <div className="col-2 bg-dark text-white">
           <LeftSidebar onShowActivityPanel={() => setShowActivityPanel(true)} />
        </div>

       {/* Main Content */}
        <div className={showRightSidebar ? "col-7" : "col-10"}>
          {showActivityPanel ? (
            <ActivityPanel onClose={() => setShowActivityPanel(false)} />
          ) : (
            children
          )}
        </div>

        {/* Optional Right Sidebar */}
         {/* Right Sidebar (only when not showing ActivityPanel) */}
        {showRightSidebar && !showActivityPanel && (
          <div className="col-3">
            <RightSidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
