import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookAvailab.css'; // Make sure to update your CSS file name

const BookAvailab = () => {
  const navigate = useNavigate();
  
  const [bookCode, setBookCode] = useState('');
  const [author, setAuthor] = useState('');
  const [bookAvailability, setBookAvailability] = useState(null);
  const [fineAmount, setFineAmount] = useState(0);
  
  // Handle book availability
  const handleCheckAvailability = () => {
    axios.get(`/api/check-availability/${bookCode}`)
      .then(response => {
        setBookAvailability(response.data.isAvailable);
      })
      .catch(error => {
        console.error('Error checking availability:', error);
      });
  };

  // Issue book
  const handleIssueBook = () => {
    axios.post('/api/issue-book', { bookCode })
      .then(response => {
        alert('Book issued successfully');
      })
      .catch(error => {
        console.error('Error issuing book:', error);
      });
  };

  // Return book
  const handleReturnBook = () => {
    axios.post('/api/return-book', { bookCode })
      .then(response => {
        alert('Book returned successfully');
      })
      .catch(error => {
        console.error('Error returning book:', error);
      });
  };

  // Pay fine
  const handlePayFine = () => {
    axios.post('/api/pay-fine', { fineAmount })
      .then(response => {
        alert('Fine paid successfully');
        setFineAmount(0); // Reset fine amount after payment
      })
      .catch(error => {
        console.error('Error paying fine:', error);
      });
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  // Home button functionality
  const handleHome = () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/login/dashboard');
    }
  };

  return (
    <div className="bookavailab-page">
      <h1>Transactions</h1>

      <div className="nav-links">
      <button onClick={() => navigate('/TransactionPage')}>Transactions</button>
      <button onClick={handleHome}>Home</button>
      </div>

      {/* Book Availability */}
      <div className="transaction-section">
        <h2>Book Availability</h2>
        <input
          type="text"
          placeholder="Enter Book Code"
          value={bookCode}
          onChange={(e) => setBookCode(e.target.value)}
        />
        <button onClick={handleCheckAvailability}>Check Availability</button>
        {bookAvailability !== null && (
          <p>{bookAvailability ? 'The book is available.' : 'The book is not available.'}</p>
        )}
      </div>

      {/* Issue Book */}
      <div className="transaction-section">
        <h2>Issue Book</h2>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={bookCode}
          onChange={(e) => setBookCode(e.target.value)}
        />
        <select>
          <option value="option1">Select Book</option>
          <option value="option2">Book 1</option>
          <option value="option3">Book 2</option>
        </select>
        <button onClick={handleIssueBook}>Issue Book</button>
      </div>

      {/* Return Book */}
      <div className="transaction-section">
        <h2>Return Book</h2>
        <input
          type="text"
          placeholder="Enter Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select>
          <option value="option1">Select Author</option>
          <option value="author1">Author 1</option>
          <option value="author2">Author 2</option>
        </select>
        <button onClick={handleReturnBook}>Return Book</button>
      </div>

      {/* Pay Fine */}
      <div className="transaction-section">
        <h2>Pay Fine</h2>
        <input
          type="number"
          placeholder="Enter Fine Amount"
          value={fineAmount}
          onChange={(e) => setFineAmount(e.target.value)}
        />
        <button onClick={handlePayFine}>Pay Fine</button>
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default BookAvailab;
