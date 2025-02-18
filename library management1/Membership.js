import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Membership.css'; // Import the corresponding CSS file

const Membership = () => {
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
      { serialNo: 'B001', name: 'Book One', author: 'Author A', category: 'Fiction', status: 'Available', cost: '$10', procurementDate: '2023-01-10' },
      { serialNo: 'B002', name: 'Book Two', author: 'Author B', category: 'Non-fiction', status: 'Issued', cost: '$15', procurementDate: '2023-02-05' },
    ]);

    setMovies([
      { serialNo: 'M001', name: 'Movie One', author: 'Director A', category: 'Action', status: 'Available', cost: '$20', procurementDate: '2023-01-10' },
      { serialNo: 'M002', name: 'Movie Two', author: 'Director B', category: 'Drama', status: 'Issued', cost: '$15', procurementDate: '2023-02-05' },
    ]);

    setMemberships([
      { membershipId: 'M001', memberName: 'John Doe', contactNumber: '1234567890', contactAddress: 'Address A', aadharCardNo: '1234-5678-9123', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active', amountPending: '$5' },
      { membershipId: 'M002', memberName: 'Jane Smith', contactNumber: '0987654321', contactAddress: 'Address B', aadharCardNo: '9876-5432-1098', startDate: '2023-02-01', endDate: '2023-11-30', status: 'Inactive', amountPending: '$0' },
    ]);

    setActiveIssues([
      { serialNo: 'B001', bookName: 'Book One', issueDate: '2023-01-10', dueDate: '2023-02-10' },
    ]);

    setOverdueReturns([
      { serialNo: 'M002', movieName: 'Movie Two', dueDate: '2023-01-20' },
    ]);

    setIssueRequests([
      { serialNo: 'B003', bookName: 'Book Three', requestDate: '2023-02-15' },
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
    <div className="membership-page">
      <h1>Membership Management</h1>

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
              <th>Author Name</th>
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
                <td>{movie.author}</td>
                <td>{movie.category}</td>
                <td>{movie.status}</td>
                <td>{movie.cost}</td>
                <td>{movie.procurementDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* List of Active Memberships */}
      <div className="section">
        <h2>List of Active Memberships</h2>
        <table>
          <thead>
            <tr>
              <th>Membership Id</th>
              <th>Name of Member</th>
              <th>Contact Number</th>
              <th>Contact Address</th>
              <th>Aadhar Card No</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Amount Pending (Fine)</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((membership, index) => (
              <tr key={index}>
                <td>{membership.membershipId}</td>
                <td>{membership.memberName}</td>
                <td>{membership.contactNumber}</td>
                <td>{membership.contactAddress}</td>
                <td>{membership.aadharCardNo}</td>
                <td>{membership.startDate}</td>
                <td>{membership.endDate}</td>
                <td>{membership.status}</td>
                <td>{membership.amountPending}</td>
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
              <th>Issue Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {activeIssues.map((issue, index) => (
              <tr key={index}>
                <td>{issue.serialNo}</td>
                <td>{issue.bookName || issue.movieName}</td>
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
              <th>Book/Movie Name</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {overdueReturns.map((overdue, index) => (
              <tr key={index}>
                <td>{overdue.serialNo}</td>
                <td>{overdue.bookName || overdue.movieName}</td>
                <td>{overdue.dueDate}</td>
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
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {issueRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.serialNo}</td>
                <td>{request.bookName || request.movieName}</td>
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

export default Membership;
