import React, { useState } from 'react';
import './Maintenance.css'; // Import the CSS file

function Maintenance() {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="header">Chart</div>
        <div className="menu">
          <div className="section" onClick={() => handleClick('housekeeping')}>
            Housekeeping
            {activeSection === 'housekeeping' && (
              <div className="sub-menu">
                <div>Add</div>
                <div>Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('membership')}>
            Membership
            {activeSection === 'membership' && (
              <div className="sub-menu">
                <div>Add</div>
                <div>Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('booksMovies')}>
            Books/Movies
            {activeSection === 'booksMovies' && (
              <div className="sub-menu">
                <div>Add</div>
                <div>Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('userManagement')}>
            User Management
            {activeSection === 'userManagement' && (
              <div className="sub-menu">
                <div>Add</div>
                <div>Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('logout')}>
            Log Out
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Welcome to the dashboard</h2>
        <p>Selected Section: {activeSection}</p>
      </div>
    </div>
  );
}

export default Maintenance;
