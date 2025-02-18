import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Bookissue.css'; // Import your CSS file for styling

const BookIssue = () => {
  const navigate = useNavigate();

  const [bookCode, setBookCode] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [bookList, setBookList] = useState([]);
  const [isAvailable, setIsAvailable] = useState(null);

  // Fetch book list for dropdown
  useEffect(() => {
    axios.get('/api/get-book-list')
      .then(response => {
        setBookList(response.data); // Assume the API provides a list of books
      })
      .catch(error => {
        console.error('Error fetching book list:', error);
      });
  }, []);

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

  // Handle issue book request
  const handleIssueBook = () => {
    const bookDetails = {
      bookName,
      authorName,
      issueDate,
      returnDate,
      remarks
    };
    
    axios.post('/api/issue-book', bookDetails)
      .then(response => {
        alert('Book issued successfully');
        resetForm();
      })
      .catch(error => {
        console.error('Error issuing book:', error);
      });
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  // Reset form after book issue
  const resetForm = () => {
    setBookName('');
    setAuthorName('');
    setIssueDate('');
    setReturnDate('');
    setRemarks('');
  };

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="transaction-page">
      <h1>Book Issue</h1>

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

      {/* Issue Book Form */}
      <div className="transaction-section">
        <h2>Issue Book</h2>
        <div>
          {/* Book Name Dropdown */}
          <label htmlFor="bookName">Select Book Name</label>
          <select 
            id="bookName" 
            value={bookName} 
            onChange={(e) => setBookName(e.target.value)}
          >
            <option value="">Select a Book</option>
            {bookList.map((book) => (
              <option key={book.id} value={book.name}>
                {book.name}
              </option>
            ))}
          </select>

          {/* Author Name Textbox */}
          <input
            type="text"
            id="authorName"
            placeholder="Enter Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />

          {/* Issue Date Calendar */}
          <input
            type="date"
            id="issueDate"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />

          {/* Return Date Calendar */}
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />

          {/* Remarks Text Area */}
          <textarea
            id="remarks"
            placeholder="Enter Remarks (Optional)"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <button onClick={handleIssueBook}>Issue Book</button>
      </div>

      {/* Log Out */}
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default BookIssue;
