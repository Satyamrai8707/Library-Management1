import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MasterList.css'; // Import the corresponding CSS file

const MasterList = () => {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [activeIssues, setActiveIssues] = useState([]);
  const [overdueReturns, setOverdueReturns] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  const navigate = useNavigate();

  // Fetch data (for demonstration, replace with your API calls)
  useEffect(() => {
    // Sample data (replace with actual API calls)
    setBooks([
      { serialNo: '001', name: 'Book One', author: 'Author A', category: 'Fiction', status: 'Available', cost: '$20', procurementDate: '2023-01-10' },
      { serialNo: '002', name: 'Book Two', author: 'Author B', category: 'Science', status: 'Issued', cost: '$25', procurementDate: '2023-02-15' },
    ]);

    setMovies([
      { serialNo: 'M001', name: 'Movie One', director: 'Director A', category: 'Action', status: 'Available', cost: '$10', procurementDate: '2023-01-05' },
      { serialNo: 'M002', name: 'Movie Two', director: 'Director B', category: 'Drama', status: 'Issued', cost: '$12', procurementDate: '2023-02-10' },
    ]);

    setMemberships([
      { membershipId: 'M001', memberName: 'John Doe', membershipType: 'Premium', status: 'Active' },
      { membershipId: 'M002', memberName: 'Jane Smith', membershipType: 'Standard', status: 'Inactive' },
    ]);

    setActiveIssues([
      { serialNo: '001', bookName: 'Book One', issueDate: '2023-01-10', dueDate: '2023-02-10' },
    ]);

    setOverdueReturns([
      { serialNo: '002', bookName: 'Book Two', dueDate: '2023-01-20' },
    ]);

    setIssueRequests([
      { serialNo: '003', bookName: 'Book Three', requestDate: '2023-02-15' },
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
    <div className="master-list-page">
      <h1>Master List</h1>

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
              <th>Author Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Procurement Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.serialNo}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.status}</td>
                <td>{book.cost}</td>
                <td>{book.procurementDate}</td>
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
              <th>Director</th>
              <th>Category</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Procurement Date</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.serialNo}</td>
                <td>{movie.name}</td>
                <td>{movie.director}</td>
                <td>{movie.category}</td>
                <td>{movie.status}</td>
                <td>{movie.cost}</td>
                <td>{movie.procurementDate}</td>
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
              <th>Membership ID</th>
              <th>Member Name</th>
              <th>Membership Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((membership, index) => (
              <tr key={index}>
                <td>{membership.membershipId}</td>
                <td>{membership.memberName}</td>
                <td>{membership.membershipType}</td>
                <td>{membership.status}</td>
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
              <th>Book Name</th>
              <th>Issue Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {activeIssues.map((issue, index) => (
              <tr key={index}>
                <td>{issue.serialNo}</td>
                <td>{issue.bookName}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.dueDate}</td>
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
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {overdueReturns.map((returnItem, index) => (
              <tr key={index}>
                <td>{returnItem.serialNo}</td>
                <td>{returnItem.bookName}</td>
                <td>{returnItem.dueDate}</td>
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
              <th>Book Name</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {issueRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.serialNo}</td>
                <td>{request.bookName}</td>
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

export default MasterList;
