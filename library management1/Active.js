import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Active.css'; // Import the corresponding CSS file

const Active = () => {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [activeIssues, setActiveIssues] = useState([]);
  const [overdueReturns, setOverdueReturns] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  const navigate = useNavigate();

  // Fetch data (for demonstration, replace with your API calls)
  useEffect(() => {
    // Sample data (replace with actual API calls)
    setBooks([
      { serialNo: 'B001', name: 'Book One', status: 'Available', membershipId: 'M001', dateOfIssue: '2023-01-10', dateOfReturn: '2023-02-10' },
      { serialNo: 'B002', name: 'Book Two', status: 'Issued', membershipId: 'M002', dateOfIssue: '2023-01-15', dateOfReturn: '2023-02-15' },
    ]);

    setMovies([
      { serialNo: 'M001', name: 'Movie One', status: 'Available', membershipId: 'M003', dateOfIssue: '2023-01-10', dateOfReturn: '2023-02-10' },
      { serialNo: 'M002', name: 'Movie Two', status: 'Issued', membershipId: 'M004', dateOfIssue: '2023-01-12', dateOfReturn: '2023-02-12' },
    ]);

    setActiveIssues([
      { serialNo: 'B001', name: 'Book One', membershipId: 'M001', dateOfIssue: '2023-01-10', dateOfReturn: '2023-02-10' },
      { serialNo: 'M001', name: 'Movie One', membershipId: 'M003', dateOfIssue: '2023-01-10', dateOfReturn: '2023-02-10' },
    ]);

    setOverdueReturns([
      { serialNo: 'B002', name: 'Book Two', membershipId: 'M002', dateOfIssue: '2023-01-15', dateOfReturn: '2023-02-15' },
    ]);

    setIssueRequests([
      { serialNo: 'B003', name: 'Book Three', membershipId: 'M005', requestDate: '2023-02-15' },
    ]);
  }, []);

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
    <div className="active-page">
      <h1>Active Management</h1>

      <div className="nav-links">
        <button onClick={handleBack}>Home</button>
      </div>

      {/* Master List of Books */}
      <div className="section">
        <h2>Master List of Books</h2>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name of Book</th>
              <th>Status</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of Return</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.serialNo}</td>
                <td>{book.name}</td>
                <td>{book.status}</td>
                <td>{book.membershipId}</td>
                <td>{book.dateOfIssue}</td>
                <td>{book.dateOfReturn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Master List of Movies */}
      <div className="section">
        <h2>Master List of Movies</h2>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name of Movie</th>
              <th>Status</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of Return</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.serialNo}</td>
                <td>{movie.name}</td>
                <td>{movie.status}</td>
                <td>{movie.membershipId}</td>
                <td>{movie.dateOfIssue}</td>
                <td>{movie.dateOfReturn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Active Issues */}
      <div className="section">
        <h2>Active Issues</h2>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Book/Movie Name</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of Return</th>
            </tr>
          </thead>
          <tbody>
            {activeIssues.map((issue, index) => (
              <tr key={index}>
                <td>{issue.serialNo}</td>
                <td>{issue.name}</td>
                <td>{issue.membershipId}</td>
                <td>{issue.dateOfIssue}</td>
                <td>{issue.dateOfReturn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overdue Returns */}
      <div className="section">
        <h2>Overdue Returns</h2>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Book/Movie Name</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of Return</th>
            </tr>
          </thead>
          <tbody>
            {overdueReturns.map((overdue, index) => (
              <tr key={index}>
                <td>{overdue.serialNo}</td>
                <td>{overdue.name}</td>
                <td>{overdue.membershipId}</td>
                <td>{overdue.dateOfIssue}</td>
                <td>{overdue.dateOfReturn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Issue Requests */}
      <div className="section">
        <h2>Issue Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Book/Movie Name</th>
              <th>Membership Id</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {issueRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.serialNo}</td>
                <td>{request.name}</td>
                <td>{request.membershipId}</td>
                <td>{request.requestDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Log Out Button */}
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Active;
