import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Issue.css';

const Issue = () => {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBooks([
      { serialNo: 'B001', name: 'Book One' },
      { serialNo: 'B002', name: 'Book Two' },
    ]);

    setMovies([
      { serialNo: 'M001', name: 'Movie One' },
      { serialNo: 'M002', name: 'Movie Two' },
    ]);

    setMemberships([
      { membershipId: 'M001', memberName: 'Alice Johnson' },
      { membershipId: 'M002', memberName: 'Bob Smith' },
    ]);

    setIssueRequests([
      { membershipId: 'M001', itemName: 'Book One', requestDate: '2024-02-15', fulfilledDate: '2024-02-17' },
      { membershipId: 'M002', itemName: 'Movie Two', requestDate: '2024-02-16', fulfilledDate: 'Pending' },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  return (
    <div className="issue-page">
      <h1>Issue Management</h1>
      <div className="section">
        <h2>Master List of Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.name}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Master List of Movies</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.name}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Master List of Memberships</h2>
        <ul>
          {memberships.map((member, index) => (
            <li key={index}>{member.memberName} ({member.membershipId})</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Issue Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Membership ID</th>
              <th>Name of Book/Movie</th>
              <th>Requested Date</th>
              <th>Request Fulfilled Date</th>
            </tr>
          </thead>
          <tbody>
            {issueRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.membershipId}</td>
                <td>{request.itemName}</td>
                <td>{request.requestDate}</td>
                <td>{request.fulfilledDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Issue;
