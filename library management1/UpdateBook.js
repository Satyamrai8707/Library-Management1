import React from 'react';
import './UpdateBook.css';

const UpdateBook = () => {
  return (
    <div className="update-book-container">
      <h2>Update Book/Movie</h2>
      <form>
        <div className="form-section">
          <div className="input-group">
            <label>Select Type:</label>
            <div className="radio-group">
              <label><input type="radio" name="type" /> Book</label>
              <label><input type="radio" name="type" /> Movie</label>
            </div>
          </div>
          <div className="input-group">
            <label>Book/Movie Name:</label>
            <select>
              <option value="">Select Book/Movie</option>
              <option value="book1">Book 1</option>
              <option value="movie1">Movie 1</option>
            </select>
          </div>
          <div className="input-group">
            <label>Serial No:</label>
            <input type="text" placeholder="Enter Serial No" />
          </div>
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Status:</label>
            <select>
              <option value="">Select Status</option>
              <option value="available">Available</option>
              <option value="borrowed">Borrowed</option>
              <option value="reserved">Reserved</option>
            </select>
          </div>
          <div className="input-group">
            <label>Date:</label>
            <input type="date" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Update</button>
        <button type="button" className="logout-btn">Log Out</button>
      </form>
    </div>
  );
};

export default UpdateBook;
