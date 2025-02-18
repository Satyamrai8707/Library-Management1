import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchResult.css'; // Import your CSS file for styling

const SearchResult = () => {
  const navigate = useNavigate();

  const [bookCode, setBookCode] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const [bookDetails, setBookDetails] = useState({
    bookName: '',
    authorName: '',
    serialNumber: ''
  });
  const [fineAmount, setFineAmount] = useState(0);
  const [returnStatus, setReturnStatus] = useState(''); // Track return book status
  const [payFineStatus, setPayFineStatus] = useState(false); // Track fine payment status
  
  // Handle check availability
  const handleCheckAvailability = () => {
    axios.get(`/api/check-availability/${bookCode}`)
      .then(response => {
        setIsAvailable(response.data.isAvailable);
      })
      .catch(error => {
        console.error('Error checking availability:', error);
      });
  };

  // Handle issue book
  const handleIssueBook = () => {
    const { bookName, authorName, serialNumber } = bookDetails;
    axios.post('/api/issue-book', { bookName, authorName, serialNumber })
      .then(response => {
        alert('Book issued successfully');
      })
      .catch(error => {
        console.error('Error issuing book:', error);
      });
  };

  // Handle return book
  const handleReturnBook = () => {
    axios.post('/api/return-book', { serialNumber: bookDetails.serialNumber })
      .then(response => {
        setReturnStatus('Book returned successfully');
      })
      .catch(error => {
        setReturnStatus('Error returning the book');
        console.error('Error returning book:', error);
      });
  };

  // Handle pay fine
  const handlePayFine = () => {
    if (fineAmount <= 0) {
      alert('Please enter a valid fine amount.');
      return;
    }

    axios.post('/api/pay-fine', { fineAmount })
      .then(response => {
        alert('Fine paid successfully');
        setFineAmount(0); // Reset fine amount after payment
        setPayFineStatus(true); // Update the fine payment status
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

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="transaction-page">
      <h1>Search Results</h1>

      <div className="nav-links">
        <button onClick={handleBack}>Back</button>
        <button onClick={() => navigate('/login/dashboard')}>Dashboard</button>
      </div>

      {/* Book Availability */}
      <div className="transaction-section">
        <h2>Is Book Available?</h2>
        <input
          type="text"
          placeholder="Enter Book Code"
          value={bookCode}
          onChange={(e) => setBookCode(e.target.value)}
        />
        <button onClick={handleCheckAvailability}>Check Availability</button>
        {isAvailable !== null && (
          <p>{isAvailable ? 'The book is available.' : 'The book is not available.'}</p>
        )}
      </div>

      {/* Issue Book */}
      <div className="transaction-section">
        <h2>Issue Book</h2>
        <div>
          <input
            type="text"
            placeholder="Book Name"
            value={bookDetails.bookName}
            onChange={(e) => setBookDetails({ ...bookDetails, bookName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author Name"
            value={bookDetails.authorName}
            onChange={(e) => setBookDetails({ ...bookDetails, authorName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Serial Number"
            value={bookDetails.serialNumber}
            onChange={(e) => setBookDetails({ ...bookDetails, serialNumber: e.target.value })}
          />
        </div>
        <button onClick={handleIssueBook}>Issue Book</button>
      </div>

      {/* Return Book */}
      <div className="transaction-section">
        <h2>Return Book</h2>
        <input
          type="text"
          placeholder="Serial Number"
          value={bookDetails.serialNumber}
          onChange={(e) => setBookDetails({ ...bookDetails, serialNumber: e.target.value })}
        />
        <div>
          <input type="radio" id="returned" name="returnStatus" value="Y" />
          <label htmlFor="returned">Yes</label>
          <input type="radio" id="not-returned" name="returnStatus" value="N" />
          <label htmlFor="not-returned">No</label>
        </div>
        <button onClick={handleReturnBook}>Return Book</button>
        {returnStatus && <p>{returnStatus}</p>}
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
        <div>
          <input type="radio" id="pay-fine" name="payFineStatus" value="Yes" checked={payFineStatus} />
          <label htmlFor="pay-fine">Yes</label>
          <input type="radio" id="not-pay-fine" name="payFineStatus" value="No" />
          <label htmlFor="not-pay-fine">No</label>
        </div>
        <button onClick={handlePayFine}>Pay Fine</button>
      </div>

      {/* Log Out */}
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default SearchResult;
