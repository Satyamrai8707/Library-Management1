import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Returnbook.css'; // Import the corresponding CSS file

const Returnbook = () => {
  const navigate = useNavigate();

  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [bookList, setBookList] = useState([]);
  const [serialNoList, setSerialNoList] = useState([]);

  // Fetch book list for dropdown
  useEffect(() => {
    axios.get('/api/get-book-list')
      .then(response => {
        setBookList(response.data); // Assume API provides book list
      })
      .catch(error => {
        console.error('Error fetching book list:', error);
      });

    axios.get('/api/get-serial-numbers')
      .then(response => {
        setSerialNoList(response.data); // Assume API provides serial numbers
      })
      .catch(error => {
        console.error('Error fetching serial numbers:', error);
      });
  }, []);

  // Handle return book request
  const handleReturnbook = () => {
    const bookDetails = {
      bookName,
      authorName,
      serialNo,
      issueDate,
      returnDate,
      remarks
    };
    
    axios.post('/api/return-book', bookDetails)
      .then(response => {
        alert('Book returned successfully');
        resetForm();
      })
      .catch(error => {
        console.error('Error returning book:', error);
      });
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  // Reset form after book return
  const resetForm = () => {
    setBookName('');
    setAuthorName('');
    setSerialNo('');
    setIssueDate('');
    setReturnDate('');
    setRemarks('');
  };

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="return-book-page">
      <h1>Return Book</h1>

      <div className="nav-links">
        <button onClick={handleBack}>Back</button>
        <button onClick={() => navigate('/login/dashboard')}>Dashboard</button>
      </div>

      {/* Return Book Form */}
      <div className="transaction-form">
        <div className="form-group">
          <label htmlFor="bookName">Select Book Name</label>
          <select 
            id="bookName" 
            value={bookName} 
            onChange={(e) => setBookName(e.target.value)}
            className="input-field"
          >
            <option value="">Select a Book</option>
            {bookList.map((book) => (
              <option key={book.id} value={book.name}>
                {book.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="authorName">Enter Author Name</label>
          <textarea
            id="authorName"
            placeholder="Enter Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="serialNo">Select Serial Number (Mandatory)</label>
          <select 
            id="serialNo" 
            value={serialNo} 
            onChange={(e) => setSerialNo(e.target.value)} 
            required
            className="input-field"
          >
            <option value="">Select Serial No</option>
            {serialNoList.map((serial) => (
              <option key={serial.id} value={serial.number}>
                {serial.number}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="issueDate">Issue Date</label>
          <input
            type="text"
            id="issueDate"
            placeholder="Enter Issue Date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="remarks">Remarks (Optional)</label>
          <textarea
            id="remarks"
            placeholder="Enter Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="input-field"
          />
        </div>

        <button className="submit-btn" onClick={handleReturnbook}>Return Book</button>
      </div>

      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Returnbook;
