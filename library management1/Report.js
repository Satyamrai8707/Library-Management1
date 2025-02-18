import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css'; // Import the corresponding CSS file

const Report = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  // Handle back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="report-page">
      <h1>Available Reports</h1>

      <div className="nav-links">
        <button onClick={handleBack}>Home</button>
      </div>

      {/* Reports List */}
      <div className="report-list">
        <button onClick={() => navigate('/reports/master-list-books')}>Master List of Books</button>
        <button onClick={() => navigate('/reports/master-list-movies')}>Master List of Movies</button>
        <button onClick={() => navigate('/reports/master-list-memberships')}>Master List of Memberships</button>
        <button onClick={() => navigate('/reports/active-issues')}>Active Issues</button>
        <button onClick={() => navigate('/reports/overdue-returns')}>Overdue Returns</button>
        <button onClick={() => navigate('/reports/pending-issue-requests')}>Pending Issue Requests</button>
      </div>

      {/* Log Out Button */}
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Report;
