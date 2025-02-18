import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // You can use axios to handle API calls
import './TransactionPage.css'; // Add custom CSS for styling

const TransactionPage = () => {
  const navigate = useNavigate();
  
  const [bookCode, setBookCode] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const [fineAmount, setFineAmount] = useState(0);
  
  // Handle check availability and navigate to BookAvailab page
  const handleCheckAvailability = () => {
    axios.get(`/api/check-availability/${bookCode}`)
      .then(response => {
        setIsAvailable(response.data.isAvailable);
        navigate('/BookAvailab'); // Navigate to the BookAvailab page
      })
      .catch(error => {
        console.error('Error checking availability:', error);
      });
  };

  // Handle issue book request
  const handleIssueBook = () => {
    axios.post('/api/issue-book', { bookCode })
      .then(response => {
        alert('Book issued successfully');
      })
      .catch(error => {
        console.error('Error issuing book:', error);
      });
  };

  // Handle return book request
  const handleReturnBook = () => {
    axios.post('/api/return-book', { bookCode })
      .then(response => {
        alert('Book returned successfully');
      })
      .catch(error => {
        console.error('Error returning book:', error);
      });
  };

  // Handle pay fine request
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

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  // Home button functionality
  const handleHome = () => {
    const role = localStorage.getItem('role'); // Check the role from localStorage
    if (role === 'admin') {
      navigate('/admin/dashboard'); // Redirect to admin dashboard
    } else {
      navigate('/login/dashboard'); // Redirect to user dashboard
    }
  };

  return (
    <div className="transaction-page">
      <h1>Transactions</h1>
      
      <div className="nav-links">
        <button onClick={handleHome}>Home</button> {/* Home button */}
        <button onClick={() => navigate('/login/dashboard')}>Dashboard</button>
      </div>

      {/* Book Availability */}
      <div className="transaction-section">
        <h2>Is Book Available?</h2>
        
        <button onClick={handleCheckAvailability}>Check Availability</button>
        {isAvailable !== null && (
          <p>{isAvailable ? 'The book is available.' : 'The book is not available.'}</p>
        )}
      </div>

      {/* Issue Book */}
      <div className="transaction-section">
        <h2>Issue Book</h2>
        <button onClick={handleIssueBook}>Issue Book</button>
      </div>

      {/* Return Book */}
      <div className="transaction-section">
        <h2>Return Book</h2>
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

      {/* Back and Log Out Buttons */}
      <button className="back-btn" onClick={handleBack}>Back</button>
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default TransactionPage;
