import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Show RightSidebar only on certain paths
  const showRightSidebar = location.pathname === '/';

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar (Always) */}
        <div className="col-2 bg-dark text-white">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className={showRightSidebar ? "col-7" : "col-10"}>
          {children}
        </div>

        {/* Optional Right Sidebar */}
        {showRightSidebar && (
          <div className="col-3">
            <RightSidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
