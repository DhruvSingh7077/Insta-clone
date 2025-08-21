import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ActivityPanel from './ActivityPanel';
import { useLocation, useNavigate } from 'react-router-dom'; 
import SearchPanel from './SearchPanel';
import NotificationPanel from './NotificationPanel';
import ReportProblemModal from './ReportProblemModal';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();  
  
  const [showActivityPanel, setShowActivityPanel] = useState(false);
   const [showSearchPanel, setShowSearchPanel] = useState(false);
   const [showNotificationPanel, setShowNotificationPanel] = useState(false);
   const [showReportModal, setShowReportModal] = useState(false);


  const showRightSidebar = location.pathname === '/';

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar (Always) */}
        <div className="col-2 bg-dark text-white">
          <LeftSidebar onShowActivityPanel={() => setShowActivityPanel(true)}
              onShowSearchPanel={() => setShowSearchPanel(true)}
                onShowNotificationPanel={() => setShowNotificationPanel(true)}
                 onShowReportModal={() => setShowReportModal(true)}
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

           {/* Report Problem Modal */}
      {showReportModal && (
        <ReportProblemModal onClose={() => setShowReportModal(false)} />
      )}

   {/*  Floating Messages Button */}
      <button
        onClick={() => navigate("/messages")}
        className="btn btn-primary rounded-circle shadow-lg"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px"
        }}
      >
        💬
      </button>

    </div>
  );
};

export default MainLayout;