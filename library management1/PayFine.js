import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PayFine.css'; // Import corresponding CSS file

const PayFine = () => {
  const navigate = useNavigate();

  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [actualReturnDate, setActualReturnDate] = useState('');
  const [fineCalculated, setFineCalculated] = useState(0);
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState('');

  // Calculate fine based on return dates
  const calculateFine = () => {
    const returnDateObj = new Date(returnDate);
    const actualReturnDateObj = new Date(actualReturnDate);

    // Fine logic: Assuming fine is calculated based on the number of days late
    const timeDiff = actualReturnDateObj - returnDateObj;
    const daysLate = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Days late

    if (daysLate > 0) {
      setFineCalculated(daysLate * 5); // $5 per day late fine (you can change this)
    } else {
      setFineCalculated(0);
    }
  };

  // Handle Pay Fine request
  const handlePayFine = () => {
    const fineDetails = {
      bookName,
      authorName,
      serialNo,
      issueDate,
      returnDate,
      actualReturnDate,
      fineCalculated,
      finePaid,
      remarks,
    };

    axios.post('/api/pay-fine', fineDetails)
      .then(response => {
        alert('Fine paid successfully');
        resetForm();
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

  // Reset form after payment
  const resetForm = () => {
    setBookName('');
    setAuthorName('');
    setSerialNo('');
    setIssueDate('');
    setReturnDate('');
    setActualReturnDate('');
    setFineCalculated(0);
    setFinePaid(false);
    setRemarks('');
  };

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="pay-fine-page">
      <h1>Pay Fine</h1>

      <div className="nav-links">
        <button onClick={handleBack}>Back</button>
        <button onClick={() => navigate('/login/dashboard')}>Dashboard</button>
      </div>

      {/* Pay Fine Form */}
      <div className="pay-fine-form">
        <div className="form-group">
          <label htmlFor="bookName">Enter Book Name</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter Book Name"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorName">Enter Author Name</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Enter Author Name"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="serialNo">Enter Serial Number</label>
          <input
            type="text"
            id="serialNo"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
            placeholder="Enter Serial Number"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="issueDate">Issue Date</label>
          <input
            type="date"
            id="issueDate"
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
          <label htmlFor="actualReturnDate">Actual Return Date</label>
          <input
            type="date"
            id="actualReturnDate"
            value={actualReturnDate}
            onChange={(e) => setActualReturnDate(e.target.value)}
            className="input-field"
            onBlur={calculateFine} // Calculate fine when actual return date is entered
          />
        </div>

        <div className="form-group">
          <label htmlFor="fineCalculated">Fine Calculated</label>
          <input
            type="text"
            id="fineCalculated"
            value={fineCalculated}
            readOnly
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="finePaid">Fine Paid</label>
          <input
            type="checkbox"
            id="finePaid"
            checked={finePaid}
            onChange={(e) => setFinePaid(e.target.checked)}
            className="input-checkbox"
          />
        </div>

        <div className="form-group">
          <label htmlFor="remarks">Remarks (Optional)</label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Enter Remarks"
            className="input-field"
          />
        </div>

        <button className="submit-btn" onClick={handlePayFine}>Pay Fine</button>
      </div>

      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default PayFine;
