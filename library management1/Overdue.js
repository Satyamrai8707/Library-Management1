import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Overdue.css'; // Ensure you have an appropriate CSS file

const Overdue = () => {
  const [books, setBooks] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [activeIssues, setActiveIssues] = useState([]);
  const [overdueReturns, setOverdueReturns] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setBooks([
      { serialNo: 'B001', name: 'Book One', membershipId: 'M001', dateOfIssue: '2023-01-10', dateOfReturn: '2023-02-10' },
      { serialNo: 'B002', name: 'Book Two', membershipId: 'M002', dateOfIssue: '2023-01-15', dateOfReturn: '2023-02-15' },
    ]);

    setMemberships([
      { membershipId: 'M001', name: 'John Doe' },
      { membershipId: 'M002', name: 'Jane Smith' },
    ]);

    setOverdueReturns([
      { serialNo: 'B002', name: 'Book Two', membershipId: 'M002', dateOfIssue: '2023-01-15', dateOfReturn: '2023-02-15', fine: '$5' },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="overdue-page">
      <h1>Library Management</h1>
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
                <td>{book.membershipId}</td>
                <td>{book.dateOfIssue}</td>
                <td>{book.dateOfReturn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Master List of Memberships */}
      <div className="section">
        <h2>Master List of Memberships</h2>
        <table>
          <thead>
            <tr>
              <th>Membership Id</th>
              <th>Member Name</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((member, index) => (
              <tr key={index}>
                <td>{member.membershipId}</td>
                <td>{member.name}</td>
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
              <th>Book Name</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of Return</th>
              <th>Fine</th>
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
                <td>{overdue.fine}</td>
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

export default Overdue;
